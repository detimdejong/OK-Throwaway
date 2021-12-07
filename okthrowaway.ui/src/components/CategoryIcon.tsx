import { ProductCategory } from "../types/productCategory";
import {
    GiSlicedBread,
    GiFruitBowl,
    GiPlantSeed,
    GiMilkCarton,
    GiMeat
} from "react-icons/gi";
import { BsFillBasket3Fill } from "react-icons/bs";
import colors from "../constants/colors";

export default function CategoryIcon(category: ProductCategory) {
    const iconProps = {
        size: 30,
        color: colors.grey100
    }

    switch (category) {
        case "Brood": return <GiSlicedBread {...iconProps} />
        case "Groente": return <GiPlantSeed {...iconProps}  />
        case "Fruit": return <GiFruitBowl {...iconProps}  />
        case "Vleeswaren": return <GiMeat {...iconProps}  />
        case "Zuivel": return <GiMilkCarton {...iconProps} />
        default: return <BsFillBasket3Fill {...iconProps} />
    }
}