// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from "@redwoodjs/router";

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" prerender />
      <Route notfound page={NotFoundPage} prerender />

      <Private unauthenticated="home">
        <Route path="/auth/key" page={AuthKeyPage} name="authKey" />
        <Route path="/auth/login" page={AuthLoginPage} name="authLogin" />
      </Private>

      <Private unauthenticated="authKey" role="verifiedCecilian">
        <Route path="/cecilians/me/edit" page={MyProfilePage} name="myProfileEdit" />
        <Route path="/cecilians/me" page={MyProfilePage} name="myProfile" />
      </Private>
    </Router>
  );
};

export default Routes;
