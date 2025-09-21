import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

    const Defaultlayout = () => {
        return (
            <>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </>
        )
    }

export default Defaultlayout