import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core"

import memories from './assets/images/memories.png';

import useStyles from './appStyles';
import { Posts } from "./components/posts/Posts";
import { Forms } from "./components/forms/Forms";

function App() {
  const classes = useStyles();
 
  return (
   <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img  src={memories} className={classes.image} alt="icon" height="60" />
      </AppBar>
      <Container>
        <Grow in>
          <Grid container  justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item  xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item  xs={12} sm={4}>
              <Forms />
            </Grid>
          </Grid>
        </Grow>
      </Container>
   </Container>
  )
}

export default App
