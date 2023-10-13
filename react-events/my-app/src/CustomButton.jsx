import './CustomButton.css';

function CustomButton({ text, color, onCustomClick }) {
  return (
    <button onClick={() => onCustomClick(text, color)} className={color}>
      {text}
    </button>
  );
}

export default CustomButton;
