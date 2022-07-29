import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import allPetsLists from "../../components/AllPetsLists/allPetsList";
import Cards from "../../components/CardsVerticalAligned";
import { fetchPostsByCategory } from "../../api";

function AdoptPets() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (posts == null) {
      fetchPosts();
    }
  }, [posts == null]);

  const fetchPosts = async () => {
    try {
      const category = "adopt_pets";
      const { data } = await fetchPostsByCategory(category);
      setPosts(data.posts);
      // console.log(data);/
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  return (
    <>
      {" "}
      <div>
       
        {/* Search Filters */}
        <div className="text-center">
          <h1 className="mt-10 font-bold  text-2xl">Adopt Pets</h1>
          {/* <div className="flex m-3 justify-center ">
          <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl">
            {" "}
            Purchase Parrots/Birds{" "}
          </button>
          <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl">
            {" "}
            Buy Best Parrots/Birds foods
          </button>
          <button className="bg bg-gray-300 rounded-xl p-1 px-2 mx-2 text-center shadow-sm focus:outline-none transform hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl">
            {" "}
            Buy Best Birds Peripherals/ Toys{" "}
          </button>
        </div> */}

          {/* <div className="mx-40 mt-5 space-y-10">
              (
            <div>
              <pre>{JSON.stringify(posts, null, 2)}</pre>
            </div> ) 
            {
              posts.map((post) => {
                return (
                  <Cards
                    key={post._id}
                    description={post.description}
                    image={post.image.url}
                    address={post.address}
                    // rating={list.rating}
                    // cost={list.cost}
                    // href={list.forHref}
                  />
                );
              })}
          </div> */}

          {posts &&
            posts.map((post) => {
              return (
                <Cards
                  key={post._id}
                  description={post.description}
                  image={post.image.url}
                  address={post.address}
                  title={post.title}
                  post={post}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default AdoptPets;
