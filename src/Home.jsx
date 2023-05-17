import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {deleteUser, likeUser} from './actions/users'

const Home = () => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch()


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Todo List</h2>
        <div className="d-flex justify-content-left my-1">
          <Link to="/create" className="btn btn-success">
            Create +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Age</th>
              <th>Like</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td><button onClick={() => dispatch(likeUser(user._id))} className="btn btn-primary btn-sm">Like {user.likeCount}</button></td>
                  <td><button onClick={() => dispatch(deleteUser(user._id))} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
