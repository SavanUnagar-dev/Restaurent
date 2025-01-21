import React from "react";
import img1 from "../../assets/3.png";
import img2 from "../../assets/4.png";
import img3 from "../../assets/5.png";

const FoodData = [
  {
    image: img1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$19.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, animi?"
  },
  {
    image: img2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$19.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, animi?"

  },
  {
    image: img3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$19.99",
    name: "Food Name",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, animi?"

  },
];

const TopList = () => {
  return (
    <>
      <div className="container py-10">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold">Top List</h1>
          <p>Our Top List</p>
        </div>

        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {FoodData.map((item, index) => (
                <div
                 key={index}
                 className="bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300"
                >
                  <img 
                    src={item.image} 
                    alt=""
                    className="w-60 sm:w-40 sm:h-40 object-cover mx-auto rounded-full img-shadow"
                    />
                    <div className="space-y-2">
                       <p className="text-lg font-semibold ">{item.name}</p>
                       <p className="text-red-500">{item.rating}</p>
                       <p className="text-xl font-semibold">{item.desc}</p>
                       <p className="text-xl font-semibold">{item.price}</p>
                    </div>                   
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TopList;
