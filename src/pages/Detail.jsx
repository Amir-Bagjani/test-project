import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const fetchUserDetail = async (id) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return data;
};

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["USER_DETAIL", id],
    queryFn: () => fetchUserDetail(id),
  });

  return (
    <div className="detail-page">
      <h1>user detail page</h1>
      {isError ? <p>something went wrong</p> : null}
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        <div>
          <h6>name: {data?.name}</h6>
          <h6>user-name: {data?.username}</h6>
          <h6>user-email: {data?.email}</h6>
          <h6>user-phone: {data?.phone}</h6>
          <h6>user-website: {data?.website}</h6>
        </div>
      )}
    </div>
  );
};

export default Detail;
