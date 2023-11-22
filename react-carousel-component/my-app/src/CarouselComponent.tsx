import { CSSProperties, useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
type Props = {
  items: string[];
};

export function CarouselComponent({ items }: Props) {
  const [current, setCurrent] = useState(0);
  function handlePrevClick() {
    setCurrent((current - 1 + items.length) % items.length);
  }
  function handleNextClick() {
    setCurrent((current + 1) % items.length);
  }
  function handleSelect(index: number) {
    setCurrent(index);
  }

  useEffect(() => {
    const id = setTimeout(() => setCurrent((current + 1) % items.length), 1000);
    return () => clearTimeout(id);
  }, [items.length, current]);

  return (
    <>
      <div className="row a-c">
        <FaAngleLeft className="b-icons" onClick={handlePrevClick} />
        <Banner item={items[current]} />
        <FaAngleRight className="b-icons" onClick={handleNextClick} />
      </div>
      <div className="row j-c">
        <Indicators items={items} current={current} onSelect={handleSelect} />
      </div>
    </>
  );
}
type BannerProps = {
  item: string;
};
function Banner({ item }: BannerProps) {
  return (
    <div className="imagebox">
      <img src={item}></img>
    </div>
  );
}
type ButtonProps = {
  text: string;
  style?: CSSProperties;
  onClick: () => void;
};
function Button({ text, style, onClick }: ButtonProps) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}
type IndicatorsProps = {
  items: Props['items'];
  current: number;
  onSelect: (index: number) => void;
};

function Indicators({ items, current, onSelect }: IndicatorsProps) {
  const buttons = items.map((item, index) => (
    <Button
      key={index + item}
      text={String(index)}
      style={{ backgroundColor: current === index ? 'lightblue' : 'white' }}
      onClick={() => onSelect(index)}
    />
  ));
  return <div>{buttons}</div>;
}
