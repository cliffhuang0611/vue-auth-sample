# vue-auth-sample

## Project Description

This is a Vue example of handling a Vue App with pages set behind different levels of Authentication.

There are public pages that are able to be accessed in any state, pages for only authenticated states, and pages for only unauthenticated states.

The router redirects the user to corresponding pages depending on the current state, and the session token is stored in the Local storage to restore the state when the Vue app is refreshed.

The main branch uses Local Storage as the mean to store the session token  if "Keep me logged in" is checked, otherwise it uses session storage, while the js-cookies branch uses cookies to store the session token.

Another example of authentication handling involves the router-view being locked behind a Login Component depending no the authentication state is on /vue-auth-sample-2
