import React, { useState } from "react";
import Input from "../../components/input";

import { createUser } from "../../services/users";

export default function Users() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        firstName,
        lastName,
        gender,
        occupation,
        birthdate,
      };
      await createUser(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="Container">
      <h1>Crear un usuario</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id="firstName"
          label="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          id="lastName"
          label="Last Name"
          value={lastName}
          setValue={setLastName}
        />
        <Input
          id="gender"
          label="Enter gender"
          value={gender}
          setValue={setGender}
        />
        <Input
          id="occupation"
          label="Occupation"
          value={occupation}
          setValue={setOccupation}
        />
        <Input
          type="date"
          id="birthdate"
          label="Birthdate"
          value={birthdate}
          setValue={setBirthdate}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
