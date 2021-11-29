import Link from 'next/link'

function Footer() {
  return (
    <footer className="blog-footer">
      <p> Blog built with <Link href="https://nextjs.org/">Next.js</Link> by <Link href="https://github.com/ezapevalov">Eugene Zapevalov</Link></p>
      <p><Link href="#blog-masthead">Back to top</Link></p>
    </footer>
  );
}

export default Footer