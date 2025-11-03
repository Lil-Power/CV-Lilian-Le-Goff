import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="text-white py-4">
        <div className="container px-3">
          <div className="text-center">
            <div>
              <div className="fs-4">Lilian Le Goff</div>
              <address className="mt-2">
                <span className="mb-0">Nantes, 44000, France</span> <br />
                <a href="tel:+33618302242" className="link-footer">
                  06 18 30 22 42
                </a>
                <br />
                <a
                  href="mailto:lilian.legoff@gmail.com"
                  className="link-footer"
                >
                  lilian.legoff@gmail.com
                </a>
              </address>
              <NavLink to="/Home" className="link-footer">
                Home
              </NavLink>
              <br />
              <NavLink to="/About" className="link-footer">
                À propos
              </NavLink>
              <br />
              <NavLink to="/Contact" className="link-footer">
                Contact
              </NavLink>
              <br />
              <a href="https://github.com/Lil-Power" target="_blank">
                <img
                  className="footer-img m-2"
                  src="/img/logo-github.png"
                  alt="Logo GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/lilian-le-goff-93019017b/"
                target="_blank"
              >
                <img
                  className="footer-img"
                  src="/img/logo-linkedin.png"
                  alt="Logo GitHub"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
