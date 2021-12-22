import React, { useContext, useRef, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useDataFetching } from "../../customHooks/dataFetching";

const UserDetail = () => {
  const { selectedUser, setSelectedUser } = useContext(UserContext);

  const pictureRef = useRef();
  const bgRef = useRef();
  const infoRef = useRef();

  useEffect(() => {
    if (!selectedUser) return;
    console.log(selectedUser);

    const picturePos = selectedUser.pictureRef.getBoundingClientRect();
    console.log(picturePos, pictureRef.current);
    pictureRef.current.style.top = `${picturePos.top}px`;
    pictureRef.current.style.left = `${picturePos.left}px`;
    pictureRef.current.classList.add("animate");
    infoRef.current.classList.add("animate");

    setTimeout(() => {
      bgRef.current.style.opacity = "1";
      pictureRef.current.style.top = `140px`;
      pictureRef.current.style.left = `40px`;
      pictureRef.current.style.height = `400px`;
      pictureRef.current.style.width = `400px`;
    }, 10);

    return () => {};
  }, [selectedUser]);

  return (
    selectedUser && (
      <section className="user-detail">
        <div className="bg" ref={bgRef}></div>
        <picture ref={pictureRef}>
          <img
            src={
              selectedUser &&
              `https://picsum.photos/id/${selectedUser.user.id}/400/400`
            }
            height="100"
            width="100"
            alt={`${selectedUser.user.name}-foto`}
          />
        </picture>
        <div className="info" ref={infoRef}>
          <div>
            <h1>{selectedUser.user.username}</h1>
            <h6>{selectedUser.user.name}</h6>
          </div>
          <div className="content">
            <Posts id={selectedUser.user.id} />
          </div>
        </div>
        <div className="icon-close" onClick={() => setSelectedUser(null)}>
          <span>X</span>
        </div>
      </section>
    )
  );
};

const Posts = ({ id }) => {
  const [userPosts, request] = useDataFetching(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      userId: id,
    }
  );

  return userPosts.dataState === "PENDING" ? (
    "LOADING POSTS..."
  ) : userPosts.dataState === "FULFILLED" ? (
    <div style={{ overflow: "auto", maxHeight: "100%" }}>
      <p>posts:</p>
      <br />
      {userPosts.data.map((item, idx) => (
        <article className="container-s" key={`user-${id}-${idx}`}>
          <h6>{item.title}</h6>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  ) : (
    "ERROR"
  );
};

export default UserDetail;
