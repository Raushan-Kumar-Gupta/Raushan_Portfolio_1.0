import { HeartHandshake } from "lucide-react";
import "../styles/navbar.scss";
import { useState } from "react";

import PopupInfo from "./PopupInfo";

const NavBar = ({ onContactClick, onMenuClick }) => {
  // const homeRef = useRef(null);

  // const scrollToRef = (ref) => {
  //     if (ref.current) {
  //         ref.current.scrollIntoView({ behavior: "smooth" });
  //     }
  // };

  // useEffect(() => {
  //     scrollToRef(homeRef);
  // }, []);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <nav>
      <p
        className="icon"
        onClick={() => onMenuClick("RAUSHAN | PORTFOLIO")}
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >
        RAUSHAN
      </p>
      <ul>
        <li className="link" onClick={() => onMenuClick("HOME")}>
          <a href="/">Home</a>
        </li>
        <li className="link" onClick={() => onMenuClick("ABOUT")}>
          <a href="#about">About</a>
        </li>
        <li className="link" onClick={() => onMenuClick("PROJECTS")}>
          <a href="#project">Projects</a>
        </li>
        <li className="link" onClick={() => onMenuClick("EDUCATION")}>
          <a href="#education">Education</a>
        </li>
        <li className="link" onClick={onContactClick}>
          <button className=" flex">
           <div> Contact</div> <div className="icon"><HeartHandshake /></div>
          </button>
        </li>
        {showPopup && (
          <PopupInfo
            show={showPopup}
            // info=""
            // onClose={() => setShowPopup(false)}
          />
        )}
        <div className="line"></div>
      </ul>
    </nav>
  );
};

export default NavBar;
