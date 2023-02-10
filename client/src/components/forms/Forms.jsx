import { Button, Paper, TextField, Typography } from "@material-ui/core";

import useStyles from './formStyles';

export const Forms = () => {

   const classes = useStyles()

  const submitHandler = (event) => {
    event.preventDefault();
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
        <TextField name="title" variant="outlined" label="Title" fullWidth />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          maxRows={4}
        />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth />
        <Button type="submit" variant="contained" fullWidth color="primary">Submit</Button>
      </form>
    </Paper>
  );
};
