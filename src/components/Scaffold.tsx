import Header from "./Header";

export default function Scaffold({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "15vh" }}>
        <Header />
      </div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
