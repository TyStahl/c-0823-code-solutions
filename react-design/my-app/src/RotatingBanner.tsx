type BannerProps = {
  items: string[];
  index: number;
};

export function BannerDisplay({ items, index }: BannerProps) {
  return <h1>{items[index]}</h1>;
}
type SelectionsProps = {
  index: number;
};
export function BannerSelections({ index }: SelectionsProps) {
  // function listItems() {
  //   if (index === 0) {
  //     return <li></li>;
  //   }
  // }

  return (
    <ul className="row">
      <li className="c1-6">
        <p>{index}</p>
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
type NextProps = {
  text: string;
  onClick: () => void;
};

export function NextPrevButton({ text, onClick }: NextProps) {
  return (
    <button className="button" onClick={() => onClick()}>
      {text}
    </button>
  );
}

// type PrevProps = {
//   text: string;
//   onClick: () => void;
// };
// export function PrevButton({ text, onClick }: PrevProps) {
//   return (
//     <button onClick={() => onClick()} className="prev">
//       {text}
//     </button>
//   );
// }
