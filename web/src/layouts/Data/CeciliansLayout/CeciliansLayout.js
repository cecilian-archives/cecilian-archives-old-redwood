import { Link, routes } from "@redwoodjs/router";
import { Flash } from "@redwoodjs/web";

const CeciliansLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminDataCecilians()} className="rw-link">
            Cecilians
          </Link>
        </h1>
        <Link
          to={routes.adminDataNewCecilian()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Cecilian
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default CeciliansLayout;
