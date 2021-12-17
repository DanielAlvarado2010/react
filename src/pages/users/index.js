import React from "react";

import { useState, useEffect } from "react";
import { getUsers } from "../../services/users";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await getUsers();
      let result = Object.keys(response).map((element) => {
        const { firstName, lastName } = response[element];
        return {
          id: element,
          firstName,
          lastName,
        };
      });
      setUsers(result);
    };

    get();
  }, []);

  return (
    <div>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
