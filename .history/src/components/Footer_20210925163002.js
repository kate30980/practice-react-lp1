import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import Link from "./Link";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals.
        </p>
        <p className="footer-subscription-text">
          You can unsubscrive at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              className="footer-input"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <divc className="footer-link-wrapper">
          <h2>About us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Testimonial</Link>
        </divc>
      </div>
    </div>
  );
}

export default Footer;
