import MobileMenu from "./modules/_MobileMenu";
import Reveal from "./modules/_Reveal.js";
import StickyHeader from "./modules/_StickyHeader";
import $ from "jquery";


/* eslint-disable no-unused-vars */
const mobileMenu =  new MobileMenu({
    menuContent: $(".site-header__menu-content"),
    menuIcon: $(".site-header__menu-icon"),
    siteHeader: $(".site-header")
});


//Reveal the feature sections when scrolled to
const featureSection = new Reveal({
       itemsToReveal: $(".feature-item"),
       offsetPercent: "35%"
});


//Reveal testimonual section when scrolled tp;
const testimonialSection = new Reveal({
     itemsToReveal: $(".testimonial"),
     offsetPercent: "50%"
});


const siteHeader = new StickyHeader({
     siteHeader: $(".site-header"),
     triggerElement: $(".large-hero__title"),
     pageSections: $(".page-section"),
     headerLinks: $(".primary-nav a")
});
