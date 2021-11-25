import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          <Link href="/">Home</Link> |
          <Link href="/">works</Link> |
          <Link href="/">Team</Link> |
          <Link href="/">Contact</Link></p>
        <p className="copy-right">
          Copyright &copy; {new Date().getFullYear()}
          <Link href="/">Your Site</Link> |
          Designed By : <Link href="http://www.indioweb.in/portfolio">IndioWeb</Link>, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer