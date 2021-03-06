import React, { useEffect, useState } from "react";

function PlayStage({ match }) {
  useEffect(() => {
    fetchStage();
  }, []);

  const [combination, setCombination] = useState([]);
  const [author, setAuthor] = useState("");
  const [hint, setHint] = useState("");
  const [count, setCount] = useState(0);
  const [stack, setStack] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const fetchStage = async () => {
    const fetchStage = await fetch(
      `http://localhost:3000/api/stage/${match.params.stageId}`
    );
    const stage = await fetchStage.json();
    setCombination(stage.data.combination);
    setAuthor(String(stage.data.author));
    setHint(String(stage.data.hint));
  };

  function guessOne(char) {
    // do things unlike some Arjan.
    console.log(char);
    console.log(combination[stack]);
    if (stack <= 3) {
      if (char === combination[stack]) {
        // correct one
        setStack(Number(stack + 1));
        if (stack == 3) {
          setIsWon(true);
        }
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
        <li style={{ display: "inline", padding: "2%" }}>
          {stack > 0 ? combination[0] : "_"}
        </li>
        <li style={{ display: "inline", padding: "2%" }}>
          {stack > 1 ? combination[1] : "_"}
        </li>
        <li style={{ display: "inline", padding: "2%" }}>
          {stack > 2 ? combination[2] : "_"}
        </li>
        <li style={{ display: "inline", padding: "2%" }}>
          {stack > 3 ? combination[3] : "_"}
        </li>
      </ul>
      {/* controls */}
      <ul>
        <button onClick={() => guessOne("A")}>A</button>
        <button onClick={() => guessOne("B")}>B</button>
        <button onClick={() => guessOne("C")}>C</button>
        <button onClick={() => guessOne("D")}>D</button>
      </ul>
      <p>Number of unsuccessful try(s): {String(count)}</p>
      <p style={{color: "green"}}>
        {isWon
          ? `You win ! \n Score: ${Math.ceil(Math.random() * 1000)} based purely on my criteria`
          : ""}
      </p>
    </div>
  );
}

export default PlayStage;
