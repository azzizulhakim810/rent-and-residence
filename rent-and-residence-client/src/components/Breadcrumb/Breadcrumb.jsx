import { Link } from "react-router-dom";
const Breadcrumb = ({ pageName }) => {
  return (
    <div className="breadcrumbs text-sm font-Nunito_Sans font-[500] mb-5">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="text-C_purple">{pageName}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
