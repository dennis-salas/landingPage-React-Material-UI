import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles } from "@material-ui/core";
import { listData } from "../listData";

export const ListComponent = () => {

    const classes = useStyles();

    return (
        <List component="nav" aria-labelledby='nested-list-subhearder'>
            <ListSubheader component="div" id="nested-list-subhearder">
                Cost based on a group of 30px, accmmodate in twin rooms
            </ListSubheader>
            {
                listData.map(item => (
                    <ListItem key={item.text}>
                        <ListItemIcon className={classes.icon}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))
            }
        </List>
    )
}

const useStyles = makeStyles((theme) => ({

    icon: {
        color: "#ea5933"
    }


}))
