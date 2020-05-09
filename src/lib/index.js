import React from "react";
import Home from "./Home";
import About from "./About";

export const MicroFrontEndConfig = {
  ModuleName: "microFrontEnd one",
};

function MicroFrontEndOne() {
  const [canShow, setCanShow] = React.useState(false);

  const toggleCanShow = () => {
    setCanShow(!canShow);
  };

  const renderAbout = () => {
    return canShow && <About />;
  };

  return (
    <div>
      This is microFrontend one. Click the Button to open render component.
      <button type="button" onClick={toggleCanShow}>
        Child Component
      </button>
      <Home />
      {renderAbout()}
    </div>
  );
}

export default MicroFrontEndOne;
