import {createBrowserRouter} from "react-router-dom"

import MyPortfolio from "./MyPortfolio"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MyPortfolio />
    },
])