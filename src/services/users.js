const createUser = async (data) => {
  const response = await fetch(
    `https://react-14g-default-rtdb.firebaseio.com/users.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // body: data,
    }
  );
  return await response.json();
};

const getUsers = async () => {
  const response = await fetch(
    "https://react-14g-default-rtdb.firebaseio.com/users.json"
  );
  return await response.json();
};

const getUser = async (id) => {
  const response = await fetch(
    `https://react-14g-default-rtdb.firebaseio.com/users/${id}.json`
  );
  return await response.json();
};

const updateUser = async (id, data) => {
  const response = await fetch(
    `https://react-14g-default-rtdb.firebaseio.com/users/${id}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // body: data,
    }
  );
  return await response.json();
};

const deleteUser = async (id) => {
  const response = await fetch(
    `https://react-14g-default-rtdb.firebaseio.com/users/${id}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response;
};

export { createUser, getUsers, getUser, updateUser, deleteUser };
