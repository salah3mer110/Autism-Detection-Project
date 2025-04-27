import { Link } from "react-router-dom";

function HeaderLink({ to, pageName }) {
  return (
    <li className="nav-link group">
      <Link className="relative" to={to}>
        {pageName}
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}

export default HeaderLink;
