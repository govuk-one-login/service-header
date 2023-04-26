/**
* A modified adaptation of the Design System header script
*
*/
function CrossServiceHeader ($module) {
  this.$header = $module
  this.$navigation = $module.querySelectorAll("[data-module='one-login-header-nav']");
  this.$header.classList.add('js-enabled')
}
/**
* Initialise header
*
* Check for the presence of the header, menu and menu button – if any are
* missing then there's nothing to do so return early.
*/
CrossServiceHeader.prototype.init = function () {
  if (!this.$header && !this.$navigation.length) {
    return
  }

  for (var i = 0; i < this.$navigation.length; i++) {
    var $nav = this.$navigation[i];
    $nav.$menuButton = $nav.querySelector('.js-x-header-toggle')
    
    $nav.$menu = $nav.$menuButton && $nav.querySelector(
      '#' + $nav.$menuButton.getAttribute('aria-controls')
      )
    if (!$nav.$menuButton || !$nav.$menu) {
      return
    }
    $nav.$menuOpenClass = $nav.$menu && $nav.$menu.dataset.openClass;
    $nav.$menuButtonOpenClass = $nav.$menuButton && $nav.$menuButton.dataset.openClass;
    $nav.$menuButtonOpenLabel = $nav.$menuButton && $nav.$menuButton.dataset.textForShow;
    $nav.$menuButtonCloseLabel = $nav.$menuButton && $nav.$menuButton.dataset.textForHide;
    $nav.isOpen = false;

    $nav.$menuButton.addEventListener('click', this.handleMenuButtonClick.bind($nav))
  }
}


/**
* Handle menu button click
*
* When the menu button is clicked, change the visibility of the menu and then
* sync the accessibility state and menu button state
*/
CrossServiceHeader.prototype.handleMenuButtonClick = function () {
  this.isOpen = !this.isOpen
  this.$menu.classList.toggle(this.$menuOpenClass, this.isOpen)
  this.$menuButton.classList.toggle(this.$menuButtonOpenClass, this.isOpen)
  this.$menuButton.setAttribute('aria-expanded', this.isOpen)
  this.$menuButton.setAttribute('aria-label', (this.isOpen ? this.$menuButtonCloseLabel : this.$menuButtonOpenLabel))
}
