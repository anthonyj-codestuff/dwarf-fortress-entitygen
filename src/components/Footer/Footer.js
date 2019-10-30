import React, { Component } from 'react';
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <a 
        className="footer-link" 
        href="https://github.com/anthony62490/dwarf-fortress-entitygen">Find this project on GitHub</a>
      </div>
    );
  }
}

export default Footer;