import Link from "next/link";
import { FrontLink } from "./styled";

function NavItem({href="/", children, active, onClick}) {
  return (
    <Link href={href} passHref><FrontLink onClick={onClick} active={active}>{children}</FrontLink></Link>
  );
}

export default NavItem;
