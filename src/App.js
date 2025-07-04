import React from "react";

const data = [
  { id: 1, name: "Alice", age: 24, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 4, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 5, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 6, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 7, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 8, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 9, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 10, name: "Charlie", age: 28, email: "charlie@example.com" },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Table</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
