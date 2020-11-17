import { useEffect, useState } from 'react';
import api from '../services.js';
import '../styles/pages/icons.css';

const Icons = () => {

  const [iconsId, setIconsId] = useState([]);
  
  const api_call = async () => {
    const versionRequest = api.get(`api/versions.json`);
    const versionResponse = await versionRequest;

    const request = api.get(`cdn/${versionResponse.data[0]}/data/en_US/profileicon.json`);
    const response = await request;
    setIconsId(Object.keys(response.data.data));
    console.log(Object.keys(response.data.data))
  }

  useEffect(() => {
    api_call();
  }, []);

  return (
    <div className="icons-page">
      <h1>Ícones</h1>
      <div className="icons-list">
        {iconsId.map((icon) => {
            return (
                <img key={icon} className="icon-img" src={`https://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/${icon}.png`} alt={icon}/>              
                );
        })}
      </div>
    </div>
  );
}

export default Icons;