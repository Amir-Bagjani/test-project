import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["USERS"],
    queryFn: () => fetchUsers(),
  });

  return (
    <div className="home-page">
      <h1>home page</h1>
      {isLoading ? <p>LOADING...</p> : null}
      {isError ? <p>something went wrong</p> : null}
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <Link to={`detail/${user.id}`}>
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
