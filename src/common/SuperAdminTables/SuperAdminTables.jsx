import React from "react";

export const UserTable = ({ users }) => {
  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const AppointmentTable = ({ appointments }) => {
  return (
    <div>
      <h2>Appointment Table</h2>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Tattoo Artist</th>
            <th>Tattoo</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.userName}</td>
              <td>{appointment.tattooArtist}</td>
              <td>{appointment.tattoo}</td>
              <td>{appointment.date}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
