import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  @media (max-width: 500px) {
    display: flex;
    justify-content: space-around;
  }
`;

const Li = styled.li`
  border-bottom: 2px solid transparent;
  margin-right: 20px;
  transition: 0.2s;
  &:hover {
    border-bottom: 2px solid gray;
  }
`;

export default function Nav(params) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Li>
        <Li className="nav-item">
          <Link className="nav-link" to="/photos">
            Photos
          </Link>
        </Li>
        <Li className="nav-item">
          <Link className="nav-link" to="/random">
            Random-Picture
          </Link>
        </Li>
        <Li className="nav-item">
          <Link className="nav-link" to="/search">
            Search
          </Link>
        </Li>
      </Ul>
    </nav>
  );
}
