import { Route, Routes } from "react-router-dom";


import Home from "../pages/Home"
import Nutrition from "../pages/Nutrition";
import Recipes from "../pages/Recipes";
import RecipesShow from "../pages/RecipesShow";
import Breakfast from "../pages/Breakfast";
import BreakfastShow from "../pages/BreakfastShow";
import Lunch from "../pages/Lunch";
import LunchShow from "../pages/LunchShow";
import Dinner from "../pages/Dinner";
import DinnerShow from "../pages/DinnerShow";
import Snacks from "../pages/Snacks";
import SnacksShow from "../pages/SnacksShow";
import Desserts from "../pages/Desserts";
import DessertsShow from "../pages/DessertsShow";
import Smoothies from "../pages/Smoothies";
import SmoothiesShow from "../pages/SmoothiesShow";
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
            <Route exact path="/recipes" element={<Recipes/>}></Route>
            <Route exact path="/recipes/show/:id" element={<RecipesShow/>}></Route>
            <Route exact path="/breakfast" element={<Breakfast/>}></Route>
            <Route exact path="/breakfast/show/:id" element={<BreakfastShow/>}></Route>
            <Route exact path="/lunch" element={<Lunch/>}></Route>
            <Route exact path="/lunch/show/:id" element={<LunchShow/>}></Route>
            <Route exact path="/dinner" element={<Dinner/>}></Route>
            <Route exact path="/dinner/show/:id" element={<DinnerShow/>}></Route>
            <Route exact path="/desserts" element={<Desserts/>}></Route>
            <Route exact path="/desserts/show/:id" element={<DessertsShow/>}></Route>
            <Route exact path="/snacks" element={<Snacks/>}></Route>
            <Route exact path="/snacks/show/:id" element={<SnacksShow/>}></Route>
            <Route exact path="/smoothies" element={<Smoothies/>}></Route>
            <Route exact path="/smoothies/show/:id" element={<SmoothiesShow/>}></Route>
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