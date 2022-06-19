import React, { useState } from "react";
// import contactUs from "../contactUs";
import {
  ViewListIcon,
  SearchIcon,
  HomeIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";

import { Route, Switch, Link } from "react-router-dom";

// import Nav Bar Component
import NavBar from "../components/headerAndFooter/NavBar";

import HomeRoute from "../pages/homeRoute/HomeRoute";
import SignUp from "../pages/LogInSignIn/signUp";

import LogIn from "../pages/LogInSignIn/LogIn";

import favoritesList from "../pages/yourFavorites/favoritesList";
import PetsProblemsAndSolutions from "../pages/petsProblemsAndSolutions/petsProblemsAndSolutions";
import lostAndFoundPets from "../pages/lostAndFound/lostAndFound";
import cats from "../components/cats/cats";
import dogs from "../components/dogs/allDogs";
import nearestVetnaries from "../pages/hireVetnaries/hireVetnaries";
import allPets from "../pages/searchAllPets/allPets";
import IndividualRoute from "../components/individualRouteUsingParams/individualRoute";
import Footer from "../components/headerAndFooter/Footer";
import AdoptPets from "../pages/adoptPets/AdoptPets";
import UserDashboard from "../dashboard/UserDashboard";

function App() {
  //  const {menuHandle, menuHandlePass}= useState(false);

  // const {menuItems,menuItemsPass}=useState("");

  // function menuClicked(){
  //     menuHandlePass="True";

  // }

  //     if (menuHandle==true){
  //         menuItemsPass= {
  //             logIn: "Log In",
  //             SignUp: "Sign Up",
  //             SignInGoogle: "Sign Up G+"
  //         }

  //         }else{
  //             menuHandle="false"
  //         }
  //     }

  return (
    <>
      <NavBar />

      <div>
        {/*Header Page Routing */}
        <Switch>
          <Route path="/" exact component={HomeRoute} />
          {/* <Route path="/" component={homeRoute} /> */}

          <Route path="/signUp" component={SignUp} />
          <Route path="/logIn" component={LogIn} />

          <Route path="/all_pets" component={allPets} />

          <Route path="/nearest_vetnaries" component={nearestVetnaries} />

          <Route path="/dogs" component={dogs} />

          <Route path="/cats" component={cats} />
          <Route path="/lost_found_pets" component={lostAndFoundPets} />
          <Route
            path="/pets_problems_and_solutions"
            component={PetsProblemsAndSolutions}
          />
          <Route path="/favorites_list" component={favoritesList} />
          <Route path="/adopt_pets" component={AdoptPets} />

          {/* individual pets page routing using params */}
          <Route path="/pets/:indexNumber" component={IndividualRoute} />
          <Route path="/user-dashboard" component={UserDashboard} />
        </Switch>
      </div>

      <Footer />
    </>
  );
}

export default App;
