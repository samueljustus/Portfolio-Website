

const Menu = ({menuItem}) => {
    
  return (
    <nav>
      <ul>
        {menuItem.map((item) => {
          <li key={item.id}>
            <a href={item.link}>{item.label}</a>
          </li>;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
