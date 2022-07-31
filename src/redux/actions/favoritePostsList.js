import { ADDFAVORITEPOSTSLIST, REMOVEFAVORITEPOSTSLIST } from "./types";

export const addFavoritePostsList = (post) => {
  return {
    type: ADDFAVORITEPOSTSLIST,
    payload: post,
  };
};

export const removeFavoritePostsList = (postId) => {
  return {
    type: REMOVEFAVORITEPOSTSLIST,
    payload: postId,
  };
};
