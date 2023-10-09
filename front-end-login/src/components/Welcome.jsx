import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./styles.module.scss";

const Welcome = () => {
  const [name, setName] = useState();

  const navigate = useNavigate();

  const {id} = useParams();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:4000/user/${id}`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);

  return (
    <div className={styles.welcome}>
      <h3>{name ? `¡Felicitaciones ${name}!` : "¿Que estas haciendo? 🕵️‍♂️"}</h3>
      <h2>
        {name ? "Te pudiste logear correctamente🎉" : "Te estamos viendo..."}
      </h2>
    </div>
  );
};

export default Welcome;