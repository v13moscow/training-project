import React, {useState} from 'react';
import api from '../api'
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const handleDelete = (userId) =>{
    setUsers(users.filter(user => user._id !== userId))
  }
  const renderPrase = (namber) =>{
    const lastOne = Number(namber.toString().slice(-1))
    console.log(lastOne);
    if(namber > 4 && namber < 14)return "человек тусанет "
    if([2, 3, 4].indexOf(lastOne) >= 0)return "человека тусанет"
    if(lastOne === 1) return "человек тусанет"
  }
  return ( 
    <>

  <h2><span className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
  > 
  {users.length > 0 ? `${users.length} ${renderPrase(users.length)} с тобой сегодня`
  : 'Никто не тусанет с тобой сегодня'}
  </span></h2>
    {users.length > 0 &&
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился,раз</th>
      <th scope="col">Оценка</th>
      <th scope="col">Удалить</th>
    </tr>
  </thead>
  <tbody>
      {users.map(user => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td >{user.qualities.map(item =>
            <span key={item._id}
            className={"badge bg-" + item.color}
            >{item.name}</span>)}</td>
          <td >{user.profession.name}</td>
          <td >{user.completedMeetings}</td>
          <td >{user.rate}</td>
          <td ><button
          className="btn btn-danger"
          onClick={() => handleDelete(user._id)}
          >Delete</button></td>
        </tr>
      ))}
  </tbody>
</table>
}
</>
  );
}

export default Users;