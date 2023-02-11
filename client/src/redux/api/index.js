import axios from "axios";

const URL = 'http://localhost:8000/posts';

export const fetchPosts = () => axios.get(URL);
export const createNewPost = (newPost) => axios.post(URL, newPost)
