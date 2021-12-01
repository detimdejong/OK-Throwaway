import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import colors from "../constants/colors";
import TextField from "@material-ui/core/TextField";
import { ProductCategory } from "../constants/productCategory";
import CategoryIcon from "../components/CategoryIcon";
import { ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Product {
    name: string;
    category: ProductCategory;
}

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
    category: ProductCategory;
    name: string;
}



export default function FindProduct() {
    const [input, setInput] = React.useState<string | undefined>();
    const [items, setItems] = React.useState<Array<JSX.Element> | undefined>();
    const navigate = useNavigate();
    const classes = useStyles();

    const Item = (props: ItemProps) => (
        <ListItem>
            <ListItemButton onClick={() => navigate(`/selectlist/${props.name}`)}>
                <ListItemIcon>
                    {CategoryIcon(props.category)}
                </ListItemIcon>
                <ListItemText primary={props.name} style={{ color: colors.grey200 }} />
            </ListItemButton>
        </ListItem>
    );

    React.useEffect(() => {
        if (input)
            setItems(products
                        .filter((p) => p.name.toLowerCase().includes(input.toLowerCase()))
                        .sort((a, b) => a.name > b.name ? 1 : -1)
                        .map((p) => <Item category={p.category} name={p.name} />)
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


const products: Product[] = [
    { category: "Fruit", name: "Citroen" },
    { category: "Brood", name: "Desem pisto bruin" },
    { category: "Brood", name: "Desem pisto wit" },
    { category: "Brood", name: "Desem pisto meerz" },
    { category: "Brood", name: "Desem pisto spelt" },
    { category: "Brood", name: "Pistolet boulogne " },
    { category: "Brood", name: "Pistolet bruin" },
    { category: "Brood", name: "Pistolet wit" },
    { category: "Brood", name: "Kaïserbroodje natural " },
    { category: "Brood", name: "Triangel meergranen" },
    { category: "Brood", name: "Italiaanse bol" },
    { category: "Brood", name: "Luxe roomboter croissant " },
    { category: "Brood", name: "Meerzaden croissant " },
    { category: "Brood", name: "Rustiekbroodje meergranen" },
    { category: "Brood", name: "Tijgerbol " },
    { category: "Brood", name: "Triomphe broodje" },
    { category: "Brood", name: "Volkorenbol" },
    { category: "Brood", name: "L&P Rogge" },
    { category: "Brood", name: "L&P Volkoren " },
    { category: "Brood", name: "L&P Spelt" },
    { category: "Brood", name: "L&P Meerzaden" },
    { category: "Brood", name: "Chocoladebroodje" },
    { category: "Brood", name: "Maple pecanvlechtbr" },
    { category: "Brood", name: "Koffiebroodje" },
    { category: "Brood", name: "Roomboter appelflap " },
    { category: "Brood", name: "Kaneelbroodje" },
    { category: "Brood", name: "Frikandelbroodje" },
    { category: "Brood", name: "Saucijzenbroodje" },
    { category: "Brood", name: "Brabants worstenbroodje" },
    { category: "Brood", name: "Gehaktbal in satesaus" },
    { category: "Brood", name: "kaasstengel" },
    { category: "Brood", name: "Focaccia mozarella" },
    { category: "Brood", name: "Focaccia gegrilde groenten" },
    { category: "Brood", name: "Focaccia pepperbril" },
    { category: "Brood", name: "Focaccia mozz tomaat" },
    { category: "Brood", name: "Kip paprika broodje" },
    { category: "Brood", name: "AH Kaas-uienbroodje" },
    { category: "Fruit", name: "Limoen" },
    { category: "Fruit", name: "Mango" },
    { category: "Fruit", name: "Ananas" },
    { category: "Fruit", name: "Galia meloen" },
    { category: "Fruit", name: "Grapefruit rood" },
    { category: "Fruit", name: "Mandarijnen " },
    { category: "Fruit", name: "Mini Watermeloen" },
    { category: "Fruit", name: "Perssinaasappelen net 2 kg" },
    { category: "Fruit", name: "Perssinaasappelen per stuk" },
    { category: "Fruit", name: "Lychees" },
    { category: "Fruit", name: "Granaatappel" },
    { category: "Fruit", name: "Bio Banaan" },
    { category: "Fruit", name: "Pluot pruimen" },
    { category: "Fruit", name: "Kaki fruit" },
    { category: "Fruit", name: "Chiquita bananen " },
    { category: "Groente", name: "Komkommer" },
    { category: "Groente", name: "Courgette" },
    { category: "Groente", name: "Avocado" },
    { category: "Groente", name: "Paprika rood" },
    { category: "Groente", name: "Prei" },
    { category: "Groente", name: "Rode peper" },
    { category: "Groente", name: "Aubergine " },
    { category: "Groente", name: "Bloemkool" },
    { category: "Groente", name: "Bospeen" },
    { category: "Groente", name: "Venkel" },
    { category: "Groente", name: "Radijs " },
    { category: "Groente", name: "Knolselderij" },
    { category: "Groente", name: "Bosui per bos" },
    { category: "Groente", name: "Spitskool" },
    { category: "Groente", name: "Paprika groen" },
    { category: "Groente", name: "Paprika oranje" },
    { category: "Groente", name: "Paprika geel " },
    { category: "Groente", name: "Kropsla" },
    { category: "Groente", name: "Ijsbergsla" },
    { category: "Groente", name: "Bleekselderij" },
    { category: "Groente", name: "Jalapeno peper groen per stuk" },
    { category: "Groente", name: "Tricolor kluitsla " },
    { category: "Groente", name: "AH bio knoflook groot" },
    { category: "Groente", name: "Biologische komkommer" },
    { category: "Groente", name: "chinese kool" },
    { category: "Groente", name: "Tomaten" }
]