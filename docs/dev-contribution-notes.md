# How to make changes on the service header

## Brief overview

The setup is fairly simple: 

The source code lives in the `/src` folder and consists of sass files, nunjucks templates and JavaScript (to initialise the dropdown behaviour on mobile). 

Dev work should take place in `/src`. The `npm run build-all` script copies and compiles files into `/dist`.

The `npm run build-templates` command compiles the header template code into HTML and generates a header preview page at `/dist/preview.html`. You can open the HTML file in a browser, or start a simple local server to preview the header locally.

There is a `watch-sass` script which is fairly self-explanatory. 

## Before you open a PR

1. Ensure you've `npm run build-all` and committed the outputs. This generates the contents of the `/dist` folder.
2. Ensure your change is documented in the `CHANGELOG`, following the preexisting format. Please label your entry with BUG/MAJOR/MINOR.
If you're not sure which label is most appropriate, please read the guidance on [semver guidelines](https://semver.org/).
You don't need to document any change that would be irrelevant for an external consumer of the component (e.g. changes to internal documentation).

## Updating the version of the header package

On a new branch:

- run `npm version major | minor | patch` (depending on the nature of the unreleased changes)
- update the version in the CHANGELOG

Create a new PR with the changes above.

### Why is this needed

The original intention was to eventually publish the header to npm, but this hasn't taken place yet.
Therefore the current recommendation for consumers of the service header is to copy the assets from the `/dist` folder into their own applications.

However, the `npm install` command allows installation direct from a GitHub repo, so long as the repo has the correct format.
Some may opt to install the header using `npm` in favour of copying the files manually. 

For these users in particular (but all users, in general), it is useful to maintain a versioned change log on the header component.
