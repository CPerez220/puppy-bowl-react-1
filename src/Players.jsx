import { useRouteLoaderData } from "react-router-dom";

const COHORT_NAME = "2402-DEMOS-REACT"
const BASE_API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

const Players = ({ player }) => {

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`${BASE_API_URL}/players/${id}`, {
        method:"DELETE"
      });
      await fetchAllPlayers();
    } catch(error) {
      alert("ELIMINACION COMPLETADA")
      location.reload();
    }
  }
  return (
    <>
    <div class="card">
      <div class="image-box">
        <img src={player.imageUrl} alt="Player Image" />
      <div class="overlay">
        <h2>{player.name}</h2>
        <p>{player.breed}</p>
        <p><button onClick={() => deleteHandler(player.id)}>ELIMINAR</button></p>
      </div>
      </div>
    </div>

    </>
  )
}

export default Players;