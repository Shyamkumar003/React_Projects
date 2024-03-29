export const fetchPostsRequests = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

export const fetchPostssuccess = (posts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: "FETCH_POSTS_FAILURE",
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    console.log(dispatch);

    dispatch(fetchPostsRequests());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((posts) => {
        console.log(posts);
        dispatch(fetchPostssuccess(posts.slice(0, 10)));
      })
      .catch((error) => dispatch(fetchPostsFailure(error.message)));
  };
};
