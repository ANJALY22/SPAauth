# SPAauth

An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.
This project as a login and register page in which a user can register and can login with the user credentials. When the user get registered, the data will pass to the JSON server(live server) through post method. Later we fetch the data from server through get method and check the credentials and get the alert message. Also we use the app-router


*Two components are generated using "ng g c component_name" (Login and Register).

*At "app.module.ts" we imported two packages(HttpClientModule from angular/common/http and RouterModule from angular/router.

* Then we created a json file (db.json) in assets
* In json file we will be saving all the data that will be collected from the register page.
* So when a user register to the web app all his details will updated in the jason file.
* When the registered user login for next time, the email and password will be authenticated with the details present in db.json. If the email and password matches then only he can enter resetin to the webapp.
* Here we only given alerts while login button hit.
* Also we used reset hence when click ok in alert the login page reset.

