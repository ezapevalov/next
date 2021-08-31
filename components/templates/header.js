import Link from 'next/link'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><img className="img-responsive" src="/images/logo.png" alt="Logo"/></a>
          </div>
        
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link href="/">Featured Events</Link></li>
              <li><Link href="/events">All events</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header