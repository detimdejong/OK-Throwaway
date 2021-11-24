import { Grid, Paper } from "@material-ui/core";
import { NumberLiteralType } from "typescript";

interface ListItemProps {
    id: number;
    name: string;
}

const ListItem = (props: ListItemProps) => (
    <Grid item>
        <Paper style={{ width: 150, height: 150 }}>
            {props.id}
            {props.name}
        </Paper>
    </Grid>
);

export default function SelectShoppingList() {

    const lists = ["supermarkt", "bakker", "slager", "groenteboer", "supermarkt 2", "supermarkt 3", "ander lijstje", "lijstje 3"];
    const itemsList = lists.map((value, index) => <ListItem id={index} name={value} />)

    return (
        <Grid 
            container 
            spacing={1}
            direction="row"
            style={{width: '40%'}}
        >
            {itemsList}
        </Grid>
    )
}