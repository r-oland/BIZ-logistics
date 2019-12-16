// Components==============
import BLogo from "assets/Biz-logistics-logo.svg";
import KoerierDienst from "assets/KoerierDienst.svg";
import Opslag from "assets/Opslag.svg";
import SpoedOpdracht from "assets/SpoedOpdracht.svg";
import { Link } from "gatsby";
import { Container } from "mixins";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../style/Mixins";
import AWMHamburger from "./AnimatedWaterfallMenu/AWMHamburger";
import AWMMenu from "./AnimatedWaterfallMenu/AWMMenu";
import MenuCardDropdown3 from "./MenuCardDropdown3/MenuCardDropdown3";

// =========================

const NavWrapper = styled.div`
  width: 100vw;
  transition: 0.5s;
  background-color: ${({ menuState, top, theme }) => {
    if (menuState === "open" || top === false) {
      return theme.white;
    } else {
      return theme.gray.s1;
    }
  }};

  box-shadow: ${({ menuState, top, theme }) => {
    if (menuState === "closed" && top === false) {
      return theme.shadow.small;
    } else {
      return "none";
    }
  }};

  ${({ fixed }) =>
    fixed === true &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 148;
    `}
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing.s9};
`;

const Logo = styled.img`
  width: 160px;
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s;

  @media screen and (min-width: 950px) {
    display: flex;
  }

  li {
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: 0.3s;

    &:hover {
      transform: translateY(-2px);
      color: ${({ theme: { primary } }) => primary.s7};
    }
  }

  a {
    color: ${({ theme: { gray } }) => gray.s7};
  }
`;

export default function Nav() {
  const [top, setTop] = useState(true);

  const [menuState, setMenuState] = useState("closed");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position === 0) {
        setTop(true);
      } else {
        setTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <NavWrapper fixed={true} top={top} menuState={menuState}>
      <FlexContainer>
        <Link to="/">
          <Logo src={BLogo} alt="Biz-logistics-logo" />
        </Link>
        <AWMHamburger menuState={menuState} setMenuState={setMenuState} />
        <AWMMenu
          menuState={menuState}
          setMenuState={setMenuState}
          fixed={true}
          top={top}
        />

        <MenuItems menuState={menuState}>
          <Link to="/overOns">
            <li>Over ons</li>
          </Link>
          <Link to="/#contact">
            <li>Contact</li>
          </Link>
          <MenuCardDropdown3 name="Diensten">
            <Link to="/koerierdienst">
              <div className="dropdownItem">
                <img src={KoerierDienst} alt="Koerier dienst" />
                <p>Koerierdienst</p>
                <div className="subDropdownText">
                  Reguliere pakket verzending
                </div>
              </div>
            </Link>
            <Link to="/spoedOpdrachten">
              <div className="dropdownItem">
                <img src={SpoedOpdracht} alt="Spoed opdracht" />
                <p>Spoed opdracht</p>
                <div className="subDropdownText">
                  Pakket verzending met haast
                </div>
              </div>
            </Link>
            <Link to="/opslag">
              <div className="dropdownItem">
                <img src={Opslag} alt="Opslag" />
                <p>Opslag</p>
                <div className="subDropdownText">
                  Van diverseren soorten en maten
                </div>
              </div>
            </Link>
          </MenuCardDropdown3>
          <li>
            <Link to="/offerteAfspraak">
              <Button>Offerte / Afspraak</Button>
            </Link>
          </li>
        </MenuItems>
      </FlexContainer>
    </NavWrapper>
  );
}
