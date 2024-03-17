import React from "react";
import { products } from "../constants/index";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-">
        <h2 className="text-4xl font-palanquin font-bold">
          Out <span className="text-coral-red">Popular</span> products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam
          perspiciatis sapiente laborum fugiat labore optio ut autem provident
          adipisci odit, id vel quo hic aperiam tempora ex, laudantium nihil.
        </p>
      </div>
      <div className="mp-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

// {
//   imgURL: shoe4,
//   name: "Nike Air Jordan-01",
//   price: "$200.20",
// }

export default PopularProducts;
