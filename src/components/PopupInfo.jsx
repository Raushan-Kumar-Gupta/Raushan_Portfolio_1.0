import React from "react";
import { useEffect, useState } from "react";
import "../styles/popupinfo.scss";
import raushanImg from "../assets/imgs/raushan_gpic.jpg"; // Import your image

const PopupInfo = ({ show }) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        setVisible(show);
    }, [show]);

    return (
        <div className={`popup-box ${visible ? "visible" : ""}`}>
            <div className="content">
                <div>
                    <img
                        src={raushanImg}
                        alt="Raushan Gupta"
                        className="image"
                    />
                </div>
                <h3>
                    raushan-gupta <span>__raushangupta__ . he/him</span>{" "}
                </h3>
                <p>
                    {`res.status(200).json({ greeting: 'Hello Peps', data: { desc: 'welcome to my profile', message: 'Meet a geeky guy!👨‍💻, Music lover🎵', } }); `}
                </p>
            </div>
        </div>
    );
};

export default PopupInfo;