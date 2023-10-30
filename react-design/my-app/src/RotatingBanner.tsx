export function BannerDisplay() {
  return <h1>ARDVARK</h1>;
}

export function BannerSelections() {
  return (
    <ul className="row">
      <li className="c1-6">
        <p>1</p>
      </li>
      <li className="c1-6">
        <p>2</p>
      </li>
      <li className="c1-6">
        <p>3</p>
      </li>
      <li className="c1-6">
        <p>4</p>
      </li>
      <li className="c1-6">
        <p>5</p>
      </li>
      <li className="c1-6">
        <p>6</p>
      </li>
    </ul>
  );
}

export function NextButton() {
  return <button className="next">NEXT</button>;
}

export function PrevButton() {
  return <button className="prev">PREV</button>;
}
