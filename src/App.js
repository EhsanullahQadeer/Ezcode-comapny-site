import { Header } from "./components/global/Header";

function App() {
  return (
    <>
      <div
        style={{
          height: "100svh",
        }}
      >
        <div
          style={{
            maxWidth: "80%",
            margin: "auto",
            padding: "30px",
          }}
        >
          <Header />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
