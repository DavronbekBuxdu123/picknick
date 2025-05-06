import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";

export interface Product {
  category: { id: number; name: string };
  video_src: string;
  product_images: never[];
  description: string;
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
interface Category {
  id: number;
  name: string;
  image_src: string;
}
interface ProductStore {
  products: Product[];
  categories: Category[];
  DetailsId: string;
  carts: CartItem[];
  search: string;
  loading: boolean; 
  setSearch: (text: string) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  handleQuantity: (type: "PLUS" | "MINUS", id: number) => void;
  clearCart: () => void;
  setDetailsId: (id: string) => void;
  fetchProducts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: [] as Product[],
      categories: [] as Category[],
      DetailsId: "",
      carts: [],
      search: "",
      loading: false,

      clearCart: () => set({ carts: [] }),

      setSearch: (text) => set(() => ({ search: text })),

      addToCart: (item) => {
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
        });
        toast.success("Maxsulot savatga qo'shildi");
      },

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
        set({ loading: true });
        try {
          const res = await axios.get("https://api.piknicuz.com/api/products");
          set(() => ({ products: res.data.data }));
        } catch (err) {
          console.log(err);
        } finally {
          set({ loading: false });
        }
      },

      fetchCategories: async () => {
        set({ loading: true });
        try {
          const res = await axios.get(
            "https://api.piknicuz.com/api/categories"
          );
          set(() => ({ categories: res.data.data }));
        } catch (err) {
          console.log(err);
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "product-storage",
    }
  )
);

export default useProductStore;
