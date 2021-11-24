import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import ManualAddProduct from "../pages/ManualAddProduct";
import SelectScanMethodMenu from "../pages/SelectScanMethodMenu";
import SelectShoppingList from "../pages/SelectShoppingList";

export default function RoutingConfiguration() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SelectScanMethodMenu />}/>
                <Route path="/manualSelectProduct" element={<ManualAddProduct />}/>
                <Route path="/addToList" element={<SelectShoppingList />}/>
            </Routes>
        </Router>
    );
}