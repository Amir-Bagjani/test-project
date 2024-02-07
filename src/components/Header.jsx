import { useUser } from "context/UserContext";

export const Header = () => {
  const { user, logout } = useUser();

  return (
    <header>
      <section>Amini dev</section>

      <div>
        <p>user : {user?.slice(0,10)}</p>
        <button onClick={logout}>logout</button>
      </div>
    </header>
  );
};
