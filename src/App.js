import {makeStyles, Paper} from "@material-ui/core";
import Home from "./Components/Home";


const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f6f8',
    height:'100vh'

  },
});


const App = () => {
    const classes = useStyles();

    return (
    <Paper elevation={0} className = {classes.root} style={{overflowY:"scroll"}}>
        <Home/>
    </Paper>
  );
}

export default App;
