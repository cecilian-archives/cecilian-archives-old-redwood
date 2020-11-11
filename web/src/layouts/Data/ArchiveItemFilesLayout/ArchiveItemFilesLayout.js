import { Link, routes } from "@redwoodjs/router";
import { Flash } from "@redwoodjs/web";

const ArchiveItemFilesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminDataArchiveItemFiles()} className="rw-link">
            ArchiveItemFiles
          </Link>
        </h1>
        <Link
          to={routes.adminDataNewArchiveItemFile()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New ArchiveItemFile
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  );
};

export default ArchiveItemFilesLayout;
