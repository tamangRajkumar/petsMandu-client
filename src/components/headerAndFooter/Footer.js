import React from "react";

function Footer() {
  return (
    <div className="h-40  border border-gray-300 bg-gray-300 mt-20 ">
      <div>
        {/* Contact Us Section */}
        <h1 className="font-bold text-4xl mt-5 text-center">Contact Us</h1>
        <p className="text-center m-5">
          Copyright <br /> Add Social Media Accounts
        </p>
      </div>

      {/* <link to={contactUs} className="flex justify-center border border-red-300 "> Contact Us</a> */}

      {/* <route path={contactUs}  /> */}
    </div>
  );
}

export default Footer;
