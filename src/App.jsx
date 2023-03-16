import { useState } from "react";
import { LoadCharacters } from "./components/LoadCharacters";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <LoadCharacters count={count} setCount={setCount} />
    </>
  );
}

export default App;
