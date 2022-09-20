import "./navigation.styles.scss";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

export default function Navigation() {
  return (
    <Fragment>
      <div className="top-navbar ">
        <div className="top-navbar__auth-list">
          <a href="/">
            <i className="fa-solid fa-circle-user"></i>Hello Ayush
          </a>
          <a href="/">
            <i className="fa-solid fa-cart-shopping"></i>Cart (o items){" "}
            <span>Rs.0.0</span>
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-contents">
          <div className="navbar__logo">L'ITALIANO</div>
          <div className="navbar__menu">
            <div className="navbar__menu__links">
              <a href="/">
                <i className="fa-solid fa-wine-bottle"></i>Wine
              </a>
            </div>
            <div className="navbar__menu__links">
              <a href="/">
                <i className="fa-solid fa-star"></i>Offers
              </a>
            </div>
            <div className="navbar__menu__links">
              <a href="/">
                <i className="fa-solid fa-wine-glass"></i>Grapes
              </a>
            </div>
            <div className="navbar__menu__links">
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>Regions
              </a>
            </div>
            <div className="navbar__menu__links">
              <a href="/">
                <i className="fa-solid fa-pizza-slice"></i>Pairings
              </a>
            </div>
          </div>
          <div className="navbar__search">
            <div className="navbar__search--searchbox">
              <input type="text" placeholder="Search..." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>

      <Outlet></Outlet>
    </Fragment>
  );
}
