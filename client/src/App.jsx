import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";

import { getPosts } from "./redux/actions/posts";
import { Posts } from "./components/posts/Posts";
import { Forms } from "./components/forms/Forms";

import memories from "./assets/images/memories.png";
import useStyles from "./appStyles";

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, []);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} className={classes.image} alt="icon" height="60" />
      </AppBar>
      <Container>
        <Grow in>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </Container>
  );
}

export default App;
