import { useState } from "react";

const COHORT_NAME = "2402-DEMOS-REACT"
const BASE_API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

const AddPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");


  const postPlayer = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/players`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: name,
          breed: breed,
        })
      });

      const result = await response.json();
      console.log(result);
      alert("ADD COMPLETED")
      location.reload();
    } catch (error) {
      alert(`Error from AddPlayerForm: ${error}`);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postPlayer();
  }

  return (
    <>
    <h2>Add Player:</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Puppy Name:
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)}></input>
      </label>
      <label>
        Puppy Breed:
        <input type="text" id="raza" value={breed} onChange={(event) => setBreed(event.target.value)}></input>
      </label>
      <input type="submit" value="Add Puppy"/>
    </form>
    </>
  )
}

export default AddPlayerForm;