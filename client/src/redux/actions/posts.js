import * as api from '../api/index'
import { CREATE, FETCH_ALL } from '../constants/actionsType';

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createNewPost(post);
    dispatch({ type: CREATE, payload: data });

  } catch (error) {
    console.log(error.message);
    
  }
} 