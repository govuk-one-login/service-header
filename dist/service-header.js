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
    var $currentNav = this.$navigation[i];
    $currentNav.$menuButton = $currentNav.querySelector('.js-x-header-toggle')
    
    $currentNav.$menu = $currentNav.$menuButton && $currentNav.querySelector(
      '#' + $currentNav.$menuButton.getAttribute('aria-controls')
      )
    if (!$currentNav.$menuButton || !$currentNav.$menu) {
      return
    }
    $currentNav.$menuOpenClass = $currentNav.$menu && $currentNav.$menu.dataset.openClass;
    $currentNav.$menuButtonOpenClass = $currentNav.$menuButton && $currentNav.$menuButton.dataset.openClass;
    $currentNav.$menuButtonOpenLabel = $currentNav.$menuButton && $currentNav.$menuButton.dataset.textForShow;
    $currentNav.$menuButtonCloseLabel = $currentNav.$menuButton && $currentNav.$menuButton.dataset.textForHide;
    $currentNav.$menu.hidden = true;
    $currentNav.isOpen = false;

    $currentNav.$menuButton.addEventListener('click', this.handleMenuButtonClick.bind($currentNav))
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
  this.$menu.hidden = !this.isOpen
}
