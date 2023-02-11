import { useSelector } from "react-redux"
import { Post } from "./post/Post"

export const Posts = () => {

 const posts = useSelector(state => state.posts)

  console.log(posts)

  return (
    <div>
        <Post />
        <Post />
    </div>
  )
}
