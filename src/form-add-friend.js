import { useState } from "react";

//Components
import Button from "./button";

export default function FormAddFriend({ onAddFriend }) {
  const [newFriend, setNewFriend] = useState("");
  const [newAvatar, setNewAvatar] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newFriend || !newAvatar) return;

    const id = crypto.randomUUID();
    const addNewFriend = {
      id: id,
      name: newFriend,
      image: `${newAvatar}?=${id}`,
      balance: 0,
    };

    onAddFriend(addNewFriend);
    setNewFriend("");
    setNewAvatar("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>👫 Friend Name</label>
        <input
          type="text"
          value={newFriend}
          autoFocus
          onChange={(e) => setNewFriend(e.target.value)}
        />
        <label>🌄 Image URL</label>
        <input
          type="text"
          value={newAvatar}
          onChange={(e) => setNewAvatar(e.target.value)}
        />
        <Button classN="button">Add</Button>
      </form>
    </>
  );
}
