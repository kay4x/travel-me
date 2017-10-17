import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import $ from "jquery";


class RevealOnScroll {
   constructor(options) {
     this.itemsToReveal = options.itemsToReveal;
     this.pageSection = options.pageSection;
     this.offsetPercent = options.offsetPercent;

       // This will only run if an item on the page is selected to be reveal;
      if(this.itemsToReveal) {
        this.hideInitially();
        this.createWaypoints();
      }
   }

   hideInitially() {
     this.itemsToReveal.addClass("reveal-item");
   }
   createWaypoints() {
      const offset = this.offsetPercent;
      this.itemsToReveal.each(function(){
        const currentItem = this;
        new Waypoint({
          element:  currentItem,
          handler() {
            $(currentItem).addClass("reveal-item--is-visible");
          },
          offset
        });
      });
   }

}



export default RevealOnScroll;
