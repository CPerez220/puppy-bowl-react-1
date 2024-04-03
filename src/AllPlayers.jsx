import { useEffect, useState } from "react";
import Players from "./Players"

const COHORT_NAME = "2402-DEMOS-REACT"
const BASE_API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

const AllPlayers = () => {

  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/players`);
        const result = await response.json();
        setPlayerList(result.data.players);
        console.log(result)
        console.log(result.data.players)
        console.log(playerList)
      } catch (error) {
        alert(error);
      }
    }; fetchAllPlayers();
}, []);

  return (
    <>
    <h2>Players</h2>
    {playerList.length ? (
      playerList.map((player) => {
        return <Players key={`PLAYER_${player.id}`} player={player}/>;
      })
    ) : (
      <p>No Players Yet</p>
    )}
    </>
  )
}

export default AllPlayers;