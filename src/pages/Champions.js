import { useEffect, useState } from 'react';
import api from '../services.js';
import '../styles/pages/champions.css';

const Champions = () => {
  const [championsList, setChampionsList] = useState([]);
  const [championsId, setChampionsId] = useState([]);
  const [championsName, setChampionsName] = useState([]);
  const [orderedChampions, setOrderedChampions] = useState([]);

  const api_call = async () => {
    const request = api.get(`cdn/10.23.1/data/en_US/champion.json`);
    const response = await request;
    setChampionsList(response.data.data);
    setChampionsId(Object.keys(response.data.data));
  }

  useEffect(() => {
    api_call();
  }, []);

  useEffect(() => {
    if(championsId.length > 0) {
      setChampionsName(
        championsId.map((champion) => {
          return ({
            "name": championsList[champion].name,
            "id" : championsList[champion].id});
        })
      );
    }

  }, [championsId, championsList]);

  useEffect(() => {
    setOrderedChampions(championsName.sort(
      function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
    }));
  }, [championsName]);

  return (
    <div className="champions-page">
      <h1>Campeões</h1>
      <div className="champions-list">
        {orderedChampions.map((champion) => {
          return (
            <div className="champion-container" key={champion.id}>
              <img className="champion-img" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={champion.name}/>
              <span className="champion-name"> {champion.name}</span>                  
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Champions;