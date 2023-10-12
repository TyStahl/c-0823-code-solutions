import './CustomButton.css';

function CustomButton({ text, color }) {
  return <button className={color}>{text}</button>;
}

export default CustomButton;
