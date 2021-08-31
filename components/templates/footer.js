function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          <a href="/">Home</a> |
          <a href="/">works</a> |
          <a href="/">Team</a> |
          <a href="/">Contact</a></p>
        <p className="copy-right">
          Copyright &copy; {new Date().getFullYear()}
          <a href="/">Your Site</a> |
          Designed By : <a href="http://www.indioweb.in/portfolio">IndioWeb</a>, All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer