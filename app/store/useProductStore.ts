import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

interface Product {
  category_id: number;
  id: number;
  title: string;
  price: number;
  image_src: string;
}

interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

interface ProductStore {
  products: Product[];
  categories: any[];
  DetailsId: string;
  carts: CartItem[];
  search: string;

  setSearch: (text: string) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  handleQuantity: (type: "PLUS" | "MINUS", id: number) => void;

  setDetailsId: (id: string) => void;
  fetchProducts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [],
      categories: [],
      DetailsId: "",
      carts: [],
      search: "",
      clearCart: () => set({ carts: [] }),

      setSearch: (text) => set(() => ({ search: text })),

      addToCart: (item) =>
        set((state) => {
          const existing = state.carts.find((i) => i.product.id === item.id);
          if (existing) {
            return {
              carts: state.carts.map((i) =>
                i.product.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return {
            carts: [
              ...state.carts,
              { id: item.id, product: item, quantity: 1 },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          carts: state.carts.filter((item) => item.id !== id),
        })),

      handleQuantity: (type, id) =>
        set((state) => ({
          carts: state.carts
            .map((item) => {
              if (item.id === id) {
                const newQty =
                  type === "PLUS" ? item.quantity + 1 : item.quantity - 1;
                return { ...item, quantity: newQty };
              }
              return item;
            })
            .filter((item) => item.quantity > 0),
        })),

      setDetailsId: (id) => set(() => ({ DetailsId: id })),

      fetchProducts: async () => {
        try {
          const res = await axios.get("https://api.piknicuz.com/api/products");
          set(() => ({ products: res.data.data }));
        } catch (err) {
          console.log(err);
        }
      },

      fetchCategories: async () => {
        try {
          const res = await axios.get(
            "https://api.piknicuz.com/api/categories"
          );
          set(() => ({ categories: res.data.data }));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    {
      name: "product-storage", // localStorage key
    }
  )
);

export default useProductStore;
