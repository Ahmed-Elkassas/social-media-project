import PostMessage from "../models/postMsg.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
    const post = body.req;
    const newPostMessage = new PostMessage(post);

  try {
    await newPostMessage.save();
    res.status(201).json(newPostMessage);

  } catch (error) {
    res.status(409).json({message: error.message})
  }
};
