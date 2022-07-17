import React from "react";
import Cards from "../../components/Cards";
import allHotelsList from "../../components/AllPetsLists/allPetsList";

function allPets() {
  return (
    <div>
      <div>
        {/* All pets List */}
        <h1 className="font-bold text-4xl  ml-20 text-center">
          {" "}
          Explore Various Pets{" "}
        </h1>
        <p className="ml-20 flex justify-center">
          Add filters by place/ price/ location
        </p>

        <div className="flex flex-wrap items-center justify-center text-center">
          {allHotelsList.map(function (lists) {
            return (
              <Cards
                key={lists.id}
                name={lists.name}
                img={lists.imgURL}
                place={lists.place}
                rating={lists.rating}
                cost={lists.cost}
                href={lists.forHref}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default allPets;
