import Button from "./button";
import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  //State for Split bill in split-bill.js
  const [bill, setBill] = useState("");
  const [yourExpanse, setYourExpanse] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("You");

  const friendsExpanse = bill - yourExpanse;

  function handleBill(e) {
    e.preventDefault();

    //Checks if user add any wrong value
    if (
      Number(bill) > 0 &&
      Number(yourExpanse) > 0 &&
      Number(bill) >= Number(yourExpanse)
    ) {
      const updateBalance =
        whoIsPaying === "You"
          ? selectedFriend.balance + (bill - yourExpanse)
          : selectedFriend.balance - (bill - friendsExpanse);

      onSplitBill(updateBalance);
    }
  }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="number"
        min={0}
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍‍♀️ Your expanse</label>
      <input
        type="number"
        value={yourExpanse}
        min={0}
        max={bill}
        onChange={(e) =>
          setYourExpanse(
            Number(e.target.value) > bill ? yourExpanse : e.target.value
          )
        }
      />

      <label>👫 {selectedFriend.name}'s expanse</label>
      <input
        type="text"
        value={friendsExpanse === 0 ? "" : friendsExpanse}
        disabled
      />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="You">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button classN="button" onClick={handleBill}>
        Split bill
      </Button>
    </form>
  );
}
