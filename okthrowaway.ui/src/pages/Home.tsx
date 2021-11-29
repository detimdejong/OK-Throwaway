import { makeStyles } from "@mui/styles";
import colors from "../constants/colors";
import { Paper, Grid } from "@material-ui/core";
import { BsKeyboard, BsArrowDown } from "react-icons/bs";
import BatteryStatus from "../components/BatteryStatus";

const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: colors.bluegrey800
    },
    innerContainer: {
        backgroundColor: colors.bluegrey800,
        height: "90%",
        width: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },
    button: {
        backgroundColor: colors.amber100,
        height: "80%",
        width: "40%",
        display: "flex",
        float: "left",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "5%"
    },
    statusBar: {
        height: "5%",
        width: "100%",
    },
    dividerItemContainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    divider: {
        background: colors.white,
        height: "100%",
        width: 1,
    }
});

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.statusBar}>
                <div style={{ marginLeft: 15, float: "right" }}>
                    <BatteryStatus batteryPercentage={100} />
                </div>
            </div>

            <div className={classes.innerContainer}>
                <Paper className={classes.button}>
                    <BsKeyboard size="90%" color={colors.grey800} />
                </Paper>

                <div style={{ height: "90%", position: "absolute", justifyContent: "center" }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{ height: "100%" }}
                    >
                        <Grid item xs={12} sm={6} md={5}>
                            <div className={classes.dividerItemContainer}>
                                <div className={classes.divider} />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2}>
                            <div className={classes.dividerItemContainer}>
                                <p style={{ color: colors.white, fontSize: 30 }}>
                                    OF
                                </p>
                            </div>
                        </Grid>

                        <Grid xs={12} sm={6} md={5}>
                            <div className={classes.dividerItemContainer}>
                                <div className={classes.divider} />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div style={{ height: "80%", width: "40%", margin: "3%" }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{ height: "100%", margin: "1%" }}
                    >

                        <Grid item xs={12} sm={12} md={10}>
                            <div className={classes.dividerItemContainer}>
                                <p style={{ fontSize: "300%" }}>
                                    SCAN DE BARCODE
                                </p>
                                <BsArrowDown size="100%" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}