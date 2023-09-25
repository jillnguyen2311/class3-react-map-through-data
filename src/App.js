import "./styles.css";
import { useState } from "react";

const users = [
  {
    name: "john doe",
    id: 1,
    occupation: "web dev"
  },

  {
    name: "albert einstein",
    id: 2,
    occupation: "physician"
  },

  {
    name: "john oliver",
    id: 3,
    occupation: "comedian"
  },

  {
    name: "justin bieber",
    id: 4,
    occupation: "musician"
  }
];

export default function App() {
  const userItems = [];
  for (const user of users) {
    userItems.push(
      <p>
        {user.name}: {user.occupation}
      </p>
    );
  }
  console.log(userItems);

  return (
    <div className="App">
      {users.map(function (user) {
        return (
          <p key={user.id}>
            {user.name}: {user.occupation}
          </p>
        );
      })}
    </div>
  );
}
