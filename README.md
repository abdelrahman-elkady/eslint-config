My own flavor of ESLint, extending `airbnb-base` configuration.

## Installation

- Install the config: `npm i -D @abdelrahman-elkady/eslint-config`

- Install peer dependencies: **Requires npm 5+**
  - `npx install-peerdeps --dev @abdelrahman-elkady/eslint-config`
  - `npx install-peerdeps --dev eslint-config-airbnb-base`

- Extend the configuration in your eslint config file
  ```js
    {
      extends: "@abdelrahman-elkady",
    }
  ```
