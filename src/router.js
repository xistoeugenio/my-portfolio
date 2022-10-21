import {createBrowserRouter} from "react-router-dom"

import MyPortfolio from "./MyPortfolio"
import Soccer from "./pages/soccerPage/Soccer"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MyPortfolio />
    },
    {
        path: "/projects/soccer",
        element: <Soccer />
    }
])