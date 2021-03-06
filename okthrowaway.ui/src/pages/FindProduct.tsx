import React, { ChangeEvent } from "react";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Button } from "@material-ui/core";
import colors from "../constants/colors";
import TextField from "@material-ui/core/TextField";
import { ProductCategory } from "../types/productCategory";
import CategoryIcon from "../components/CategoryIcon";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../Api/api-client";
import { Product } from "../types/Product";
import KeyboardWrapper from "../components/KeyboardWrapper";
import { Dock } from "react-dock";

const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        background: colors.customThemeBlack,
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },
    inputContainer: {
        width: "90%",
        height: "75%",
        background: colors.customThemeBlack,
        justifyContent: "center",
        display: "flex"
    },
    productOptionsContainer: {
        marginTop: 50,
        height: "40%",
        width: "100%",
    },
    textField: {
        width: "100%",
    },
    input: {
        textAlign: "center",
        color: colors.customThemeGrey,
        fontSize: 45
    },
    list: {
        maxHeight: 500
    }
});

interface ItemProps {
    id: number;
    name: string;
    category?: ProductCategory;
}

export default function FindProduct() {
    const [input, setInput] = React.useState<string | undefined>();
    const [items, setItems] = React.useState<Array<JSX.Element> | undefined>();
    const [products, setProducts] = React.useState<Array<Product> | undefined>();
    const navigate = useNavigate();
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const Item = (props: ItemProps) => (
        <ListItem key={props.id}>
            <ListItemButton onClick={() => navigate(`/selectlist/${props.id}/false`)}>
                <ListItemIcon>
                    {CategoryIcon(props.category)}
                </ListItemIcon>
                <ListItemText primary={props.name} style={{ color: colors.grey200 }} />
            </ListItemButton>
        </ListItem>
    );

    const get = React.useCallback(async () => {
        await getProducts().then(p => {
            setProducts(p);
        });
    }, []);

    React.useEffect(() => {
        get();
    }, []);

    React.useEffect(() => {
        if (input && products)
            setItems(products
                .filter((p) => p.name.toLowerCase().includes(input.toLowerCase()))
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map((p) => <Item {...p} />)
            );
        else
            setItems(undefined);
    }, [input]);

    return (
        <>
            <div className={classes.container}>
                <div className={classes.inputContainer}>
                    <div style={{ width: "100%" }}>
                        <TextField
                            className={classes.textField}
                            placeholder="Product"
                            InputProps={{
                                className: classes.input
                            }}
                            onChange={(ev) => setInput(ev.target.value)}
                            onFocus={() => setIsOpen(true)}
                            value={input}
                        />
                        {items && items?.length > 0 &&
                            <div className={classes.productOptionsContainer}>
                                <List style={{
                                    width: '100%',
                                    position: 'relative',
                                    overflow: 'auto',
                                    maxHeight: "90%",
                                    background: colors.customThemeBlack
                                }}>
                                    {items}
                                </List>
                            </div>
                        }

                        {items && items?.length === 0 && input &&
                            <div style={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                background: colors.customThemeBlack,
                                padding: "5%",
                                flexDirection: "column"
                            }}>
                                <div style={{ height: "50%", justifyContent: "center", alignItems: "center", display: "flex", textAlign: "center", marginBottom: "5%" }}>
                                    <p style={{ fontSize: "300%", margin: 5, color: colors.grey400 }}>{`'${input}' NIET GEVONDEN`}</p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>

            <Dock position='bottom' isVisible={isOpen} fluid={true} defaultSize={0.4}>
                <KeyboardWrapper onChange={setInput} onClose={() => setIsOpen(false)} />
            </Dock>
        </>
    );
}