import "./AppointmentTable.css"
import React from "react";

const Table = ({ data }) => {
  const headers = [
    "User Name",
    "Tattoo Artist Name",
    "Work",
    "Name",
    "Description",
    "Price",
    "Date",
    "Status",
  ];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.user_name}</td>
            <td>{user.tattoo_artist_name}</td>
            <td>{user.work}</td>
            <td>{user.name}</td>
            <td>{user.description}</td>
            <td>{user.price}</td>
            <td>{user.date}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
