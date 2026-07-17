/**
 * --------------------------------------------------------
 * VYRA Fashion
 * Navbar
 *
 * The first welcome every visitor receives.
 *
 * Calm.
 * Warm.
 * Timeless.
 *
 * Build with Heart.
 * --------------------------------------------------------
 */
import Container from "../../common/Container";
import { theme } from "../../../theme";

import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavSearch from "./NavSearch";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header 
      className="
        sticky 
        top-0 
        backdrop-blur-xl
        transition-[background-color,border-color,box-shadow]
        duration-300
      "
        style={{   
          height: theme.layout.navbarHeight,   
          zIndex: theme.zIndex.navbar,
          backgroundColor: theme.effects.navbarBackground,
          borderBottom: `1px solid ${theme.colors.divider}`,
        }}
    >
      <Container 
        className="
          flex 
          items-center          
          justify-between
          h-full
          gap-8
        "
      >

        <NavLogo />

        <NavMenu />

        <div className="flex items-center gap-6">
          <NavSearch />
          <NavActions />
          <MobileMenu />
        </div>

      </Container>

    </header>
  );
}