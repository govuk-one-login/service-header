function CrossServiceHeader ($module) {
  this.$module = $module
  this.$menuButton = $module && $module.querySelector('.js-x-header-toggle')
  this.$menu = this.$menuButton && $module.querySelector(
    '#' + this.$menuButton.getAttribute('aria-controls')
  )
  this.$menuOpenClass = this.$menuButton && this.$menu.dataset.openClass;
}
/**
* Initialise header
*
* Check for the presence of the header, menu and menu button – if any are
* missing then there's nothing to do so return early.
*/
CrossServiceHeader.prototype.init = function () {
  if (!this.$module || !this.$menuButton || !this.$menu || !this.$menuOpenClass) {
    return
  }
  this.$module.classList.add('js-enabled')
  this.syncState(this.$menu.classList.contains(this.$menuOpenClass))
  this.$menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this))
}
/**
* Sync menu state
*
* Sync the menu button class and the accessible state of the menu and the menu
* button with the visible state of the menu
*
* @param {boolean} isVisible Whether the menu is currently visible
*/
CrossServiceHeader.prototype.syncState = function (isVisible) {
  this.$menuButton.classList.toggle('cross-service-header__button--open', isVisible)
  this.$menuButton.setAttribute('aria-expanded', isVisible)
}
/**
* Handle menu button click
*
* When the menu button is clicked, change the visibility of the menu and then
* sync the accessibility state and menu button state
*/
CrossServiceHeader.prototype.handleMenuButtonClick = function () {
  var isVisible = this.$menu.classList.toggle(this.$menuOpenClass)
  this.syncState(isVisible)
}
