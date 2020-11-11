import { Link, routes } from "@redwoodjs/router";
import { Flash } from "@redwoodjs/web";

const CecilianTagsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminDataCecilianTags()} className="rw-link">
            CecilianTags
          </Link>
        </h1>
        <Link
          to={routes.adminDataNewCecilianTag()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New CecilianTag
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default CecilianTagsLayout;
