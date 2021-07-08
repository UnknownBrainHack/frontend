import Link from "next/link";
import { FrontLink } from "./styled";

function NavItem({href="/", children, active}) {
  return (
    <Link href={href} passHref><FrontLink active={active}>{children}</FrontLink></Link>
  );
}

export default NavItem;
