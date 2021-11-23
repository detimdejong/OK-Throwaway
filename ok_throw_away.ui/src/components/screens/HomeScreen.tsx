import React from "react";
import colors from "../../util/colors";
import { BsUpcScan, BsKeyboard } from "react-icons/bs";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@mui/styles";


// { height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}
const useStyles = makeStyles(() =>
    createStyles({
        button: {
            height: 400,
            width: 400,
        }
    })
);

export default function HomeScreen() {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{height: '95vh'}}
        >
            <Grid item xs={3}>
                <IconButton className={classes.button}>
                    <BsKeyboard size={350} />
                </IconButton>
            </Grid>

            <Grid item xs={3}>
                <IconButton className={classes.button}>
                    <BsUpcScan size={275} />
                </IconButton>
            </Grid>
        </Grid>
    );
}