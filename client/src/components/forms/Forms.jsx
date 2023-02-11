import { Button, Paper, TextField, Typography } from "@material-ui/core";

import FileBase from 'react-file-base64';

import useStyles from './formStyles';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/posts";

export const Forms = () => {
  const classes = useStyles()

  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: [], selectedFile: ''}) 
  const dispatch = useDispatch()


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(postData))
  };

  return (
    <Paper className={classes.paper}>
      <form className={`${classes.root} ${classes.form}`} autoComplete="auto" onSubmit={submitHandler}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} 
        />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          maxRows={4}
          value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}
        />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button type="submit" variant="contained" fullWidth color="primary">Submit</Button>
      </form>
    </Paper>
  );
};
