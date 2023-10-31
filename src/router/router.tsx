import { createBrowserRouter } from "react-router-dom";
import { Books } from "../components/AddBooks";

export const router = createBrowserRouter([
 
    {path: "/",
    element:<Books />}


])