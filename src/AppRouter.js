import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home"

function AppRouter(){
    return(
        <Router>
            <Route path="/home" element={<Home/>}/>
        </Router>
    )
}

export default AppRouter;