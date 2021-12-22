import React, { useEffect, useState } from "react";

// Services
import { deleteUser } from "../../services/users";

// RR
import { useParams } from "react-router-dom";

function UsersDelete() {
  const params = useParams();

  const handleSubmit = async (event, id) => {
    const response = await deleteUser(id);
    return response;
  };

  return (
    <div className="">
      {/* <h1>Eliminar usuario</h1> */}
      <button onClick={handleSubmit(params.userID)}>Eliminar</button>
    </div>
  );
}

export default UsersDelete;
