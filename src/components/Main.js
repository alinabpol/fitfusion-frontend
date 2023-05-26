import { Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";

import Home from "../pages/Home"

const Main = () => {

    return(
        <main>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>

        </Routes>
        </main>
    )

}
export default Main