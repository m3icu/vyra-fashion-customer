import Container from "../layout/Container";
import { theme } from "../../theme";

import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavSearch from "./NavSearch";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E1D8] bg-[#F8F5F2]/90 backdrop-blur-md">
      <Container 
        className="flex items-center justify-between">
        style={{
          height: theme.layout.navbarHeight,
        }}
      >

        <NavLogo />

        <NavMenu />

        <div className="flex items-center gap-4">
          <NavSearch />
          <NavActions />
          <MobileMenu />
        </div>

      </Container>

    </header>
  );
}