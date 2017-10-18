import React, { Component } from 'react'
import {
BrowserRouter as Router,
Switch,
NavLink,
Route } from 'react-router-dom'

/*import Robinson from './Robinson'
import OrangeGirl from './OrangeGirl'
import Lviv4 from './Lviv4'
import Lviv2 from './Lviv2'
import Power from './Power'
import Kaku from './Kaku'*/

import './catalog.css'

import robinson1 from './img/robinson1.jpg'
import orangegirl from './img/orangegirl.jpg'
import lviv4 from './img/lviv4.jpg'
import lviv2 from './img/lviv2.jpg'
import power from './img/power.jpg'
import kaku from './img/kaku.jpg'

class Bestsellers extends Component {
  render () {
    return(
      
      <div className="conteiner">

      <div className="tittle">
        <h1>Бестселери</h1>
      </div>

        <div className="items">
          
          <div className="view">
            <div className="view view-first">
              <img src={robinson1} alt={"Кен Робінсон"} />
              <div className="mask">
                <h2>Школа майбутнього</h2>
                <p>Кен Робінсон, Лу Ароніка</p>
                <NavLink className="info" to="/bestsellers/robinson">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={orangegirl} alt={"OrangeGirl"} />
              <div className="mask">
                <h2>Помаранчова дівчинка</h2>
                <p>Юстейн Ґордер</p>
                <NavLink className="info" to="/bestsellers/pomarancheva-divchynka">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={lviv4} alt={"Lviv4"} />
              <div className="mask">
                <h2>Енциклопедія Львова</h2>
                <p>Том 4</p>
                <NavLink className="info" to="/bestsellers/encyklopediya-lvova-t-4">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="items">

          <div className="view">
            <div className="view view-first">
              <img src={lviv2} alt={"Lviv2"} />
              <div className="mask">
                <h2>Енциклопедія Львова</h2>
                <p>Том 2</p>
                <NavLink className="info" to="/bestsellers/encyklopediya-lvova-t-2">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="view">
            <div className="view view-first">
              <img src={power} alt={"Power"} />
              <div className="mask">
                <h2>На Гребені Полум'я</h2>
                <p>Саманта Пауер</p>
                <NavLink className="info" to="/bestsellers/grebeni-polumya">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={kaku} alt={"Мфчіо Кайку"} />
              <div className="mask">
              <h2>Фізика Майбутнього</h2>
              <p>Мічіо Кайку</p>
              <NavLink className="info" to="/bestsellers/fizyka-maybutnogo">
                Детальніше
              </NavLink>
              </div>
            </div>
          </div>
          
        </div>
        

       
        
        
       
       
        
       

      </div>

    )
  }
}
export default Bestsellers