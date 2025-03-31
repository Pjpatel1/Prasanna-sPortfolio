import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {SOCHomelab} from "../pages/Projects/SOCHomeLab/index"
import {Certificates} from "../pages/Certificates/index"
import {SecureEcommerce} from "../pages/Projects/SecureECommerceSite";
import IAMClenup from "../pages/Projects/IAM CleanUp/IAMClenup";
const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sochomelab" element={<SOCHomelab/>} />
        <Route path="/Certficates" element={<Certificates/>} />
        <Route path="/SecureEcommerce" element={<SecureEcommerce/>} />
        <Route path="/IAMClenup" element={<IAMClenup/>}/>
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
