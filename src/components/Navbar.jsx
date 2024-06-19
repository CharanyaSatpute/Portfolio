import { Link } from "react-router-dom";

function handleClick() {
  const pdfUrl = "CharanyaSatpute.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CharanyaSatpute.pdf";
  document.body.appendChild(link);
  link.click();
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
      <Link className="navbar-brand text-warning" to="/">
        Charanya Satpute
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item text-white">
            <Link className="nav-link" to="/achievements">
              Achievements
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " onClick={handleClick} title="Click to download resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
