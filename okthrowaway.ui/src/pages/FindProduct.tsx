import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import colors from "../constants/colors";
import TextField from "@material-ui/core/TextField";
import { ProductCategory } from "../types/productCategory";
import CategoryIcon from "../components/CategoryIcon";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../Api/api-client";
import { Product } from "../types/Product";


const useStyles = makeStyles({
    container: {
        height: "100%",
        width: "100%",
        position: "absolute",
        background: colors.bluegrey800,
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    },
    inputContainer: {
        width: "30%",
        height: "75%",
        background: colors.bluegrey800
    },
    productOptionsContainer: {
        marginTop: 50,
        height: "90%",
        width: "100%",
    },
    textField: {
        width: "100%",
    },
    input: {
        textAlign: "center",
        color: colors.white,
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
        await getProducts().then(p => setProducts(p));
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
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <TextField
                    className={classes.textField}
                    placeholder="Product"
                    InputProps={{
                        className: classes.input
                    }}
                    onChange={(ev) => setInput(ev.target.value)}
                />
                <div className={classes.productOptionsContainer}>
                    {items &&
                        <List style={{
                            width: '100%',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: "90%",
                            background: colors.bluegrey700
                        }}>
                            {items}
                        </List>
                    }
                </div>
            </div>
        </div>
    );
}