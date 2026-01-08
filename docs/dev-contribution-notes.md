# Developers Guide
## Prerequisites
### Gitlint

This repository uses [Gitlint](https://jorisroovers.com/gitlint/latest/) to lint git commit messages.

Install Gitlint by running:

```bash
pip install gitlint # or `brew install gitlint` if using the brew package manager
```

## Brief overview

The setup is fairly simple: 

The source code lives in the `/src` folder and consists of sass files, nunjucks templates and JavaScript (to initialise the dropdown behaviour on mobile). 

Dev work should take place in `/src`. The `npm run build-all` script copies and compiles files into `/dist`.

The `npm run dev` command starts a basic server and recompiles `/dist` when files are updated in `/src`.

There is a `watch-sass` script which is fairly self-explanatory. 

## Before you open a PR

1. Ensure you've `npm run build-all` and committed the outputs. This generates the contents of the `/dist` folder.
2. Ensure your change is documented in the `CHANGELOG`, following the preexisting format. Please label your entry with BUG/MAJOR/MINOR.
If you're not sure which label is most appropriate, please read the guidance on [semver guidelines](https://semver.org/).
You don't need to document any change that would be irrelevant for an external consumer of the component (e.g. changes to internal documentation).

## Publishing a new version to NPM

The package is automatically published to NPM when a new release is created on GitHub.

To publish a new version:

1. On a new branch, run `npm version major | minor | patch` (depending on the nature of the unreleased changes)
2. Update the version in the CHANGELOG
3. Create a PR with the changes above and merge it
4. Create a new release in the GitHub interface with a tag matching the version (e.g., `v5.0.1`)
5. The GitHub Action will automatically build and publish the package to NPM
