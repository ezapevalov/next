import Header from './header'
import Footer from './footer'

function Template(props) {
  return (
    <div className="wrapper">
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default Template;