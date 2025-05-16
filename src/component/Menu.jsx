const Menu = ({items =[]}) => {
    const menuItem = [
        { id: 1, label: "About", link: "/about" },
        { id: 2, label: "Portfolio", link: "/Porfolio" },
        { id: 3, label: "Blogs", link: "/blog" },
      ];
      

  return (
    <nav className="bg-blue-500">
      <ul>
        {items.map((item) => {
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
