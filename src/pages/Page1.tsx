import Scaffold from "../components/Scaffold";

export default function Page1() {
  return (
    <Scaffold>
      <h2>Page 1</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.1rem",
        }}
      >
        <Box color="red" />
        <Box color="green" />
        <Box color="red" />
        <Box color="green" />
      </div>
    </Scaffold>
  );
}

const Box = ({ color }: { color: string }) => {
  return (
    <div style={{ height: "20rem", width: "10rem", background: color }}></div>
  );
};
