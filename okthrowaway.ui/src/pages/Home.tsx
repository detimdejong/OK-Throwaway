import React from "react";
import { makeStyles } from "@mui/styles";
import colors from "../constants/colors";
import { Paper, Grid } from "@material-ui/core";
import { BsKeyboard, BsArrowDown } from "react-icons/bs";
import BatteryStatus from "../components/BatteryStatus";
import { useNavigate } from "react-router";
import useBarcodeScanner from "../hooks/useBarcodeScanner";

const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: colors.customThemeBlack
    },
    innerContainer: {
        backgroundColor: colors.customThemeBlack,
        height: "100%",
        width: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },
    button: {
        backgroundColor: colors.bluegrey800,
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
    const navigate = useNavigate(); 
    const { barcode, setBarcode } = useBarcodeScanner();
    const classes = useStyles();

    React.useEffect(() => {
        if (barcode.endsWith(';')) {
            navigate(`/selectlist/${barcode.replace(';', '')}/true`);            
            setBarcode('');
        }
    }, [barcode]);

    return (
        <div className={classes.container}>

            <div className={classes.innerContainer}>
                <div style={{ backgroundColor:  colors.customThemeBlack}} className={classes.button} onClick={() => navigate("/findproduct")}>

                    <BsKeyboard size="90%" color={colors.customThemeGrey} />
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
                                <p style={{ fontSize: "300%" , color:colors.customThemeGrey }} >
                                    SCAN DE BARCODE
                                </p>
                                <BsArrowDown size="100%" color={colors.customThemeGrey}/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}