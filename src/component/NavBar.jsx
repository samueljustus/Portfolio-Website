import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
function NavBar() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-[#ffff] py-6 text-xs z-10 px-4 shadow-xl">
        <div className="max-w-[1000px] flex item-center justify-between m-auto">
          <Logo />
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

// inside nav you have the logo imported
// you have the hamburger imported
// export navBar inside  HomePage component
