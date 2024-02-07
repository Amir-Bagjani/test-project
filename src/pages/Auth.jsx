import { useUser } from "context/UserContext";
import { useState } from "react";
import { useMutation } from "react-query";

const loginUser = async (data) => {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
  const user = await res.json();

  return user;
};

const Auth = () => {
  const { login } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isLoading, mutate } = useMutation({
    mutationFn: (userData) => loginUser(userData),
    onSuccess: (user) => {
      login(user.token);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setError("username is required");
      return;
    }
    if (!password) {
      setError("password is required");
      return;
    }

    mutate({ username: username, password: password });
  };

  return (
    <main className="auth-page">
      <span>
        hint:{" "}
        <pre>
          {JSON.stringify(
            [{ username: "johnd", password: "m38rmF$" }],
            null,
            2
          )}
        </pre>
      </span>
      <form onSubmit={handleSubmit}>
        <h1>login to Amini dev</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading ? true : false} type="submit">
          {isLoading ? "loading" : "login"}
        </button>
        {error ? <p>{error}</p> : null}
      </form>
    </main>
  );
};

export default Auth;
