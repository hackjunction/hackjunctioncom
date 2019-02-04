# react-strapi-starter
An isomorphic React + Strapi app boilerplate, with most of the tedious setup already done for you, complete with Junction styling and assets

# Usage

```
git clone git@github.com:hackjunction/react-strapi-starter.git
cd react-strapi-starter
rm -rf .git
```

# Config
This app uses Strapi with a MongoDB database. By default, the database name is `development`, but you may want to change it to something specific to your project before running the app.

To do this, go to `/backend/config/environments/development/database.json` and change `connections.default.settings.database` to your preferred database name.

# Running the app
To run both the React frontend and Strapi backend concurrently, just use `npm run dev` from the project root.

# Deployment
In production mode, you should only run the backend which serves a static production build of the frontend app. When deploying, make sure to run `npm run build` within the `/frontend` directory, which builds the project and copies the build under `/backend/build`. The `/backend/build` directory is ignored in git, so you should make sure to run this as a script on wherever you are deploying the app - for example with the "heroku-postinstall" npm script if using Heroku. 

Other than that, deployment works exactly as documented in the official Strapi guide: https://strapi.io/documentation/3.x.x/guides/deployment.html

Heroku-specific deployment instructions to be added later.

