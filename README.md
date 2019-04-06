My own flavor of ESLint, extending airbnb-base

## Installation

- Install the config: `npm i -D @abdelrahman-elkady/eslint-config`
- Install peer dependencies: `npx install-peerdeps --dev eslint-config-airbnb-base` **Requires npm 5+**
- Extend the configuration in your eslint config file
  ```js
    {
      extends: "@abdelrahman-elkady",
    }
  ```