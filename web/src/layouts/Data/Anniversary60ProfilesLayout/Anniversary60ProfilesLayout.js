import { Link, routes } from "@redwoodjs/router";
import { Flash } from "@redwoodjs/web";

const Anniversary60ProfilesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.adminDataAnniversary60Profiles()}
            className="rw-link"
          >
            Anniversary60Profiles
          </Link>
        </h1>
        <Link
          to={routes.adminDataNewAnniversary60Profile()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Anniversary60Profile
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default Anniversary60ProfilesLayout;
