function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Rio Alifian Santoso
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-dark" href="/">
              Home
            </a>
            <a className="nav-link text-dark" href="/about">
              About
            </a>
            <a className="nav-link text-dark" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
