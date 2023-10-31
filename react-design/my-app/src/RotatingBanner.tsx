type BannerProps = {
  items: string[];
  index: number;
};

export function BannerDisplay({ items, index }: BannerProps) {
  return <h1>{items[index]}</h1>;
}
type SelectionsProps = {
  num: number;
  index: number;
  onCustomClick: () => void;
};
export function BannerSelections({
  num,
  index,
  onCustomClick,
}: SelectionsProps) {
  if (index === num) {
    return (
      <button onClick={() => onCustomClick()} className="c1-6 w">
        {num}
      </button>
    );
  } else {
    return (
      <button onClick={() => onCustomClick()} className="c1-6">
        {num}
      </button>
    );
  }
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
