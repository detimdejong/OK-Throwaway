import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./Home";
import ListOverview from "./ListOverview";

export default function RoutingConfiguration() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/selectlist" element={<ListOverview />}/>
            </Routes>
        </Router>
    );
}