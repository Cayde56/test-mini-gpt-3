import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/test-mini-gpt-3/">
          Mini GPT-3{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/test-mini-gpt-3/">
                Traductor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/test-mini-gpt-3/image">
                Crear variación de imágen
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link " to="/test-mini-gpt-3/contact">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
