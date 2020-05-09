import React from "react";
import Home from "./Home";
import About from "./About";
export const MicroFrontEndConfig = {
  ModuleName: "microFrontEnd one"
};

function MicroFrontEndOne() {
  const [canShow, setCanShow] = React.useState(false);

  const toggleCanShow = () => {
    setCanShow(!canShow);
  };

  const renderAbout = () => {
    return canShow && /*#__PURE__*/React.createElement(About, null);
  };

  return /*#__PURE__*/React.createElement("div", null, "This is microFrontend one. Click the Button to open render component.", /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleCanShow
  }, "Child Component"), /*#__PURE__*/React.createElement(Home, null), renderAbout());
}

export default MicroFrontEndOne;