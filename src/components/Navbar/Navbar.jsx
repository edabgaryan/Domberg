import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Project from "../../pages/Project/Project";
import Gallery from "../../pages/Gallery/Gallery";
import Buy from "../../pages/Buy/Buy";
import LandSelection from "../../pages/LandSelection/LandSelection";
import PriceList from "../../pages/PriceList/PriceList";
import Dom100 from "../../pages/Project/Dom100/Dom100";
import Mansarda100 from "../../pages/Project/Mansarda100/Mansarda100";
import SkandiHouse from "../../pages/Project/SkandiHouse/SkandiHouse";
import SkandiHouse2 from "../../pages/Project/SkandiHouse2/SkandiHouse2";
import HiTech90 from "../../pages/Project/HiTech90/HiTech90";
import Contact from "../../pages/Contact/Contact";
import Dom120 from "../../pages/Project/Dom120/Dom120";
import PrivacyPolicy from "../../pages/PrivacyPolicy/PrivacyPolicy";
import Notefondpage from "../../pages/Notfoundpage/Notefondpage";

import HeaderSocials from "../HeaderSocials/HeaderSocials";
import PropertyManagement from "../../pages/Property/PropertyManagement";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Автоматически закрывает меню при переходе по ссылке
  useEffect(() => {
    setMenuOpened(false);
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <div className="header__wrap container">
          <Link to="/" className="header__logo" />

          <nav className={`header__menu ${menuOpened ? "active" : ""}`}>
            <ul className="h-menu__wrap">
              {[
                { to: "/", label: t("nav.home") },
                { to: "/about", label: t("nav.about") },
                { to: "/project", label: t("nav.projects") },
                {
                  to: "/PriceList",
                  label: t("nav.PriceList"),
                },
                { to: "/LandSelection", label: t("nav.LandSelection") },
                // { to: "/buy", label: t("nav.buy") },

                { to: "/gallery", label: t("nav.gallery") },
                { to: "/contact", label: t("nav.contact") },
              ].map(({ to, label }) => (
                <li key={to} className="h-menu__item">
                  <Link to={to} className="h-menu__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <HeaderSocials onClickMenu={menuOpened} onCloseMenu={setMenuOpened} />
        </div>
      </header>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/buy" element={<Buy />} /> */}

          <Route path="/LandSelection" element={<LandSelection />} />
          <Route path="/PriceList" element={<PriceList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PropertyManagement" element={<PropertyManagement />} />
          <Route path="/project/Dom100" element={<Dom100 />} />
          <Route path="/project/Mansarda100" element={<Mansarda100 />} />
          <Route path="/project/SkandiHouse" element={<SkandiHouse />} />
          <Route path="/project/SkandiHouse2" element={<SkandiHouse2 />} />
          <Route path="/project/HiTech90" element={<HiTech90 />} />
          <Route path="/project/SkandiHouse120" element={<Dom120 />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Notefondpage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
