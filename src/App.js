import { useEffect, useState } from 'react';
import './App.css';

import Team from './components/Team/Team'
import teamInfo from './fake data/MOCK_DATA.json'
function App() {
 const [team , setTeam] =useState([])
 useEffect(() =>{
   setTeam(teamInfo);
   console.log(team[0]);
 } , [])
  return (
    <div className="App">
      <header>
        <h1>Totall programmer:{team.length}</h1>
          <ul>
            {
              team.map(teamMan=><Team team={teamMan} key={teamMan.name} > {teamMan.name} </Team> )
            }
          </ul>
      </header>
    </div>
  );
}

export default App;
