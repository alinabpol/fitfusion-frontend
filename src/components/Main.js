import { Route, Routes } from "react-router-dom";


import Home from "../pages/Home"
import Nutrition from "../pages/Nutrition";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import Snacks from "../pages/Snacks";
import Desserts from "../pages/Desserts";
import Smoothies from "../pages/Smoothies";
import Workouts from "../pages/Workouts";
import WorkoutsShow from "../pages/WorkoutsShow";
import Analytics from "../pages/Analytics";
import AnalyticsForm from "../pages/AnalyticsForm";

const Main = () => {

    return(
        <main>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/nutrition" element={<Nutrition/>}></Route>
            <Route exact path="/breakfast" element={<Breakfast/>}></Route>
            <Route exact path="/lunch" element={<Lunch/>}></Route>
            <Route exact path="/dinner" element={<Dinner/>}></Route>
            <Route exact path="/desserts" element={<Desserts/>}></Route>
            <Route exact path="/snacks" element={<Snacks/>}></Route>
            <Route exact path="/smoothies" element={<Smoothies/>}></Route>
            <Route exact path="/workouts" element={<Workouts/>}></Route>
            <Route exact path="/workout/show/:id" element={<WorkoutsShow/>}></Route>
            <Route exact path="/analytics" element={<Analytics/>}></Route>
            <Route exact path="/analytics/form" element={<AnalyticsForm/>}></Route>
            <Route exact path="/chat" ></Route>
        </Routes>
        </main>
    )

}
export default Main