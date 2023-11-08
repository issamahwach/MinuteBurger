import React from "react";
import SpecialitiesItem from "./SpecialitiesItem";

function Specialities() {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2">
        <img src="about-img.png" className="w-3/4" />
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl text-white uppercase">
          Step into burger heaven
        </h3>
        <p className="text-gray-400 leading-loose mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          perspiciatis rem dignissimos obcaecati asperiores doloremque, beatae
          unde voluptatibus, dolor atque voluptates? Nesciunt dolorum ducimus
          iure adipisci. At odio ratione magnam.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white mt-8">
          <SpecialitiesItem title="best price" />
          <SpecialitiesItem title="Best Service" />
          <SpecialitiesItem title="Fresh Ingredient" />
          <SpecialitiesItem title="backed buns" />
          <SpecialitiesItem title="natural cheese" />
          <SpecialitiesItem title="veg & non-veg" />
        </div>
      </div>
    </div>
  );
}

export default Specialities;
