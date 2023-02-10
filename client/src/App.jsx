import { AppBar, Container, Typography } from "@material-ui/core"

import memories from './assets/images/memories.png';

import useStyles from './appStyles';

function App() {
  const classes = useStyles();
 
  return (
   <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img  src={memories} className={classes.image} alt="icon" height="60" />
      </AppBar>
   </Container>
  )
}

export default App
