import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deletemyappointments,
  myappointments,
  updateAppointment,
  bringTattooArtists,
  bringTattoo,
} from "../../services/apiCalls";
import { userData } from "../../pages/userSlice";
import { DropdownInput } from "../DropdownInput/DropdownInput";

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
    };

    return new Date(dateString).toLocaleString(undefined, options);
  };

  const datosRdxUser = useSelector(userData);
  const [updatedAppointments, setUpdatedAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedValues, setEditedValues] = useState([]);
  const [tattooArtists, setTattooArtists] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [tattoos, setTattoos] = useState([]);
  const [tattooDropdownOptions, setTattooDropdownOptions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await myappointments(datosRdxUser.credentials);
      setUpdatedAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const fetchTattoos = async () => {
    try {
      const tattooResponse = await bringTattoo(datosRdxUser.credentials);
      if (Array.isArray(tattooResponse.data.data)) {
        const tattooData = tattooResponse.data.data;

        setTattoos(tattooData);

        const tattooOptions = tattooData.map((tattoo) => ({
          value: tattoo.name,
          label: tattoo.name,
        }));

        setTattooDropdownOptions(tattooOptions);
      } else {
        console.error(
          "Error: La respuesta de la API no contiene un array de tatuajes."
        );
      }
    } catch (error) {
      console.error("Error fetching tattoos:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchTattoos();
  }, []);

  useEffect(() => {
    const fetchTattooArtists = async () => {
      try {
        const tattooArtistsResponse = await bringTattooArtists(
          datosRdxUser.credentials
        );

        if (Array.isArray(tattooArtistsResponse.data.data)) {
          const tattooArtistsData = tattooArtistsResponse.data.data;

          setTattooArtists(tattooArtistsData);

          const options = tattooArtistsData.map((artist) => ({
            value: artist.tattoo_artist,
            label: artist.tattoo_artist,
          }));

          setDropdownOptions(options);
        } else {
          console.error(
            "Error: La respuesta de la API no contiene un array de artistas tatuadores."
          );
        }
      } catch (error) {
        console.error("Error fetching tattoo artists:", error);
      }
    };

    fetchTattooArtists();
  }, [datosRdxUser.credentials]);

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

  const handleEdit = (appointmentId) => {
    setEditingId(appointmentId);
    setEditedValues({});
  };

  const handleSaveEdit = async (appointmentId) => {
    try {
      const selectedArtist = tattooArtists.find(
        (artist) => artist.tattoo_artist === editedValues.tattoo_artist_name
      );
      const artistId = selectedArtist ? selectedArtist.id : null;
  
      const selectedTattoo = tattoos.find(
        (tattoo) => tattoo.name === editedValues.name
      );
      const tattooId = selectedTattoo ? selectedTattoo.id : null;
  
      const editedValuesWithId = {
        user_name: editedValues.user_name,
        work: editedValues.work,
        name: editedValues.name,
        description: editedValues.description,
        price: editedValues.price,
        date: editedValues.date,
        status: editedValues.status,
      };
  
      // Incluir tattoo_id solo si ha sido modificado
      if (tattooId !== null) {
        editedValuesWithId.tattoo_id = tattooId;
      }
  
      // Incluir artistId solo si ha sido modificado
      if (artistId !== null) {
        editedValuesWithId.tattoo_artist_id = artistId;
      }
  
      await updateAppointment(
        appointmentId,
        editedValuesWithId,
        datosRdxUser.credentials
      );
  
      const updatedAppointments = appo.map((user) =>
        user.id === appointmentId ? { ...user, ...editedValues } : user
      );
  
      setAppointments(updatedAppointments);
      setEditingId(null);
      setEditedValues({});
    } catch (error) {
      console.error("Error al guardar la edición:", error);
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
              <td>
                {user.id === editingId ? (
                  <input
                    type="text"
                    value={editedValues.user_name || user.user_name}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        user_name: e.target.value,
                      })
                    }
                    disabled  // Campo de solo lectura en modo de edición
                  />
                ) : (
                  user.user_name
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <DropdownInput
                    value={
                      editedValues.tattoo_artist_name || user.tattoo_artist_name
                    }
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        tattoo_artist_name: e.target.value,
                      })
                    }
                    options={dropdownOptions.map((option) => option.value)}
                  />
                ) : (
                  user.tattoo_artist_name
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <input
                    type="text"
                    value={editedValues.work || user.work}
                    onChange={(e) =>
                      setEditedValues({ ...editedValues, work: e.target.value })
                    }
                    disabled  // Campo de solo lectura en modo de edición
                  />
                ) : (
                  user.work
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <DropdownInput
                    value={editedValues.name || user.name}
                    onChange={(e) =>
                      setEditedValues({ ...editedValues, name: e.target.value })
                    }
                    options={tattooDropdownOptions.map(
                      (option) => option.value
                    )}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <input
                    type="text"
                    value={editedValues.description || user.description}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        description: e.target.value,
                      })
                    }
                    disabled
                  />
                ) : (
                  user.description
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <input
                    type="text"
                    value={editedValues.price || user.price}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        price: e.target.value,
                      })
                    }
                    disabled
                  />
                ) : (
                  user.price
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <input
                    type="text"
                    value={editedValues.date || user.date}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        date: e.target.value,
                      })
                    }
                  />
                ) : (
                  formatDate(user.date)
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <input
                    type="text"
                    value={editedValues.status || user.status}
                    onChange={(e) =>
                      setEditedValues({
                        ...editedValues,
                        status: e.target.value,
                      })
                    }
                    disabled
                  />
                ) : (
                  user.status
                )}
              </td>
              <td>
                {user.id === editingId ? (
                  <>
                    <button onClick={() => handleSaveEdit(user.id)}>
                      Guardar
                    </button>
                    <button onClick={() => handleDelete(user.id)}>
                      Eliminar
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(user.id)}>Editar</button>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};