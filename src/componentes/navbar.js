
export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-md navbar-light" id="home">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">3PT</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
              <div className="navbar-nav ps-5">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                <a className="nav-link" href="#stats">Stats</a>
                <a className="nav-link" href="#highlights">Highlights</a>
                <a className="nav-link" href="#news">News</a>
              </div>
            </div>
          </div>
        </nav>
    )
}