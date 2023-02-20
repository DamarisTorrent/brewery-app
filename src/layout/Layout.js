import {Outlet} from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </Fragment>
  )
}
export default Layout