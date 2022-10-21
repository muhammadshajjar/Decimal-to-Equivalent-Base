import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={`${classes.header__content} container`}>
        <div className={classes.logo}>
          <h2>DAA</h2>
          <p>Design and Anaylsis of Algorithms</p>
        </div>
        <h3>Assignment no 1</h3>
      </div>
    </div>
  );
};

export default Header;
