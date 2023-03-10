import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import moment from "moment/moment"

export const Post = ({post}) => {
  return (
    <Card >
      <CardMedia  image={post.selectedFile} title={post.title} />
      <div >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div >
        <Button style={{ color: 'white' }} size="small" ><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div >
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography  gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions >
        <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" ><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  )
}
