import React from "react"

const Qualitie = ({ _id, name, color }) => {
  return (
    <span key={_id} className={"badge bg-" + color}>
      {name}
    </span>
  )
}

export default Qualitie
