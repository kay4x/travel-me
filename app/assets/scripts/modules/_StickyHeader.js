import $ from "jquery";
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";



class StickyHeader {
     constructor(options) {
       this.lazyImages =  options.lazyImages;
       this.siteHeader = options.siteHeader;
       this.triggerElement = options.triggerElement;
       this.primaryNavLink = options.primaryNavLink;
       this.pageSections = options.pageSections;
       this.headerLinks = options.headerLinks;

      this.createHeaderWaypoints();
      this.createPageSectionWaypoints();
      this.headerLinks.smoothScroll();
      this.refreshWaypoint();
     }

     refreshWaypoint() {
       // This will re-calculate the vertical positioning of
       // all the section making use of waypoints after the images
       // are lazy loaded
       this.lazyImages.on("load", refreshSection);
       const refreshSection = () => waypoint.refreshAll();
     }

    createHeaderWaypoints() {
        const that = this;
        new Waypoint({
          element: that.triggerElement[0],
          handler(direction) {
            const dark = "site-header--dark";
            if(direction === "down") $(that.siteHeader).addClass(dark);
            if(direction === "up") $(that.siteHeader).removeClass(dark);
           }
        });
     }
    createPageSectionWaypoints() {
      var that = this;
      this.pageSections.each(function(){
        const currentSection = this;
        new Waypoint({
          element: currentSection,
          handler(direction) {
            if(direction === "down") {
              let matchingHeaderLink = currentSection.getAttribute("data-matching-link");
              that.headerLinks.removeClass("is-current-link");
              $(matchingHeaderLink).addClass("is-current-link");
            }
        },
        offset: "18%"
        });
        new Waypoint({
          element: currentSection,
          handler(direction) {
            if(direction === "up") {
              let matchingHeaderLink = currentSection.getAttribute("data-matching-link");
              that.headerLinks.removeClass("is-current-link");
              $(matchingHeaderLink).addClass("is-current-link");
            }
        },
        offset: "40%"
        });
      });
    }
}


export default StickyHeader;
