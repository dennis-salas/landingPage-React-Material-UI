import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email"


export const Explanation = () => {

    const classes = useStyles();

    return (
        <Paper variant="outlined" elevation={0} square className={classes.explanation}>
            <Typography variant="subtitle2" paragraph >
                <strong> MICE </strong> groups are finally back, ✌🏻 and we feel like we are in the pink !  All this past months, we have been talking to you guys, and we have listened what the new necessities ar now for the <strong> MICE </strong> Market, now thet... this thingy is over 😷 ehem...
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom>
                It took time, but our Operations Team have managed to curate a program tha has it all,
                This offer is based on a 5-star 100% certified eco-resort 20 mins north of <strong> Barcelona </strong>, and
                surrounded by nature.🌲
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom style={{ margin: "1rem 1.5rem" }}>
                👉🏻 For <strong>day 1</strong>, we hace prepared a 1/2 meeting, and a picnic lunch among
                vineyards, with sea-ciews and great wine activity.
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom style={{ margin: "1rem 1.5rem" }}>
                👉🏻 For <strong>day 2</strong>, we actually spend the day in <strong> Barcelona </strong>. We first enjoy a specialised
                tour at the @22 district, well known as a major hub in the SOUTH of Europe for
                digital entrepreneurs, and tech start ups.
            </Typography>
            <Typography variant="subtitle1" paragraph gutterBottom>
                Our guide will help us notice all the high-tech infraestructure, the IOT (Internet of Things)
                present in everyday life urban objects, and the policies that have transformed <strong> Barcelona </strong>
                to a capital for Mobile📱, Startupps and SmartCites.
                Last, but not least - we are offering a first-in-class experience at Valkiria -
                extraordinary atelier, where our tailor-made workshop, will help the group enhance their
                digital image.🤗 This workshop can work for the individual participants, as well as at a
                company level
            </Typography>
            <div className={classes.action}>
                <Button variant="contained" startIcon={<EmailIcon />} style={{ margin: "2rem 0", backgroundColor: "#ea5933" }}>Send me an email <span className={classes.extendText}>to learn more ...</span></Button>
                <br />
                <Typography variant="h6" >
                    Or get in touch at miranda@cuttingedge-events.com
                </Typography>
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    explanation: {
        width: "inherit",
        height: "auto",
        padding: theme.spacing(2)
    },
    action: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& button:hover": {
            backgroundColor: "#ccc !important",
        }
    },
    [theme.breakpoints.down("md")]: {
        extendText: {
            display: "none"
        }
    }

}))
