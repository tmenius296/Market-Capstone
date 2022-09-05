import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function TopNav() {
  return (
    <nav className="TopNav">
      <Link to="/" className="site-title">
        Aesop Marketing
      </Link>
      <ul>
        <CustomLink to="/user">User Portal</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
