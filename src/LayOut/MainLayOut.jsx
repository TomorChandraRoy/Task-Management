import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Testimonials from "../Components/Testimonials/Testimonials";


const MainLayOut = () => {
    return (
        <div  className="lg:max-w-[1300px] md:max-w-[750px] lg:mx-auto md:mx-auto   font-poppins ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;