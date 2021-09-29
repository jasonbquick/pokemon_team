import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Dashboard(){
  const [list, setList] = useState([])
  const [pokemon, setPokemon] = useState([]);
  const [suggest, setSuggest] = useState({
    value: '',
    suggestions: []
  })


  useEffect(() => {
    loadPokemon()
  }, [])


  async function loadPokemon(){
    const rez = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=1118')
    const data = await rez.json();
    setList(data.results)
    // setPokemon(data.slice())
    // console.log(data)
    // console.log(data.results)
  }

  

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div style={{ width: 400 }}>
  //         <ReactSearchAutocomplete
  //           items={list}
  //           onSearch={handleOnSearch}
  //           onHover={handleOnHover}
  //           onSelect={handleOnSelect}
  //           onFocus={handleOnFocus}
  //           autoFocus
  //           formatResult={formatResult}
  //         />
  //       </div>
  //     </header>
  //   </div>
  // )
  

  return (
    <div>
    <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Pokemon Weakness Calculator</h1>
        <p className="lead">
          Input your Pokemon team to identify their weaknesses
        </p>
        <hr className="my-4" />
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default Dashboard