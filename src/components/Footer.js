import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import github from "../img/github-icon.svg";
import linkedin from "../img/linkedin-icon.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark">
        {/*<div className="content has-text-centered">*/}
        {/*  <img*/}
        {/*    src={logo}*/}
        {/*    alt="Kaldi"*/}
        {/*    style={{ width: '14em', height: '10em' }}*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/vargarobert">Profile</a>
                    </li>
                    {/*<li>*/}
                    {/*  <Link className="navbar-item" to="/products">*/}
                    {/*    Products*/}
                    {/*  </Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link className="navbar-item" to="/contact/examples">*/}
                    {/*    Form Examples*/}
                    {/*  </Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <a*/}
                    {/*    className="navbar-item"*/}
                    {/*    href="/admin/"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*  >*/}
                    {/*    Admin*/}
                    {/*  </a>*/}
                    {/*</li>*/}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="linkedin"
                  href="https://www.linkedin.com/in/vargarobert"
                >
                  <img
                    className="fas fa-lg"
                    src={linkedin}
                    alt="linkedin"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="github"
                  href="https://github.com/vargarobert?tab=repositories"
                >
                  <img
                    src={github}
                    alt="github"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
