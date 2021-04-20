import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div className="wrap-bread">
      {breadcrumbs.map(({ breadcrumb }) => (
        <Link key={breadcrumb.key} className="breadcrumb" to={breadcrumb.key}>
          {breadcrumb}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
