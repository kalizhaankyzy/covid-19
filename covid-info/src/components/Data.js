import { useEffect, useState } from 'react';
import './Data.css';

export default function Data() {
    const [data, setData] = useState();
    let countryNames = require('../country-names.json');
    
    useEffect(()=>{    
      fetch(`https://corona.lmao.ninja/v3/covid-19/countries/${getCountryName()}`)
      .then((response) => response.json())
        .then((data) => setData(data));
    }, [])
  
    const getCountryName = () => {
      return countryNames[Math.floor(Math.random()* countryNames.length)];
    }
  
    return (
      <div className="Data">
        {data &&<>
          <h3 className='country-name highlight'>{data.country}</h3>
          <div className='info'>
              <table>
                  <tr>
                      <td>Население:</td>
                      <td><span className='highlight'>{data.population.toLocaleString()}</span></td>
                  </tr>
                  <tr>
                      <td>Всего заражений:</td>
                      <td><span className='highlight'>{data.cases.toLocaleString()}</span></td>
                      <td><span className='highlight'>{(data.casesPerOneMillion/10000).toFixed(1)}%</span></td>
                  </tr>
                  <tr>
                      <td>Смертельные случаи:</td>
                      <td><span className='highlight'>{data.deaths.toLocaleString()} </span></td>
                      <td><span className='highlight'>{(data.deathsPerOneMillion/10000).toFixed(1)}%</span></td>
                  </tr>
                  <tr>
                      <td>Выздоровевшие:</td>
                      <td><span className='highlight'>{data.recovered.toLocaleString()}</span> </td>
                      <td><span className='highlight'>{(data.recoveredPerOneMillion/10000).toFixed(1)}%</span> </td>
                  </tr>
                  <tr>
                      <td>Сейчас болеют:</td>
                      <td> <span className='highlight'>{data.active.toLocaleString()}</span></td>
                      <td> <span className='highlight'>{(data.activePerOneMillion/10000).toFixed(1)}%</span></td>
                  </tr>
                  <tr>
                      <td>Критические случаи:</td>
                      <td><span className='highlight'>{data.critical.toLocaleString()}</span></td>
                  </tr>
              </table>
          </div>
          </>}

          <p className='footer'>
            *по данным <a href='https://corona.lmao.ninja'>corona.lmao.ninja</a>
          </p>
        
      </div>
    );
}