import React, { Component } from "react";
import './footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="/"> simpleapp.com</a>
        </div>
      </footer>

    )
  }
}