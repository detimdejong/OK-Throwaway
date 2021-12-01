import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./Home";
import ListOverview from "./ListOverview";
import FindProduct from "./FindProduct";

export default function RoutingConfiguration() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/findproduct" element={<FindProduct />}/>
                <Route path="/selectlist/:product" element={<ListOverview />}/>
            </Routes>
        </Router>
    );
}