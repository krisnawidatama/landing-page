import Meta from "../components/Meta";
import { Navbar, Nav } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Meta title="ERP - Prototype"/>

      <Navigation product="HOME">
        <Nav.Link className="nav-item nav-link active" href="#about">
          ABOUT
        </Nav.Link>
        <Nav.Link className="nav-item nav-link active" href="#pricing">
          PRICING
        </Nav.Link>
        <Nav.Link className="nav-item nav-link active" href="#contact">
          CONTACT
        </Nav.Link>
        <Nav.Link
          className="nav-item nav-link active btn btn-primary"
          style={{ color: "#FFFFFF" }}
          href="./login"
        >
          LOGIN
        </Nav.Link>
      </Navigation>
      <header id="header" className="masthead text-white text-center">
        <div className="container">
          <div className="row">
            <div className="m-auto text-center">
              <h1 className="dropshadow">Home</h1>
              <p className="lead mb-5 dropshadow" style={{ color: "#cfcfcf" }}>
              Duis at sem lectus. Morbi convallis sem dui. Suspendisse eget viverra tortor. Nulla interdum sem in justo euismod mollis. Maecenas laoreet est quis felis placerat facilisis. Aliquam erat volutpat. Nullam dictum ut lectus sit amet sollicitudin. Quisque et eleifend sapien, eu bibendum ante. Nam blandit id felis non vehicula. Etiam pharetra sed odio at blandit. Suspendisse maximus dui eu laoreet venenatis.
              Nulla turpis nibh, porttitor nec pulvinar nec, dignissim at nisi. Ut bibendum tincidunt tortor, at rhoncus metus aliquet eu. Curabitur et ipsum erat. Praesent dictum, tortor vitae tincidunt aliquam, lorem metus euismod est, non mollis nibh enim ut tellus. Duis vehicula ligula ligula, pretium placerat tellus euismod sed. Donec eu nisl sit amet orci rhoncus vehicula. Nunc aliquet accumsan turpis. Nam turpis metus, bibendum a massa ut, ullamcorper lobortis lectus. Quisque laoreet commodo cursus.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="testimonials text-center bg-white">
        <div className="container col-md-10 col-lg-8 col-xl-7 text-left">
          <h2 className="mb-5 text-center">ABOUT</h2>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In tempus condimentum turpis at aliquam. Vivamus placerat non ex in condimentum.
          </p>
          <p>
            Phasellus tempor rhoncus risus vel porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p className="mb-5">
            In hac habitasse platea dictumst. Mauris mattis feugiat accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </section>

      <section id="pricing" className="testimonials text-center bg-light ">
        <div className="container col-md-12 col-lg-12 col-xl-7 mb-5">
          <h2 className="mb-5 text-center">PRICING</h2>
          <p>
            Nunc tellus urna, commodo fermentum sem et, feugiat lacinia nunc. In id efficitur mauris, ut tincidunt tortor.
          </p>
          <div className="card-deck mb-12 mt-10 text-center">
            <div className=" card mb-4 box-shadow ">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">TIER 1/Basic</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <div className="flex--1 d-flex flex-column">
                  <div className="m-auto">
                    <p className="text-grey">
                      ERP dengan Kemampuan Dasar
                    </p>
                    <h2 className="card-title pricing-card-title">
                      GRATIS
                    </h2>
                    <ul className="text-left mt-3 mb-4">
                      <li>Mencatat barang masuk</li>
                      <li>Mencatat barang keluar</li>
                      <li>Mencatat hasil keuntungan</li>
                    </ul>
                  </div>
                </div>
                <a
                  type="button"
                  href="#getting_started"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
            <div className="card mb-4 box-shadow ">
              <div className="card-header ">
                <h4 className="my-0 font-weight-normal">TIER 2/Business</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <div className=" flex--1">
                  <p>ERP untuk Lingkungan Bisnis</p>
                  <h2 className="card-title pricing-card-title">Rp. 200.000</h2>
                  <p>Biaya Bulanan (Sudah Termasuk PPN)</p>
                  <ul className="text-left mt-3 mb-4  flex--1">
                    <li>Mencatat barang masuk dan keluar</li>
                    <li>Mencatat Keuntungan</li>
                    <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                    <li>Support 7x24 Jam</li>
                  </ul>
                </div>

                <a
                  type="button"
                  href="#getting_started"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">TIER 3/Entrepreneur</h4>
              </div>
              <div className="card-body d-flex flex-column ">
                <div className="flex--1 d-flex">
                  <div className="m-auto">
                    <p>ERP untuk Kalangan Profesional</p>
                    <h2 className="card-title pricing-card-title">Rp. 500.000 </h2>
                    <p>Biaya Bulanan (Sudah Termasuk PPN)</p>
                    <ul className="text-left mt-3 mb-4 flex--1">
                      <li>Mencatat barang masuk dan keluar</li>
                      <li>Mencatat Keuntungan</li>
                      <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                      <li>Support 7x24 Jam</li>
                      <li>Export data ke Excel</li>
                      <li>AI Prediksi penghasilan</li>
                    </ul>
                  </div>
                </div>

                <a
                  type="button"
                  href="#getting_started"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="testimonials text-left bg-white ">
        <div className="container col-md-10 col-lg-8 col-xl-7 mb-5">
          <h2 className="mb-5 text-center">CONTACT</h2>
          <address>
            <strong>
              PT. Berdikari Jaya Abadi
            </strong>
            <br />
              Jl. Jenderal Sudirman No. 123
            <br />
              Jakarta, Indonesia
            <br />
              Telepon. (021) 675899
            <br />
              Email. info@berdikari.com
          </address>
        </div>
      </section>
    </div>
  );
}
