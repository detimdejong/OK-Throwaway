import { makeStyles } from "@mui/styles";
import colors from "../constants/colors";
import { Paper } from "@material-ui/core";
import { BsUpcScan, BsKeyboard } from "react-icons/bs";
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
        height: "94%",
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
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        float: "left",
        margin: "3%"
    },
    statusBar: {
        height: 50,
    }
});

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.statusBar}>
                <div style={{marginLeft: 15}}>
                    <BatteryStatus batteryPercentage={50} />
                </div>
            </div>

            <div className={classes.innerContainer}>

                <Paper className={classes.button}>
                    <BsKeyboard size="90%" color={colors.grey800} />
                </Paper>

                <Paper className={classes.button}>
                    <BsUpcScan size="80%" color={colors.grey800} />
                </Paper>
            </div>
        </div>
    );
}