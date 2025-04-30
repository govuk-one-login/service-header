/**
  * This file is here to bundle the init-service-header.js script for the GOVUK Prototype Kit service header plugin. 
  * The PK doesn't seem to support adding ES6 JS modules as dependencies 
  * on plugins. 
  * 
  * Relationship between this script service-header.js:
  * 
  * `service-header.js` contains the JS needed for the header, but leaves 
  * initialisation to the end user.
  *  This script just calls the function to initialise the header. 
  * 
*/

initCrossServiceHeader();