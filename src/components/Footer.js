import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="dark">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <section className="mb-2">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-3"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-3"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-3"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </section>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> Joanna Biernat </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
