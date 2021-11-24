import React from "react";
import colors from "../../util/colors";
import { BsUpcScan, BsKeyboard } from "react-icons/bs";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@mui/styles";
import { Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            height: 500,
            width: 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: colors.amber100
        },
        container: {
            backgroundColor: colors.bluegrey200
        }
    })
);

export default function SelectScanMethodMenu() {
    const navigate = useNavigate();
    const classes = useStyles();

    const onManualClick = React.useCallback(() => navigate("/manualSelectProduct"), [navigate]);
    const onScanClick = React.useCallback(() => navigate("/addToList"), [navigate]);

    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ height: '95vh' }}
        >
            <Grid item xs={4}>
                <Paper className={classes.button} onClick={onManualClick}>
                    <BsKeyboard size={350} color={colors.grey700} />
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper className={classes.button} onClick={onScanClick}>
                    <BsUpcScan size={300} color={colors.grey700} />
                </Paper>
            </Grid>
        </Grid>
    );
}