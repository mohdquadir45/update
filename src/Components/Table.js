import React, { useState } from "react";

const Table = ({ list, setList }) => {
  const handleDelete = (data) => {
    const updatedList = list.filter((item) => item !== data);
    setList(updatedList);
  };
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Account</th>
          <th>Credit</th>
          <th>Debit</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {list.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.account}</td>
              <td>{data.credit}</td>
              <td>{data.debit}</td>
              <td>{data.total}</td>
              <td>
                <button onClick={() => handleDelete(data)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
