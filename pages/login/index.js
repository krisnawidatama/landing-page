import { Container } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Navigation from "../../components/Navigation";

const about = () => {
  return (
    <Container>
      <Navigation product="HOME">
      </Navigation>
      <section id="contact" className="testimonials text-left bg-white ">
        <div className="container col-md-10 col-lg-8 col-xl-7 mb-5">
          <h2 className="mb-5 text-center">CONTACT</h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </section>
    </Container>
  );
};

export default about;
