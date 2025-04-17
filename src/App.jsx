import "./App.css";

function App() {
  const m_komp = 2;

  let wyn1 = m_komp * 1;
  let wyn2 = m_komp * 2;
  let wyn3 = m_komp * 3;
  let wyn4 = m_komp * 4;
  let wyn5 = m_komp * 5;
  let wyn6 = m_komp * 6;
  let wyn7 = m_komp * 7;
  let wyn8 = m_komp * 8;
  let wyn9 = m_komp * 9;
  let wyn10 = m_komp * 10;

  let x = 2;
  let y = 3;

  let f1 = 1 * x * x * x + - 1 * y;
  let f2 = 2 * x * x + y * y - 4 * y * y;
  let f3 = 3 * y * y - 1 * x * x - 7 * y;
  let f4 = 2 * x * y + 1 * x * y;
  let f5 = 3 * x * x + 1 * y;

  return (
    <div className="app">
      <div className="header">
        <h1>Komputer numer - {m_komp}</h1>
      </div>

      <div className="multiplication-card">
        <div className="multiplication-text">
          <p>2 × 1 = {wyn1}</p>
          <p>2 × 2 = {wyn2}</p>
          <p>2 × 3 = {wyn3}</p>
          <p>2 × 4 = {wyn4}</p>
          <p>2 × 5 = {wyn5}</p>
          <p>2 × 6 = {wyn6}</p>
          <p>2 × 7 = {wyn7}</p>
          <p>2 × 8 = {wyn8}</p>
          <p>2 × 9 = {wyn9}</p>
          <p>2 × 10 = {wyn10}</p>
        </div>
      </div>
<br />
      <div className="formulas-card">
        <ul>
          <li>7x³ + - 7y = {f1}</li>
          <li>2x² + y² - 4y² = {f2}</li>
          <li>3y² - 7x² - 7y = {f3}</li>
          <li>2xy + 7xy = {f4}</li>
          <li>3x² + 7y = {f5}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
