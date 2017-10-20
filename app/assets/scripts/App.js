/* eslint-disable no-unused-vars */
import MobileMenu from "./modules/_MobileMenu";
import Reveal from "./modules/_Reveal.js";
import StickyHeader from "./modules/_StickyHeader";
import Modal from "./modules/_Modal";
import $ from "jquery";


// This hides the header links on small screen and opents them
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


//Reveal testimonial section when scrolled tp;
const testimonialSection = new Reveal({
     itemsToReveal: $(".testimonial"),
     offsetPercent: "50%"
});

//This change the color header on scroll and create a scroll spy
const siteHeader = new StickyHeader({
     siteHeader: $(".site-header"),
     triggerElement: $(".large-hero__title"),
     pageSections: $(".page-section"),
     headerLinks: $(".primary-nav a")
});


//This open and close the modal
const modal = new Modal({
    closeModalBtn: $(".modal__close"),
    openModalBtn: $(".open__modal"),
    pageBody: $(document),
    modal: $(".modal")
});
