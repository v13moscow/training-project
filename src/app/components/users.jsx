import React, { useState } from "react"
import Pagination from "./pagination"
import User from "./user"
import { paginate } from "../utils/paginate"
import PropTypes from "prop-types"

const Users = ({ users, ...rest }) => {
  const count = users.length
  const pageSize = 4
  const [carrentPage, setCarrentPage] = useState(1)
  const handlePageChange = (pageIndex) => {
    setCarrentPage(pageIndex)
  }

  const userGroup = paginate(users, carrentPage, pageSize)

  return (
    <>
      {count > 0 && (
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
            {userGroup.map((user) => (
              <User {...user} {...rest} key={user._id} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        carrentPage={carrentPage}
      />
    </>
  )
}
Users.propTypes = {
  users: PropTypes.array.isRequired,
}

export default Users
