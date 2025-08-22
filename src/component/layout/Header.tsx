import React from "react";
import ss from "./Header.scss";

import logo from "@/assets/svg/iconQ.svg";
import inspireX from "@/assets/svg/inspireX.svg";

import search from "@/assets/svg/search.svg";

import MenuButton from "@/component/basic/MenuButton";

const Header: React.FC = () => {
  console.log(1);
  return (
    <div className={ss.frame}>
      <div className={ss.wrap}>
        <div>
          <a className={ss.logo_a}>
            <img src={logo} alt="logo" className={ss.logo} />
            <img src={inspireX} alt="inspireX" className={ss.inspireX} />
          </a>
        </div>
        <div className={ss.primary}>
          <div className={ss.primary_item}>Products</div>
          <div className={ss.primary_item}>Open Source</div>
          <div className={ss.primary_item}>Solutions</div>
          <div className={ss.primary_item}>Learn</div>
          <div className={ss.primary_item}>Docs</div>
          <div className={ss.primary_item}>Pricing</div>
        </div>
        <div className={ss.secondary}>
          <div className={ss.search_container}>
            <img src={search} alt="search" className={ss.search} />
          </div>
          <div className={ss.download}><span>Downloads</span></div>
          <div className={ss.contact_us}><span>Contact us</span></div>
          <div className={ss.download}><span>Sign in</span></div>
        </div>
        <div className={ss.mobile_container}>
          <div className={ss.search_container}>
            <img src={search} alt="search" className={ss.search} />
          </div>
          <MenuButton size={20} backgroundColor="#000" />
        </div>
      </div>
    </div>
  );
};

export default Header;
