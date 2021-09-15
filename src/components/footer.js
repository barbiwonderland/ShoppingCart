import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="bg-dark p-1 fixed-bottom  ">
          <p className="text-center my-auto text-muted">
            Made with ❤ by{" "}
            <a
              className="text-muted"
              style={{ textDecoration: "none" }}
              href="https://github.com/barbiwonderland"
            >
              BarbiWonderland{" "}
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
