import React, { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { useDataFetching } from "../../customHooks/dataFetching";
import "./user.scss";

const UserList = () => {
  const [usersData, request] = useDataFetching(
    `https://jsonplaceholder.typicode.com/users`
  );
  const { setSelectedUser } = useContext(UserContext);

  const pictureRef = useRef([]);

  const handlerClickUser = ({ user, idx }) => {
    setSelectedUser({
      user,
      pictureRef: pictureRef.current[idx],
    });
  };

  return (
    <section className="container-s margin-top center">
      {usersData.dataState === "PENDING" ? (
        <div className="loading">LOADING USERS...</div>
      ) : usersData.dataState === "FULFILLED" ? (
        <div className="user-list-container">
          {usersData.data.map((user, idx) => (
            <div
              className="row"
              key={`user-list-${idx}`}
              onClick={() => handlerClickUser({ user, idx })}
            >
              <picture ref={(e) => (pictureRef.current[idx] = e)}>
                <img
                  src={`https://picsum.photos/id/${user.id}/400/400`}
                  alt={`${user.name}-foto`}
                  height="100"
                  width="100"
                  loading="lazy"
                />
              </picture>
              <div className="info">
                <h4>{user.username}</h4>
                <h6>{user.name}</h6>
              </div>
              <div className="icon-right">
                <span>></span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>ERROR</div>
      )}
    </section>
  );
};

export default UserList;
