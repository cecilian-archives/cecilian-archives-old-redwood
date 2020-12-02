import LandingLayout from "src/layouts/LandingLayout/LandingLayout";
import { Link, routes } from "@redwoodjs/router";

const HomePage = () => {
  return (
    <LandingLayout>
      <p>
        Find me in <code>src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </LandingLayout>
  );
};

export default HomePage;
