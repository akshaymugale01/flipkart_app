import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Logo from "./logo.svg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import LoginT from "./LoginT";
import MoreT from './MoreT';
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Use 'navigate' for clarity
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const showvalue = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showvalue);
    };
  }, [show]);

  const handleOpen = () => {
    setOpen(true);
  };

  const ShowLogin = () => (
    <div className="showLogin">
      <div className="showLogin__button">
        <button>LOGIN</button>
      </div>
      <div className="showLogin__info">
        <div>
          <p>New customer?</p>
        </div>
        <div>
          <p style={{ color: "#2874f0" }}>Sign Up</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="header">
      <div className="first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart"
        />
        <div className="first1">
          <span
            style={{
              fontSize: "11px",
              paddingRight: "2px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#F9E107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              className="logo"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="second">
        <input type="text" placeholder="Search for products, brands, and more" />
        <SearchIcon />
      </div>
      <div className="third">
        {!show ? (
          <button onClick={handleOpen}>
            <Tippy
              content={<LoginT />}
              interactive={true}
              offset={[5, 20]}
              theme="light"
              animation="scale"
            >
              <span>Login</span>
            </Tippy>
          </button>
        ) : (
          <Tippy
            content={<ShowLogin />}
            interactive={true}
            theme="light"
            animation="perspective"
            visible={show}
          >
            <button>Login</button>
          </Tippy>
        )}
      </div>
      <div className="fourth">
        <Tippy
          content={<MoreT />}
          interactive={true}
          theme="light"
          offset={[5, 18]}
          animation="perspective"
        >
          <p className="tp">More</p>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div onClick={() => navigate("/cart")} className="fifth"> {/* Updated to use navigate */}
        <img src={Logo} alt="" />
        <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
      </div>
      <Modal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Header;
