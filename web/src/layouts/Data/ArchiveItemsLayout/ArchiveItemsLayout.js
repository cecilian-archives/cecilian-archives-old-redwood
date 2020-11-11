import { Link, routes } from "@redwoodjs/router";
import { Flash } from "@redwoodjs/web";

const ArchiveItemsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminDataArchiveItems()} className="rw-link">
            ArchiveItems
          </Link>
        </h1>
        <Link
          to={routes.adminDataNewArchiveItem()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ArchiveItem
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default ArchiveItemsLayout;
