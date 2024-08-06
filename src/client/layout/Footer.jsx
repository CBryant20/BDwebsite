import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { FloatButton } from "antd";
import "./Footer.less";

export default function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer'>
        <div className='top-row'>
          <div className='column'>
            <h3>About Bryant Designs</h3>
            <ul>
              <li>Our Mission</li>
              <li>Team</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='column'>
            <h3>Contact Us</h3>
            <ul>
              <li>School Website</li>
              <li>Send Email</li>
            </ul>
          </div>
          <div className='column'>
            <h3>Raise Funds</h3>
            <ul>
              <li>Donate</li>
              <li>Fundraisers</li>
            </ul>
          </div>
        </div>

        <p className='copyright'>
          &copy; 2024 Bryant Designs All Rights Reserved
          {/* <a href=''>Privacy Policy</a>
          <a href=''>Terms of Use</a>
          <a href=''>Cookie Policy</a> */}
        </p>
      </section>
      <FloatButton.BackTop>
        <div className='go-top'>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </FloatButton.BackTop>
    </div>
  );
}
