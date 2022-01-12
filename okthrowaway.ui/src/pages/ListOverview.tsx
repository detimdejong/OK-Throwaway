import * as React from 'react';
import { makeStyles } from "@material-ui/core";
import colors from "../constants/colors";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router';
import { ShoppingList } from "../types/ShoppingList";
import { getShoppingLists, addProductToList } from '../Api/api-client';
import { CSSTransition } from 'react-transition-group';
import { VscVerified, VscError } from 'react-icons/vsc';

const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: colors.customThemeBlack,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    listContainer: {
        backgroundColor: colors.amber100,
        height: "40vh",

        width: "24vw",
    },
    alertEnter: {
        opacity: 0,
        transform: "scale(0.9)"
    },
    alertEnterActive: {
        opacity: 1,
        transform: "translateX(0)",
        transition: 'opacity 300ms, transform 300ms'
    },
    alertExit: {
        opacity: 1
    },
    alertExitActive: {
        opacity: 0,
        transform: "scale(0.9)",
        transition: "opacity 300ms, transform 300ms"
    }
});

export default function ListOverview() {
    const [lists, setLists] = React.useState<Array<ShoppingList> | undefined>();
    const [showConfirmation, setShowConfirmation] = React.useState<boolean>();
    const [error, setError] = React.useState<boolean>();

    const navigate = useNavigate();
    const { product, isBarcode } = useParams();
    const classes = useStyles();

    const onListClick = React.useCallback(async (listId: number) => {
        if (product) {
            const res = await addProductToList(product, listId, isBarcode === 'true');
            setError(res !== 200);
            setShowConfirmation(true);
        }
    }, [product, isBarcode, lists]);

    const get = React.useCallback(async () => {
        await getShoppingLists(1).then(p => setLists(p));
    }, []);

    React.useEffect(() => {
        get();
    }, []);

    React.useEffect(() => {
        if (showConfirmation) {
            const timer = setTimeout(() => { 
                setShowConfirmation(false);
                navigate("/");
            }, 1500)
            return () => clearTimeout(timer);
        }
    }, [showConfirmation]);

    return (
        <div className={classes.container}>
            <Grid
                container
                rowSpacing={2}
                justifyContent="center"
                alignItems="center"
            >
                {lists &&
                    lists.map((v) => (
                        <Grid item xs={3}>
                            <div style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                <Paper className={classes.listContainer} onClick={() => onListClick(v.id)}>
                                    <div style={{ height: "100%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                        <p>{v.name}</p>
                                    </div>
                                </Paper>
                            </div>
                        </Grid>
                    ))}
            </Grid>

            <CSSTransition
                in={showConfirmation}
                timeout={300}
                classNames={{
                    exit: classes.alertExit,
                    exitActive: classes.alertExitActive,
                    enter: classes.alertEnter,
                    enterActive: classes.alertEnterActive
                }}
                unmountOnExit
            >
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        background: error ? 'rgba(157, 0, 0, 0.1)' : 'rgba(0, 157, 0, 0.1)',
                    }}>
                        {error ? 
                            <VscError size="80%" color={colors.red400} />
                            :
                            <VscVerified size="80%" color={colors.lightgreen400} />
                        }
                </div>
            </CSSTransition>
        </div>
    );
}