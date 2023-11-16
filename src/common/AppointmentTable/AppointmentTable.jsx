import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deletemyappointments, myappointments } from "../../services/apiCalls";
import { userData } from "../../pages/userSlice";

export const Print = ({ appo, setAppointments }) => {
  const headers = [
    "User Name",
    "Tattoo Artist Name",
    "Work",
    "Name",
    "Description",
    "Price",
    "Date",
    "Status",
    "Actions",
  ];

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return new Date(dateString).toLocaleString(undefined, options);
  };

  const datosRdxUser = useSelector(userData);
  const [updatedAppointments, setUpdatedAppointments] = useState([]);

  const fetchData = async () => {
    try {
      const response = await myappointments(datosRdxUser.credentials);
      setUpdatedAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      await deletemyappointments(datosRdxUser.credentials);
      const updatedAppointments = appo.filter(
        (user) => user.id !== appointmentId
      );
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

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
        {Array.isArray(appo) &&
          appo.map((user) => (
            <tr key={user.id}>
              <td>{user.user_name}</td>
              <td>{user.tattoo_artist_name}</td>
              <td>{user.work}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
              <td>{user.price}</td>
              <td>{formatDate(user.date)}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
