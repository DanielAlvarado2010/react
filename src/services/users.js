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
  console.log(response);
  const data = await response.json();
  console.log(data);

  return data;
};

export { createUser, getUsers };
