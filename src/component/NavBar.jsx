import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
function NavBar() {
  return (
    <div>
      <div className=" flex item-center justify-between my-6 text-xs z-10 px-4">
        <Logo />
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;

// inside nav you have the logo imported
// you have the hamburger imported
// export navBar inside  HomePage component
