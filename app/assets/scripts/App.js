import MobileMenu from "./modules/_MobileMenu";
import $ from "jquery";


/* eslint-disable no-unused-vars */
const mobileMenu =  new MobileMenu({
    menuContent: $(".site-header__menu-content"),
    menuIcon: $(".site-header__menu-icon"),
    siteHeader: $(".site-header")
});
