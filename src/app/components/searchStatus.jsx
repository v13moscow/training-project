import React from 'react';


const SearchStatus = ({ length }) => {
  const renderPrase = (namber) => {
    const lastOne = Number(namber.toString().slice(-1));
    if (namber > 4 && namber < 14) return "человек тусанет ";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанет";
    if (lastOne === 1) return "человек тусанет";
  };
  return (
    <h2>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0
          ? `${length} ${renderPrase(length)} с тобой сегодня`
          : "Никто не тусанет с тобой сегодня"}
      </span>
    </h2>
  );
};

export default SearchStatus;
