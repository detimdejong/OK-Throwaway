import * as React from 'react';
import { makeStyles } from "@material-ui/core";
import colors from "../constants/colors";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router';

const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: colors.bluegrey800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    listContainer: {
        backgroundColor: colors.amber100,
        height: "40vh",
        width: "24vw",
    }
});

export default function ListOverview() {
    // barcode or product name
    const { product } = useParams();
    const classes = useStyles();
    const lists = React.useMemo(() => ["1", "2", "3", "4", "5", "6", "7", "8"], []);
    
    const isBarcode = React.useMemo(() => isNaN(Number(product)), [product]);

    return (
        <div className={classes.container}>
            <Grid
                container
                rowSpacing={2}
                justifyContent="center"
                alignItems="center"
            >
                {lists.map((v) => (
                    <Grid item xs={3}>
                        <div style={{alignItems: "center", justifyContent: "center", display: "flex" }}>
                            <Paper className={classes.listContainer}>
                                <div style={{height: "100%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                    <p>{v}</p>
                                </div>
                            </Paper>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}