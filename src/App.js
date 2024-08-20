import { useState } from "react";
//Components
import FriendsList from "./friends-list";
import FormAddFriend from "./form-add-friend";
import FormSplitBill from "./form-split-bill";
import Button from "./button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  //State for Friends table
  const [friends, setFriends] = useState(initialFriends);

  //State Toogle for AddFrined
  const [toogleAddFriend, setToogleAddFriend] = useState(false);

  //State for SplitBill
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setToogleAddFriend(false);
  }

  function handleShowAddFriend(e) {
    setToogleAddFriend(e.target.textContent === "Close" ? false : true);
    setSelectedFriend(null);
  }

  function handleSelection(friend) {
    setSelectedFriend(friend);
    setToogleAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend.id ? { ...friend, balance: value } : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {toogleAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button classN="button" onClick={handleShowAddFriend}>
          {toogleAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
