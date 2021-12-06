import React from 'react';
import { makeStyles, Paper, Typography } from "@material-ui/core";
import StarsIcon from "@material-ui/icons/Stars";

export const Banner = () => {

    const classes = useStyles()

    return (
        <>
            <Paper variant="outlined" square elevation={0} className={classes.banner}>
                <div className={classes.titleContainer}>
                    <Typography variant="h4" className_={classes.title}>
                        Reset your Events in <span className={classes.spamBanner}> BCN</span>
                    </Typography>
                    <img src={"https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/32230/image/travel-agency-logo-maker-with-travel-graphics-a1202.jpg"} alt="logo" className={classes.logo} />
                </div>
                <div className={classes.subtitleContainer}>
                    <Typography variant="h6" className_={classes.subTitle}>
                        Organize your meeting in a ... <br />
                        100% certified eco-resort
                        <StarsIcon className={classes.icon} fontSize="small" />
                        best-in-class-speed-connection
                        <StarsIcon className={classes.icon} fontSize="small" />
                        surrounded by nature
                        <StarsIcon className={classes.icon} fontSize="small" />
                        20-mins from Barcelona
                    </Typography>
                </div>
            </Paper>
        </>
    )
}


const useStyles = makeStyles((theme) => ({
    banner: {
        width: "inherit",
        height: "55vh",
        backgroundImage: `url(${'https://tecnohotelnews.com/wp-content/uploads/2017/08/shutterstock_144112840.jpg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        color: "#fff",
        fontWeight: "bold",
        position: "relative",
    },
    titleContainer: {
        background: "#000",
        opacity: 0.8,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        padding: theme.spacing(2)

    },
    logo: {
        width: "4rem",
        height: "auto",
        padding: theme.spacing(3)
    },
    subtitleContainer: {
        textAlign: "center",
        background: "#000",
        color: "#ea5933",
        opacity: 0.9,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0

    },
    subTitle: {
        fontWeight: "bold",
        padding: theme.spacing(3),
        height: "auto",
    },
    icon: {
        verticalAlign: "middle",
        margin: theme.spacing(0, 1)
    },
    [theme.breakpoints.down("sm")]: {
        title: {
            fontSize: "1rem",
        },
        logo: {
            width: "2rem"
        },
        subTitle: {
            fontSize: "1rem"
        }

    },
    spamBanner: {
        color: "#ea5933"
    }

}))

