export default class Nav {

  constructor() {
    this.bind();
  }

  bind() {
    const mobile = window.matchMedia('(max-width: 1024px)');
    mobile.matches ? this.isMobile = true : this.isMobile = false;

    if( this.isMobile ) {
      this.createNav();
    }

  }

  createNav() {
    this.openButton = document.querySelector( '.menu' );
    this.closeButton = document.querySelector( '.close' );
    this.header = document.querySelector( 'header' );
    this.openButton.addEventListener('touchend', this.open.bind( this ));
    this.closeButton.addEventListener('touchend', this.close.bind( this ));
  }

  open() {
    this.header.classList.add('opened');
    document.body.classList.add('menu-opened');
    document.querySelector('html').classList.add('menu-opened');
  }

  close() {
    this.header.classList.remove('opened');
    document.body.classList.remove('menu-opened');
    document.querySelector('html').classList.remove('menu-opened');
  }

}