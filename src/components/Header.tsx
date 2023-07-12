import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div
      style={{
        //  border: "4px green solid",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "grey",
        height: "15vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      <div
        style={{
          //border: "2px red solid",
          display: "flex",
          flexDirection: "row",
          minHeight: "0",
          margin: "0 0 0 1rem",
        }}
      >
        <h1>Super Site</h1>
      </div>
      <div
        style={{
          // border: "2px red solid",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          minHeight: "0",
        }}
      >
        <CustomNavLink title="Home" to="/" />
        <CustomNavLink title="Page 2" to="/page2" />
      </div>
    </div>
  );
}

const CustomNavLink = ({ title, to }: { title: string; to: string }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          textDecoration: "none",
          color: "black",
        };
      }}
      to={to}
    >
      <p>{title}</p>
    </NavLink>
  );
};
