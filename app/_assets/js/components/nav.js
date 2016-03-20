export default class Nav {

  constructor() {
    this.bind();
  }

  bind() {
    const mobile = window.matchMedia('(max-width: 1024px)');
    mobile.matches ? this.isMobile = true : this.isMobile = false;
    mobile.addListener( (mql) => {
      this.isMobile = mql.matches;
    });

    window.addEventListener('resize', this.checkMobile.bind( this ), false);
    this.checkMobile();
  }

  createNav() {
    this.openButton = document.querySelector( '.menu' );
    this.closeButton = document.querySelector( '.close' );
    this.header = document.querySelector( 'header' );
    if( this.isTouch() ) {
      this.openButton.addEventListener('touchend', this.open.bind( this ));
      this.closeButton.addEventListener('touchend', this.close.bind( this ));
    } else {
      this.openButton.addEventListener('click', this.open.bind( this ));
      this.closeButton.addEventListener('click', this.close.bind( this ));
    }
    this.navIsCreated = true;
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

  checkMobile() {
    if( this.isMobile ) {
      this.createNav();
    } else {
      if( this.navIsCreated ) {
        this.close();
      }
    }
  };

  isTouch() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  }

}