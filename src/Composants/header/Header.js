import React from "react";
const Header = ({ onColorButtonClick }) => {
  return (
    <div className="container my-header my-5 mx-auto">
      <h3>NoteHack</h3>

      <div className="d-flex">
        <Bouttons className="color c-1" onClick={() => onColorButtonClick("linear-gradient(to right, rgb(136, 136, 235), rgb(46, 43, 224))")} />
        <Bouttons className="color c-2" onClick={() => onColorButtonClick("linear-gradient(to bottom, rgb(183, 183, 238), rgb(238, 156, 197))")} />
        <Bouttons className="color c-3" onClick={() => onColorButtonClick("linear-gradient(to right, rgb(136, 136, 235), rgb(46, 43, 224))")} />
        <Bouttons className="color c-4" onClick={() => onColorButtonClick("linear-gradient(to right, rgb(248, 108, 127), rgb(233, 23, 23))")} />
        <Bouttons className="color c-5" onClick={() => onColorButtonClick("linear-gradient(to right, rgb(230, 140, 23), rgb(238, 183, 82))")} />
        <Bouttons className="color c-6" onClick={() => onColorButtonClick("linear-gradient(to right, rgb(168, 243, 158), rgb(214, 241, 58))")} />
      </div>
    </div>
  );
};

const Bouttons = ({ className,onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}></button>
    </div>
  );
};

export default Header;
