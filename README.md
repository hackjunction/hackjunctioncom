# Hackjunction.com website

This is the repository powering www.hackjunction.com. The project was built with React & Strapi (api / cms), and this repository contains both the client-side and backend code. Most of the content and content types on the site are very Junction-specific, but this readme also includes some tips on how to get started with "whitelabeling" the website for your own purposes.

# System Requirements 

* Node.js 10.x
* MongoDB 3.6.x

# Installation

1) Clone the repository
2) Run the following to install dependencies:

```
cd hackjunctioncom
npm run setup
```

Then (assuming you've started your local MongoDB server with `mongod`), you'll be able to run the app with

```
yarn dev
```

The frontend will open in your browser at `localhost:3000` and the backend will be running at `localhost:1337`. Naturally the page will have very little actual content since your local database is empty, but read below how to get started with editing the site into something that's more useful for you.

# Setting up the app & admin panel

You'll need to do a few things via the admin panel to get the backend to work together with your frontend. 

- open up `localhost:1337/admin` and create a user

Once you're in, let's do a few things:

### Permissions

If you open up `localhost:3000` and view the console, you'll see a bunch of error messages with the status code 403 (Forbidden). This is because the permissions for the backend API haven't been configured yet. Let's fix that.

- In the admin panel, click Roles & Permission in the sidebar
- Click Public under Roles & Permissions
- Check `count`, `find` and `findone` for all content types except `Contactrequest` and `Newsletter`
- Check `create` for `Contactrequest` and `Newsletter`
- Save your changes by scrolling up and clicking `Save` in the top right corner

If you now view the console of your frontend running at `localhost:3000`, you'll see that the errors have disappeared - your frontend can now call the API to get content.

### Cloudinary image upload

The Strapi api can store images locally, but I would recommend creating a [Cloudinary](https://cloudinary.com) account to store any uploaded images to - they have a very generous free tier which will be more than enough to store all of your images.

Once you've created your cloudinary account, open up the admin panel at `localhost:1337/admin` and 

- Click Plugins under General in the sidebar
- Click the cog icon on the right side of the Files Upload plugin
- Choose Cloudinary from the Providers dropdown, and fill in your Cloudinary details (cloud name, api key, api secret)
- Click Save in the top right corner

Now any images uploaded via the admin panel will be stored and served from your Cloudinary account

### Content on the site

Alright, next let's take a look at creating some content for the site. If you open up the frontend at  `localhost:3000`, you'll see that it's largely empty or filled with placeholder content. That's because your local database is empty and there *is* no content to show, yet. 

Here's a rough overview of the content types on the site and what they are for:

- **Contactrequest:** One of these is created every time someone fills the contact form, which can be found on for example the `/partners` page. These shouldn't be created via the admin panel. 
- **Eventcategories:** Categories of events. Users will be able to choose one when creating a new Event. 
- **Eventconcept:** Event concepts - an event brand under Junction. Each new Event can also be categorised under an Eventconcept, and each Eventconcept has it's own detail page at /concepts/:slug See www.hackjunction.com/concepts for an example of what these are. 
- **Events:** Single events with a date, name, location, etc.
- **Kpis:** "Stats" about Junction, e.g. "3500 participants" or "100+ partners". See the www.hackjunction.com homepage for an example of where these are shown
- **Media:** Various images to be shown in pre-defined places around the site. More below on how this works
- **Newsstories:** News articles about us, shown on the home page at www.hackjunction.com in the "Stories about us" block
- **Pages:** Custom pages that can be shown at `/:slug-of-page`, with a title, subtitle and wysiwyg field for content. See for example www.hackjunction.com/policy
- **Partners:** Previous partners with a logo and website url, shown at e.g. www.hackjunction.com/partners
- **Socialmedias:** Social media links with a logo and url, shown in the page footer
- **Staticcontent:** Various pieces of text to be shown in pre-defined places around the site. More below on how this works.
- **Teammembers:** Team members with a name, title, email, etc. - shown at www.hackjunction.com/team
- **Testimonials:** Testimonials from partners, volunteers, etc. - shown as a round image and some text on various pages, for example www.hackjunction.com/partners
- **Users:** Users with access to the Admin panel (A default Strapi content type)

I recommend you try adding some content of various types to see how that appears in the app. Note that there's a 15 second delay for the frontend fetching new content to prevent constantly calling the API and slowing the app down.

Many of these content types are probably irrelevant to the site that you're building, and you'll most likely end up deleting many of the content types and adding your own ones. The ones I definitely recommend keeping however, are Media and Staticcontent, as they allow you to define specific places in the app where text and images can be edited without requiring code changes. 

The way these two work is that there's a predefined list of possible `keys` for Staticcontent and Media. If I, for example, add a new Staticcontent and choose the key `volunteersPageTitle`, the text I input will show up as the title for the `/volunteers` page. There is a helpful feature in development mode where, if content with a certain key is not found, the name of the key will be shown in the app instead. These are not visible in production - see `IS_DEBUG` in `frontend/services/config`. Similarly, if I add a new Media with the key `volunteersPageHeaderImage`, that image will show up in the header of the `/volunteers` page, and if the media isn't defined a default image will be shown. 

### Content & Redux

All of the content is loaded via Redux actions, which only get called if the content hasn't been updated in a given time (15 seconds in development / 10 minutes in production). Let's briefly go through how that works.

Open up `frontend/src/GlobalLifecycle.js`, and you'll see a bunch of if-statements in `componentDidMount`. This component is rendered every time the website is refreshed, and thus each time someone loads the website it determines if it should the call the API for new content.

You should probably familiarize yourself with [Redux](https://www.valentinog.com/blog/redux/) and [Redux selectors](https://hackernoon.com/selectors-in-redux-are-a-must-d6b0637c79b7) to better understand how it all works, but essentially content updates are initiated in this one component and stored in a "local database" (the Redux store), and all other components can access this data as they need. 

The content is also saved on the user's browser, so that closing the browser and re-opening the site will not necessarily trigger a new call to the API, if the content was just updated a few minutes ago.

# Deployment

Deployment instructions to be added.

# Roadmap

Eventually this project will be turned into a whitelabeled website template with all of the www.hackjunction.com -specific content removed and only the general useful stuff remaining. 
