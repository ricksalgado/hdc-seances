import { useState } from "react";

const UserInfoForm = () => {
  const [name, setName] = useState("");
  // geralmente, os formularios comecame com uma string vazia em useState(""), pois la sera a informacao que o usuario ira responder.
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // acessar a API via fetch ou axios

    console.warn(name,email);

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type your email"
      />
      <button type="submit">Submit</button>

      <p>
        {name}
      </p>
      <p>
        {email}
      </p>
    </form>
  );
};

export default UserInfoForm;
