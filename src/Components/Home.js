import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import images from '../Assets/img2.jpg';
import images3 from '../Assets/img3.png';
import basicCss from './Home.module.css';
import {Box} from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        // width: "60vw",
        // marginTop: "2vh",

    },
    grid: {
        alignItems: "center",
        justify: "center",
        align: "center",
    },

    typo: {
        border: "solid #D8D8D8",
        borderWidth: "thin",
        width:"30rem",

        "& p":{
            marginLeft:"2rem",
            marginRight:"2rem",
            fontFamily:'Roboto, sans-serif',
        },
        "& span":{
            fontFamily: 'Roboto Mono, monospace',

        }
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        display:"flex" ,
        justifyContent:"center"
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    bottom: {
        width:"100%",
        marginBottom: 12,
        margin:0,
        alignItems: 'start',
        color:'textSecondary',
    },

    logo: {
        position: 'absolute',
        top: '8px',
        left: '16px',
    },
    MainPic: {
        position: 'absolute',
    }

}));

const Home = () => {
    const classes = useStyles();


    return (

        <Container maxWidth="md" >
            <Grid container spacing={3} >
                <Grid item md={12} >
                    <Card className={classes.card}>
                        <CardActionArea style={{position: 'relative'}}>
                            <div style={{width:'20%', paddingLeft: '2%'}}>
                                <h2 style={{position:'absolute', marginTop:'100px'}}><span style={{fontFamily: 'Roboto, sans-serif', wordSpacing: '5%'}}> Thrive Hippo Sanctuary</span>  <br/>is receiving new hippos <br/> every day that need care</h2>
                            </div>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="400rem"
                                image={images}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>


                        <Card>
                            <Grid container spacing={3}>
                                <Grid item xs={12} style={{textAlign: 'center', marginTop: '2vh'}}>
                                    <h2>Facts about Hippopotamus</h2>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12} style={{textAlign: 'center', marginBottom: '2vh'}}>
                                        <Button variant="contained" href="/hippopotamus">List of Hippos</Button>
                                </Grid>
                            </Grid>

                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Box className={classes.typo}>
                                        <p> <span> SCIENTIFIC NAME:</span>  Hippopotamus amphibious</p>
                                        <p><span>TYPE:</span> Mammals</p>
                                        <p> <span>DIET:</span>Herbivore</p>
                                        <p><span>GROUP NAME:</span> School</p>
                                        <p><span>AVERAGE LIFE SPAN IN THE WILD:</span> Up to 40 years</p>
                                        <p> <span>WEIGHT:</span> 1.5 to 4 tons</p>
                                        <p><span>WEIGHT:</span> 1.5 to 4 tons</p>
                                        <p><span>SIZE RELATIVE TO A 6-FT MAN:</span>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica</p>
                                        <p><CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="200rem"
                                            width="100rem"
                                            image={images3}
                                            title="Contemplative Reptile"
                                        />
                                        </p>
                                            <hr style={{backgroundColor:"#D8D8D8"}}/>
                                        <p><span>RED LIST STATUS:</span> Vulnerable </p>
                                        <Box style={{marginBottom:0}}>
                                            <ul className={basicCss.progressbar}>
                                                <li>LC</li>
                                                <li>NT</li>
                                                <li className={basicCss.active}>VU</li>
                                                <li>EN</li>
                                                <li>CR</li>
                                                <li>EX</li>
                                            </ul>
                                        </Box>
                                        <Box className={classes.bottom} display="flex" >
                                            <Box flexGrow={1} >
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                LEAST CONCERN
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                EXTINCT
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <p><span>CURRENT POPULATION TREND:</span> Decreasing</p>
                                    </Box>
                                </CardContent>
                            </div>
                        </Card>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Home;