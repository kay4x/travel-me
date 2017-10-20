import $ from "jquery";



class Modal {
  constructor(options) {
      this.openModalBtn = options.openModalBtn;
      this.pageBody = options.pageBody;
      this.modal = options.modal;
      this.closeModalBtn = options.closeModalBtn;

      if(this.modal) this.modalEvents();
  }

  modalEvents() {
     this.pageBody.keyup(this.keypressHandler.bind(this));
     this.closeModalBtn.on("click", (close) => this.closeModal(close));
     this.openModalBtn.on("click", this.openModal.bind(this));
  }
  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }
  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }

  keypressHandler(e) {
    if(e.which === 27)  this.closeModal();
  }
}



export default Modal;
