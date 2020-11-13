import { useEffect, useState } from 'react';
import api from '../services.js';
import '../styles/pages/champions.css';

const Champions = () => {
    const [championsList, setChampionsList] = useState([]);
    const [championsId, setChampionsId] = useState([]);
  
    const api_call = async () => {
      const request = api.get(`cdn/10.23.1/data/en_US/champion.json`);
      const response = await request;
      setChampionsList(response.data.data);
      setChampionsId(Object.keys(response.data.data));
    }
  
    useEffect(() => {
      api_call();
    }, []);
  
    return (
      <div className="champions-page">
        <h1>Campeões</h1>
        <div className="champions-list">
          {championsId.map((champion) => {
              return (
                <div className="champion-container" key={champion}>
                  <img className="champion-img" src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`} alt={champion}/>
                  <span className="champion-name" >{championsList[champion].name}</span>                  
                </div>
              );
            })}
        </div>
      </div>
    );
  }

export default Champions;