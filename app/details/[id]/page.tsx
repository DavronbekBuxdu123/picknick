"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useProductStore from "@/app/store/useProductStore";
import Image from "next/image";

const ProductDetailClient = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const {
    products,
    fetchProducts,
    categories,
    fetchCategories,
    addToCart,
    carts,
    search,
  } = useProductStore();

  useEffect(() => {
    const loadProduct = async () => {
      if (products.length === 0) {
        await fetchProducts();
      }
    };
    loadProduct();
  }, [fetchProducts, products.length]);

  useEffect(() => {
    if (products.length > 0 && id) {
      const foundProduct = products.find((item) => item.id === id);
      setProduct(foundProduct);
      setLoading(false);
    }
  }, [id, products]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (loading) return <div className="p-4 text-center">Yuklanmoqda...</div>;
  if (!product)
    return <div className="p-4 text-center">Mahsulot topilmadi...</div>;

  return (
    <div className="p-3 max-w-7xl mx-auto h-auto pb-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {product.product_images?.length > 0 && (
            <div className="flex lg:flex-col gap-2 max-h-[500px] overflow-y-auto scroll-hidden pr-2">
              {product.product_images.map((img: any, i: number) => {
                const imageUrl = `https://api.piknicuz.com/api/uploads/images/${img.images_src}`;
                const isSelected = selectedImage === imageUrl;

                return (
                  <Image
                    key={i}
                    onClick={() => setSelectedImage(imageUrl)}
                    className={`object-contain rounded-[16px]  border cursor-pointer w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] ${
                      isSelected
                        ? "border-4 border-blue-600"
                        : "border-green-300 hover:border-blue-400"
                    }`}
                    width={100}
                    height={100}
                    alt="photo"
                    src={imageUrl}
                  />
                );
              })}
            </div>
          )}

          <Image
            style={{ borderRadius: "16px" }}
            className="rounded-[16px] w-full lg:w-[600px] h-[300px] lg:h-[500px] object-contain"
            width={600}
            height={500}
            alt="photo"
            src={
              selectedImage
                ? selectedImage
                : `https://api.piknicuz.com/api/uploads/images/${product.image_src}`
            }
          />
        </div>

        <div className="p-2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          <div className="flex items-center gap-x-2 mb-2">
            <Image src="/star.svg" width={18} height={18} alt="star" />
            <Image src="/star.svg" width={18} height={18} alt="star" />
            <Image src="/star.svg" width={18} height={18} alt="star" />
            <Image src="/star.svg" width={18} height={18} alt="star" />
            <Image src="/star.svg" width={18} height={18} alt="star" />

            <p className="mb-0 text-sm">5.0/5</p>
          </div>

          <p className="text-2xl text-green-600 font-semibold mb-2">
            {Number(product.price).toLocaleString()} UZS
          </p>

          {product.category && (
            <p className="text-md text-gray-500 mb-2">
              Kategoriya:{" "}
              <span className="font-medium text-gray-800">
                {product.category.name}
              </span>
            </p>
          )}

          <div
            className="prose max-w-full mt-4"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          <div className="flex flex-col lg:flex-row items-center gap-4 mt-6 mb-5">
            <div className="flex gap-x-4 items-center">
              <button
                onClick={handleDecrement}
                className="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300 text-xl"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                disabled
                className="w-16 text-center border rounded py-2"
              />
              <button
                onClick={handleIncrement}
                className="w-10 h-10 bg-gray-200 rounded hover:bg-gray-300 text-xl"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "rgba(36, 93, 48, 1)",
                borderRadius: "62px",
              }}
              className="text-white font-semibold px-6 py-3 w-full lg:w-[300px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Video */}
      {product.video_src && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Mahsulot Videosi</h2>
          <video
            controls
            src={`https://api.piknicuz.com/api/uploads/videos/${product.video_src}`}
            className="w-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailClient;
