import "./styles.css";
import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [texts, setTexts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const amountOfTexts =
      count > data.length - 1
        ? data.length
        : count < 0
        ? 1
        : count === 0
        ? 1
        : count;
    const newTexts = data.slice(0, amountOfTexts);
    setTexts(newTexts);
    setCount(0);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum text?</h3>

      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amout">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amout"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {texts.map((text) => {
          return <p>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
