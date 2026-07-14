import { useState } from "react";

const App = () => {
  const [test, setTest] = useState<string>("Dude");

  const handle = async () => {
    const res = await fetch("/api/");
    const body = await res.json();

    setTest(body.name);
  };

  return (
    <>
      <h1>{test}</h1>
      <button type="button" onClick={handle} aria-label="fetch">
        fetch
      </button>
    </>
  );
};

export default App;
