import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./features/users";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const userList = useSelector((state) => state.users.value);

  return (
    <div className="">
      <h1 className="">Vite + React + Redux</h1>

      <div className="m-2 p-2 mt-5">
        <input
          placeholder="name"
          value={name}
          className="m-2 form-control"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          className="m-2 form-control"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <button
          className="btn btn-primary px-4"
          onClick={() => {
            dispatch(
              addUser({
                id: userList.length + 1,
                name: name,
                email: email,
              })
            );
          }}
        >
          Add user
        </button>
      </div>

      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div
              className="mt-5 p-4 bg-light border border-2 border-dark rounded"
              key={user.id}
            >
              <div className="row">
                <h3 className="col">{user.name}</h3>
                <h3 className="col">{user.email}</h3>
                <div className="col">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      dispatch(deleteUser({ id: user.id }));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
