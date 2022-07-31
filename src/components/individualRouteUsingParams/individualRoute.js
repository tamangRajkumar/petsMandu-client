import React from "react";
import listOfPets from "../AllPetsLists/allPetsList";
import Cards from "./cardForIndividualRoute";
import { useParams } from "react-router-dom";

function IndividualRoute() {
  const { indexNumber } = useParams();
  console.log(indexNumber);

  return (
    <>
      <Cards
        key={listOfPets[`${indexNumber}`].id}
        hotelName={listOfPets[`${indexNumber}`].name}
        img={listOfPets[`${indexNumber}`].imgURL}
        petDetails={listOfPets[`${indexNumber}`].petDetails}
        mapImg={listOfPets[`${indexNumber}`].mapImg}
        petComments={listOfPets[`${indexNumber}`].petComments}
      />
    </>
  );
}

export default IndividualRoute;
