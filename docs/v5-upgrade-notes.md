# Upgrading to v5.0.0

In v5.0.0 we've renamed the package to `@govuk-one-login/service-header` in preparation for publishing to our NPM organisation.

## Using the prototype kit or if you install the package from NPM

You'll need to uninstall the package with the old name and install the new one.

```sh
npm uninstall govuk-one-login-service-header
npm install @govuk-one-login/service-header
```

You'll need to update the import path from

```
{% from "di-govuk-one-login-service-header/service-header.njk" import govukOneLoginServiceHeader %}
```

To

```
{% from "service-header/service-header.njk" import govukOneLoginServiceHeader %}
```

in all your templates that import the header component.

## All other installation methods

No changes are required.
