import Button from "./button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend?.id;

  function handleSelect(e) {
    onSelection(e.target.textContent === "Close" ? null : friend);
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even`
          : friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
          : `${friend.name} owes you ${friend.balance}$`}
      </p>
      <Button classN="button" onClick={handleSelect}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
