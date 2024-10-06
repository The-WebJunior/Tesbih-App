export default function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue("x");
  // }

  return (
    <>
      <button
        className="border rounded-lg border-black w-12 h-12 bg-zinc-600 "
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
