import React, { useEffect, useState } from "react";

function PlayStage({ match }) {
  useEffect(() => {
    fetchStage();
  }, []);

  const [stage, setStage] = useState({});
  const [combination, setCombination] = useState({});
  const [author, setAuthor] = useState({});
  const [hint, setHint] = useState({});
  const [count, setCount] = useState({});
  const [stack, setStack] = useState({});

  const fetchStage = async () => {
    const fetchStage = await fetch(
      `http://localhost:3000/api/stage/${match.params.stageId}`
    );
    const stage = await fetchStage.json();
    setCombination(stage.data.combination);
    setAuthor(String(stage.data.author));
    setHint(String(stage.data.hint));
    setStack(Number(0));
    setCount(Number(0));
  };

  function guessOne(char) {
    // do things unlike some Arjan.
    console.log(char);
    console.log(combination[stack]);
    if (stack <= 3) {
      if (char === combination[stack]) {
        // correct one
        setStack(Number(stack + 1));
      } else {
        // bad guess one
        setCount(Number(count + 1));
      }
    }
  }

  return (
    <div>
      <h1>{String(hint)}</h1>
      <p> by {String(author)}</p>
      {/* shown list */}
      <ul style={{ listStyleType: "none" }}>
        <li style={{ display: "inline", padding: "2%" }}>{stack > 0 ? combination[0]: "_"}</li>
        <li style={{ display: "inline", padding: "2%" }}>{stack > 1 ? combination[1]: "_"}</li>
        <li style={{ display: "inline", padding: "2%" }}>{stack > 2 ? combination[2]: "_"}</li>
        <li style={{ display: "inline", padding: "2%" }}>{stack > 3 ? combination[3]: "_"}</li>
      </ul>
      {/* controls */}
      <ul>
        <li onClick={() => guessOne("A")}>A</li>
        <li onClick={() => guessOne("B")}>B</li>
        <li onClick={() => guessOne("C")}>C</li>
        <li onClick={() => guessOne("D")}>D</li>
      </ul>
      <p>Number of unsuccessful try(s): {String(count)}</p>
    </div>
  );
}

export default PlayStage;
