import {Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from '../Pages/Blog';
import Coupons from '../Pages/Coupons'
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Err404 from '../Pages/Err404';

function PageRender() {
    return(
    <Routes>
        <Route path="/" element = {<Home />} />
        <Route path='/coupons' element = {<Coupons />} />
        <Route path ='/blog' element = {<Blog />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='*' element = {<Err404 />} />
    </Routes>
    )
}

export default PageRender;