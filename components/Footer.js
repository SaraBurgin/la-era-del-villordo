

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>INDEX</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                <li><a href="/gallery"><i className="fa fa-angle-double-right"></i>Gallery</a></li>
                <li><a href="/location"><i className="fa fa-angle-double-right"></i>Location</a></li>
                <li><a href="/information"><i className="fa fa-angle-double-right"></i>Information</a></li>
                <li><a href="/contact-us"><i className="fa fa-angle-double-right"></i>Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-google-plus"></i></a></li>
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
            </div>
            <hr />
          </div>	
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p><u><a href="https://www.nationaltransaction.com/">La Era del Villordo</a></u> is a Registered Lorem ipsum </p>
              <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank"></a></p>
            </div>
            <hr />
          </div>	
        </div>
      </section>
  </>
  );
  };

export default Footer;