import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  // const renderPrase = (namber) => {
  //   const lastOne = Number(namber.toString().slice(-1));
  //   if (namber > 4 && namber < 14) return "человек тусанет ";
  //   if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанет";
  //   if (lastOne === 1) return "человек тусанет";
  // };
  return (
    <>
    
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User {...user} {...rest} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
