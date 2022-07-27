import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import allPetsLists from "../../components/AllPetsLists/allPetsList";
import Cards from "../../components/CardsVerticalAligned";
import { fetchPostsByCategory } from "../../api";

const NearestVetneries = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (posts == null) {
      fetchPosts();
    }
  }, [posts == null]);

  const fetchPosts = async () => {
    try {
      let category = "nearest_vetneries";
      const { data } = await fetchPostsByCategory(category);
      setPosts(data.posts);
      // console.log(data);
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
          <h1 className="mt-10 font-bold  text-2xl">Search By Filters</h1>

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
};

export default NearestVetneries;
