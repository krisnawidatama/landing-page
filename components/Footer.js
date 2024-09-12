import React from "react";
import Script from "next/script";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="h-100 text-center m-auto ">
              <p className="text-muted small mb-4 mb-lg-0">
                © {year}
              </p>
            </div>
          </div>
        </div>

        <Script src="https://unpkg.com/react/umd/react.production.min.js"></Script>

        <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></Script>

        <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></Script>
      </footer>
    </div>
  );
};

export default Footer;
