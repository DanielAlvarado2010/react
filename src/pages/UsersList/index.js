import React, { useEffect, useState } from "react";

// Services
import { deleteUser, getUsers } from "../../services/users";

// Components
import Li from "../../components/Li";

// RR
import { useNavigate } from "react-router-dom";
import UsersDelete from "../UsersDelete";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      const response = await getUsers();
      const parsedResponse = Object.keys(response).map((key) => {
        const { firstName, lastName } = response[key];
        return {
          id: key,
          firstName,
          lastName,
        };
      });
      setUsers(parsedResponse);
    };

    get();
  }, []);

  return (
    <div>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <Li
            key={id}
            text={`${firstName} ${lastName}`}
            buttonText="Actualizar"
            callback={() => navigate(`${id}/update`)}
          />
        ))}
      </ul>
    </div>
  );
}
