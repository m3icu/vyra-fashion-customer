import Container from "../layout/Container";
import { theme } from "../../theme";

export default function Footer() {
  return (
    <footer
      className="border-t border-[#E9E1D8] bg-[#F8F5F2]"
      style={{
        minHeight: theme.layout.footerHeight,
      }}
    >
      <Container className="flex h-full items-center justify-center">

        <p className="text-sm text-[#7A6A58]">
          © {new Date().getFullYear()} VYRA Fashion.
          Crafted with Heart.
        </p>

      </Container>
    </footer>
  );
}