import { Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";

import Home from "../pages/Home"
import Nutrition from "../pages/Nutrition";
import NutritionShow from "../pages/NutritionShow";
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
            <Route exact path="/nutrition/show/:id" element={<NutritionShow/>}></Route>
            <Route exact path="/workouts" element={<Workouts/>}></Route>
            <Route exact path="/workouts/show/:id" element={<WorkoutsShow/>}></Route>
            <Route exact path="/analytics" element={<Analytics/>}></Route>
            <Route exact path="/analytics/form" element={<AnalyticsForm/>}></Route>
        </Routes>
        </main>
    )

}
export default Main