# A header for services using GOV.UK One Login

The GOV.UK One Login service header is a new navigation component for government services connected to GOV.UK One Login.

It provides a way for users to:

+ know they’re signed in
+ sign out
+ change their sign in credentials

The One Login header has been adapted from the [standard service header in the GOV.UK Design System](https://design-system.service.gov.uk/components/header/).

It's a 'beta' component and we're interested to hear from service teams about how it performs with your users.

The header works best if your service uses [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/).

You can [preview the header in your browser](https://govuk-one-login.github.io/service-header/dist/preview.html).

![A screenshot of the GOV.UK One Login header. It has 2 sections: a black section at the top showing the GOV.UK crown logo, a link saying "GOV.UK One Login", which takes you into your account, and a "Sign out" button. Below this section is a grey section, displaying the name of a government service and internal links within that service. Those just have placeholder text, so read "Service name" and "Service link 1" and so on. The black and grey sections are divided by a blue bar, like on the GOV.UK homepage.](service-header-larger-screen.png)

## How to contribute to the service header

If you are a developer working on this project, familiarise yourself with the notes on [this page](docs/dev-contribution-notes.md).

## Contacting the maintainers

Cross-Government Slack: use the [#govuk-one-login](https://ukgovernmentdigital.slack.com/archives/C02AQUJ6WTC) channel

Within GDS: use the #di-one-login-home channel

## What different parts of the header do

The header contains two distinct navigation menus - one for GOV.UK One Login links and another for internal service navigation, which uses the Design System [service navigation component](https://design-system.service.gov.uk/components/service-navigation/).

On smaller screens, both menus collapse and can be shown and hidden using Javascript.

You’ll need to adapt the internal service navigation so that it includes content specific to your service. This includes adapting the accessibility markup in the internal service navigation.

### GOV.UK One Login links in the header

The header contains two links:

+ "GOV.UK One Login": this takes the user to their One Login ‘home’ area, where they can manage their credentials and see and access the services they've used - you don't need to update the url this points to
+ "Sign out": you'll need to adapt this link so that it signs the user out of your service and signs them out of One Login - how you do this will depend on how you've implemented sign out functionality in your service 

### Internal service navigation links in the header

The header has space to optionally add links to different parts of your service, just as the current ‘service header’ component from the Design System does. Follow the same patterns for internal service navigation links as you do with the Design System service header.

## How to use the header in a Prototype Kit prototype

Instructions on how the header can be installed in your Prototype Kit project are available [here](docs/prototype-kit-installation.md).  

## How to start using the header in your service

NOTE: If your service uses Nunjucks, you can use NPM to install the header direct from GitHub, and import the Nunjucks macro directly from `/dist/nunjucks/di-govuk-one-login-service-header/service-header.njk`. Some of the instructions below will seem redundant in your case.

This repository contains:

+ Nunjucks for the GOV.UK One Login service header component 
+ plain HTML for the header - this is compiled from the Nunjucks into the `/dist/html` directory
+ Sass files for compiling CSS files to style the header (this covers both navigation bars)
+ plain CSS, for services who are not using Sass
+ a Javascript file which enables 'drop down' behaviour for the GOV.UK One Login and Sign out links on small screens

To enable drowdown behaviour for the service navigation links, you will need to import the service navigation component script from the Design System (or GOV.UK Frontend). Instructions on importing scripts from the Design System are outlined [on this page](https://frontend.design-system.service.gov.uk/import-javascript/)

Further documentation on the service navigation component is available [on this page](https://design-system.service.gov.uk/components/service-navigation/).

You will need to make additional changes to your service and to the header code for it to function correctly.

You will need to:

+ write logic within your service so that the header is only shown to users who are signed in
+ adapt the header's HTML so that it works in the templating language your service uses (if your service does not use Nunjucks)
+ adapt the internal service navigation HTML so that it includes content specific to your service
+ point the 'Sign out' link at your service's sign out endpoint
+ include the styling and Javascript files in your service

### Write logic within your service so that the header is only shown to users who are signed in

The header should only be displayed when your users are signed in. There’s no ‘signed out state’ version of the header for the time being.

You’ll need to build the logic for only showing the header to signed in users within your service.

### Adapt the header's HTML so that it works in the templating language your service uses

The code for the header is currently available in HTML and the Nunjucks templating language. You will need to adapt the HTML or Nunjucks for the templating language your service uses.

The Nunjucks code will work with the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/), which uses Nunjucks as its templating language.

[Contact the GOV.UK One Login team](#contact) if you would like to share your templating implementation in this repository for other teams to use.

### Adapt the internal service navigation HTML so that it includes content specific to your service

You'll need to modify the internal service navigation part of the header in order to:

+ visually highlight which page in the menu the user is currently on
+ ensure screen reader text and ARIA attributes are specific to your service

#### Visually highlight which page in the menu the user is currently on

You can visually highlight the page the user is currently on in the navigation menu by adding the `govuk-service-navigation__item--active` modifier class to the relevant `li` element in the service navigation menu. You’ll need to implement this in the code you’re using to render your pages. 

If you are using the Nunjucks macro, you can pass options into the service navigation using `serviceNavigationParams` like so:

<pre><code>
&lbrace;&lbrace; govukOneLoginServiceHeader(&lbrace;
  signOutLink: "/placeholder", 
  serviceNavigationParams: &lbrace; 
    navigation: navigation, 
    serviceName: serviceName, 
    navigationLabel: "Test" 
&rbrace;&rbrace;) &rbrace; &rbrace; 
</code></pre>

`serviceNavigationParams` accepts all the options listed under "Nunjucks macro options" on the [service navigation component page](https://design-system.service.gov.uk/components/service-navigation/).

#### Edit screen reader text and ARIA attributes to be specific to your service

The header is designed to work for users of screen readers and contains some visually hidden text and [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) which you will need to edit to make it specific to your service.

You’ll need to edit the markup (or pass relevant parameters into the Nunjucks macro) for the:

+ ‘menu’ button
+ service navigation
+ page the user is currently on in the service navigation

#### Edit accessibility markup for the ‘menu’ button

The menu button is used to show or hide the internal service navigation menu of the header on small devices.

You’ll need to adapt the screen reader text for the following attributes of the menu button element:

+ `aria-label`
+ `data-label-for-show`
+ `data-label-for-hide`

In this repository, the values for these attributes refer to the “service navigation menu”. You should adapt this text to describe your service’s navigation menu. For example, you could update `data-label-for-show` to have the value “Show Juggling Licence service navigation menu”.

This is to help users understand which navigation menu they are opening and closing.

#### Edit accessibility markup for the internal service navigation menu

The service navigation menu contains links to help users navigate your service. It’s distinct from the One Login navigation menu which lets users access One Login and sign out.

You’ll need to adapt the screen reader text for the `aria-label` attribute of the service navigation menu element.

In this repository, the value for this attribute refers to the “Service menu”. You should adapt this text to be specific to your service. For example, you could set the text to “Juggling Licence service navigation menu”.

This is to help users understand which navigation menu they are using. It also helps meet the WCAG requirement that navigation landmarks must be labelled when there is more than one `nav` element on the page, to describe the navigation to users who may be navigating the site using landmarks.

#### Edit accessibility markup for the navigation menu page the user is currently on

You can [visually highlight the page the user is currently on in the navigation menu](#visually-highlight-which-page-in-the-menu-the-user-is-currently-on).

In addition to this, set the `aria-current="true"` attribute on the relevant `<a>` element.

This is to indicate the user’s position in the navigation if they can’t perceive the visual highlight styling.

### Point the 'Sign out' link at your service's sign out endpoint

The One Login header contains a ‘Sign out’ link. You’ll need to update this so that it calls the endpoint your service uses to sign users out.

There’s documentation about how to sign users out in the main [GOV.UK One Login technical documentation](https://docs.sign-in.service.gov.uk/integrate-with-integration-environment/log-your-users-out/). It covers how to:

+ request a redirect back to your service after your user has been signed out of One Login
+ subscribe to ‘backchannel log out’ notifications


## Using the styles for the header in your service

How you use the styles for the header will be different depending on whether you:

+ use the GOV.UK Frontend npm package on your service
+ use the GOV.UK Frontend precompiled CSS files on your service
+ do not use GOV.UK Frontend

### If you use the GOV.UK Frontend npm package

Copy the Sass files from this repository into your service's Sass implementation.

Make sure you have added `node_modules/govuk-frontend/dist` to your Sass loadpath. The header code uses this to [simplify its Sass import paths](https://frontend.design-system.service.gov.uk/importing-css-assets-and-javascript/#simplify-sass-import-paths).

Alternatively, you can edit the header’s Sass import paths to specify `node_modules/govuk-frontend/dist` for each import.

### If you use the GOV.UK Frontend pre-compiled CSS files

Copy the [pre-compiled CSS files](https://github.com/govuk-one-login/service-header/blob/main/dist/styles/service-header.css) from this repository into your service's pre-compiled CSS.

The pre-compiled CSS files in this repository duplicate some code from the GOV.UK Frontend CSS files. The header will still be styled correctly but your CSS files will be slightly larger than they need to be.

### If you do not use GOV.UK Frontend

Copy the [pre-compiled CSS files](https://github.com/govuk-one-login/service-header/blob/main/dist/styles/service-header.css) from this repository into your service's CSS.

The pre-compiled CSS files contain all the CSS you need to style the header.

## Using the GDS Transport font

You must use the GDS Transport font with the header if your service is on the service.gov.uk subdomain.

However, this repository does not include the GDS Transport font. You’ll need to install it separately using GOV.UK Frontend.

There’s [more information about using GDS Transport](https://design-system.service.gov.uk/styles/typography/) in the GOV.UK Design System.

## Using the header's Javascript file

The GOV.UK One Login service header uses Javascript to enable 'drop down' behaviour for the header on small screen sizes. The header doesn't rely on Javascript to do anything else.

Copy the code from one of this repository's [Javascript files](https://github.com/govuk-one-login/service-header/blob/main/dist/scripts) into your service's Javascript implementation. 

You will only need one of the files:

+ `service-header.js` contains the JS required for the header, but leaves initialisation to you. This is so you can run other Javascript functions before initialisation of the header dropdown functionality if you need to. 
+ `init-service-header.js` automatically initialises the header component. All you need to do is include this file

Choose one or the other depending on your needs.

The recommendation is to import `service-header.js` and run the initialisation function at a point in your code where it makes sense. 

### Initialising the header

If you choose to use `service-header.js`, you will need to initialise the header by importing the `initCrossServiceHeader` function from the file and running `initCrossServiceHeader()` in your code.

A basic working example using `service-header.js` can be seen on the [header preview page](https://github.com/govuk-one-login/service-header/blob/main/dist/preview.html).

### If you don’t use the header’s Javascript

The header degrades gracefully in the absence of Javascript (for example, if a user has turned Javascript off or the code does not load). Without Javascript:

+ both navigation menus will be in their ‘dropped down’ states
+ the menu toggle buttons will not display (they wouldn't be functional without Javascript)

## Translating the header content into other languages

The content for the header is currently only provided in English. A Welsh translation will be available soon.

If you need to translate the header into other languages, please consider sharing your translation with [the GOV.UK One Login team](#contact) so it can be used by other services.

# Developers Guide
## Prerequisites
### Gitlint

This repository uses [Gitlint](https://jorisroovers.com/gitlint/latest/) to lint git commit messages.

Install Gitlint by running:

```bash
pip install gitlint # or `brew install gitlint` if using the brew package manager
```

