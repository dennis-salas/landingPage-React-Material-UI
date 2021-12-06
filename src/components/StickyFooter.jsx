import { Container, makeStyles, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Copyright © 2021
        </Typography>
    )
}

export const StickyFooter = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    Curated with <FavoriteIcon style={{ color: "red" }} />
                    by the <span> CUTT/events people. </span>
                </Typography>
                <Copyright />
            </Container>
        </footer>
    )
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        textAlign: "center"
    }

}))