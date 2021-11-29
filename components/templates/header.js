import Link from 'next/link'

function Header() {
  return (
    <div className="blog-masthead" id="blog-masthead">
      <div className="container">
        <nav className="blog-nav">
          <Link href="/"><a className="blog-nav-item active">Home</a></Link>
          <Link href="/features"><a className="blog-nav-item">New features</a></Link>
          <Link href="/press"><a className="blog-nav-item">Press</a></Link>
          <Link href="/hires"><a className="blog-nav-item">New hires</a></Link>
          <Link href="/about"><a className="blog-nav-item">About</a></Link>
        </nav>
      </div>
    </div>
  );
}

export default Header