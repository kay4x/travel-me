
class MobileMenu {
   constructor(options) {
     this.siteHeader = options.siteHeader;
     this.menuIcon =  options.menuIcon;
     this.menuContent = options.menuContent;

    this.siteHeaderEvents();
   }

   siteHeaderEvents() {
       this.menuIcon.on("click", this.toggleTheMenu.bind(this));
   }

   toggleTheMenu() {
      this.menuContent.toggleClass("site-header__menu-content--is-visible");
      this.siteHeader.toggleClass("site-header--is-expanded");
      this.menuIcon.toggleClass("site-header__menu-icon--close-x");
   }
}


export default MobileMenu;
