import { Product } from "@src/interfaces/product.interface";
import Image from "next/image";
import StarFilled from "../icons/StarFilled";
import Star from "../icons/Star";

type CardProductTypes = {
  product: Product;
  showAvailable: boolean;
  showAll: boolean;
};

const CardProduct = ({ product, showAvailable, showAll }: CardProductTypes) => {
  if (showAll) {
    // Si showAll es true, mostramos todos los productos
    return (
      <div className="flex  flex-col w-80 p-4 mb-30 hover:bg-customBG2 cursor-pointer rounded-">
        <div className="relative w-full h-40">
          {product.popular && (
            <span className="absolute bg-customPopularColor px-2 py-2 left-2 top-1  z-10 rounded-3xl">
              <p className="text-black font-semibold text-sm">Popular</p>
            </span>
          )}
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="text-white flex justify-between mx-2 mt-2">
          <p className="font-bold">{product.name}</p>
          <span className="bg-customBgGreen rounded p-1">
            <p className="text-black font-semibold text-sm">{product.price}</p>
          </span>
        </div>
        <div className="flex justify-between mx-2 mt-1 font-bold text-customSubTitleColor">
          <div className="flex gap-1">
            {product.votes > 0 ? <StarFilled /> : <Star />}
            {product.votes > 0 ? (
              <p>({product.votes} votes)</p>
            ) : (
              <p>No rating</p>
            )}
          </div>
          {!product.available && (
            <p className="text-customTextDanger">Sold out</p>
          )}
        </div>
      </div>
    );
  } else {
    // Si showAll es false, verificamos la disponibilidad individualmente
    return (
      showAvailable === product.available && (
        <div className="rounded-sm flex  flex-col w-80 p-4 mb-30 hover:bg-customBG2  cursor-pointer ">
          <div className="relative w-full h-40">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="text-white flex justify-between mx-2 mt-2">
            <p className="font-bold">{product.name}</p>
            <span className="bg-customBgGreen rounded p-1">
              <p className="text-black font-semibold text-sm">
                {product.price}
              </p>
            </span>
          </div>
          <div className="flex justify-between mx-2 mt-1 font-bold text-customSubTitleColor">
            <div className="flex gap-1">
              {product.votes > 0 ? <StarFilled /> : <Star />}
              {product.votes > 0 ? (
                <p>({product.votes} votes)</p>
              ) : (
                <p>No rating</p>
              )}
            </div>
            {!product.available && (
              <p className="text-customTextDanger">Sold out</p>
            )}
          </div>
        </div>
      )
    );
  }
};

export default CardProduct;
