var express = require("express"),
    app = express(),
    path = require("path"),
    port = process.env.PORT || 3000;

//Prerender
app.use(
    /** Set explicit whitelist for prerendering, because all sorts of bots are hitting our site at non-existing urls,
     * and making the prerender service do a lot of work and cost us a lot of moneys. Test these rules with a regex tester before deploy,
     * like this one: https://regex101.com/
     */
    require("prerender-node")
        .set("prerenderToken", process.env.PRERENDER_TOKEN)
        .whitelisted([
            /** Match root route (empty string) */
            "^(?![sS])",
            /** Match root route with trailing slash */
            "///ig",
            /** Match static routes exactly */
            "^/story$",
            "^/calendar$",
            "^/team$",
            "^/partners$",
            "^/participants$",
            "^/volunteers$",
            "^/organizers$",
            "^/policy$",
            "^/press$",
            "^/team$",
            "^/press$",
            "^/media$",
            /** Match dynamic routes so that they allow stuff to come after, e.g. /concepts/junction-x */
            "^/concepts",
            "^/online",
        ]),
);

// Serve any static files
app.use(express.static(path.join(__dirname, "app/build")));

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "app/build", "index.html"));
});

app.listen(port);
