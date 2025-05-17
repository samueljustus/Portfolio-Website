import Socials from "./Socials";

const Menu = () => {
  // const menuItem = [
  //     { id: 1, label: "About", link: "/about" },
  //     { id: 2, label: "Portfolio", link: "/Porfolio" },
  //     { id: 3, label: "Blogs", link: "/blog" },
  //   ];

  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-blue-500 z-7 flex flex-col ">
      <ul className="absolute right-0 top-50 px-2 text-base">
        <a href="">
          <li>About</li>
        </a>

        <a href="" className=""> 
          <li className="my-5">Portfolio</li>
        </a>

        <a href="">
          <li>Blogs</li>
        </a>
      </ul>
      <div className="absolute bottom-0 w-screen px-10 flex justify-center my-10 py-10 border-t border-black-300">
        <Socials />
      </div>
    </div>
  );
};

export default Menu;
