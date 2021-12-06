import { ImageList, ImageListItem, ImageListItemBar, makeStyles, Paper } from "@material-ui/core";
import { tileData } from "../tileData";


export const GalleryComponent = () => {

    const classes = useStyles();

    return (
        <Paper variant="outlined" square elevation={0} className={classes.galleryRoot}>
            <div className={classes.mosaic}>
                <ImageList rowHeight={220} className={classes.gridList}>
                    {
                        tileData.map(item => (
                            <ImageListItem key={item.title}>
                                <img src={item.img} alt={item.img} />
                                <ImageListItemBar title={item.title} />
                            </ImageListItem>
                        ))
                    }
                </ImageList>
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({

    galleryRoot: {
        height: "auto"
    },
    mosaic: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    gridList: {
        width: 1000,
        height: 550,
        "&::-webkit-scrollbar": {
            display: "none"
        }
    }

}))