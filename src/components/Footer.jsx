import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <h3>Interested in delving deeper into the project?</h3>
      <p>
        If you'd like to explore further details about our initiatives or any of
        our affiliated brands, don't hesitate to connect. You can reach out to
        us via email at<span> hello@abc.com</span> or give us a call at{" "}
        <span>+91 480 20802730</span>.
      </p>
      <div className="footer-btn-wrapper">
        <button className="btn-outline">Ring Us On Skype</button>
        <button className="btn-filled">Contact Us</button>
      </div>
      <span>
        © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </span>
    </div>
  );
}

export default Footer