import React from 'react'

export default function Users() {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
    ];
    const userList = users.map((user) => 
    <li key={user.id}> {user.name}</li>
    )

  return (
    <>
      <h2>User Details List</h2>
      <ol>{userList}</ol>
    </>
  )
}
