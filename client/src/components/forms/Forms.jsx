import { Button, Paper, TextField, Typography } from "@material-ui/core";

import FileBase from 'react-file-base64';

import useStyles from './formStyles';
import { useState } from "react";

export const Forms = () => {
  const classes = useStyles()

  const [postData, setPostData] = useState({ title: '', message: '', tags: [], selectedFile: ''}) 

  console.log(postData)

  const submitHandler = (e) => {
    e.preventDefault();
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
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button type="submit" variant="contained" fullWidth color="primary">Submit</Button>
      </form>
    </Paper>
  );
};
