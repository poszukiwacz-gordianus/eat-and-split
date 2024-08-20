export default function Button({ classN, onClick, children }) {
  return (
    <button className={classN} onClick={onClick}>
      {children}
    </button>
  );
}
