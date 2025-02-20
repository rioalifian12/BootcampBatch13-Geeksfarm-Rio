import Nav from "./Nav";

function App() {
  const message = "Hi there!";

  return (
    <div>
      <Nav />
      <h1>{message}</h1>
      <input type="number" min={5} style={{ border: "3px solid red" }} />
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
