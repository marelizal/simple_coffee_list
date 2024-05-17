"use client";
import Hero from "@src/components/Hero/Hero";
import CardProduct from "@src/components/Card/CardProduct";
import { Product } from "@src/interfaces/product.interface";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState<Product[]>([]);
  const [showAvailable, setShowAvailable] = useState(true);
  const [showAll, setshowAll] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="flex justify-center mt-16">
      <div className="bg-customBG absolute flex lg:w-100    md:mx-20 xs:mx-20 rounded-xl  flex-col  ">
        <Hero
          setShowAvailable={setShowAvailable}
          showAvailable={showAvailable}
          setshowAll={setshowAll}
          showAll={showAll}
        />

        <div className="flex items-center justify-center flex-wrap gap-3 mb-10 w-100 transition-all ease-in-out">
          {data &&
            data.map((product, index) => (
              <CardProduct
                key={index}
                product={product}
                showAvailable={showAvailable}
                showAll={showAll}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
