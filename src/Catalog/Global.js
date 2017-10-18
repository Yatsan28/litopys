import React, { Component } from 'react'
import {
BrowserRouter as Router,
Switch,
NavLink,
Route } from 'react-router-dom'

import Robinson from './Robinson'
import OrangeGirl from './OrangeGirl'
import Lviv4 from './Lviv4'
import Lviv2 from './Lviv2'
import Power from './Power'
import Kaku from './Kaku'

import './catalog.css'

import global_governance from './img/global_governance.jpg'
import brzezinski from './img/brzezinski.jpg'
import kowal from './img/kowal.jpg'
import rotfeld from './img/rotfeld.jpg'
import power from './img/power.jpg'
import living_together from './img/living_together.jpg'
import global_2025 from './img/global_2025.jpg'


const Global = () => ( 
  <div className="conteiner">
      <div className="tittle">
        <h1>Глобальний розвиток</h1>
      </div>

        <div className="items">
          
          <div className="view">
            <div className="view view-first">
              <img src={global_governance} alt={"Доповідь Національної розвідувальної ради США та Інституту ЄС із досліджень безпеки - Глобальне управління - 2025"} />
              <div className="mask">
                <h2>Глобальне управління - 2025</h2>
                <p>Доповідь Національної розвідувальної ради США та Інституту ЄС із досліджень безпеки</p>
                <NavLink className="info" to="/bestsellers/globalne-upravlinnya-2025">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={brzezinski} alt={"Збіґнєв Бжезінський - Стратегічне бачення"} />
              <div className="mask">
                <h2>Стратегічне бачення</h2>
                <p>Збіґнєв Бжезінський</p>
                <NavLink className="info" to="/bestsellers/strategichne-bachennya">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={kowal} alt={"Павел Коваль - Між Майданом і Смоленськом"} />
              <div className="mask">
                <h2>Між Майданом і Смоленськом</h2>
                <p>Павел Коваль</p>
                <NavLink className="info" to="/bestsellers/mizh-maydanom-i-smolenskom">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="items">

         <div className="view">
            <div className="view view-first">
              <img src={rotfeld} alt={"Адам Даніель Ротфельд - У тіні"} />
              <div className="mask">
                <h2>У тіні</h2>
                <p>Адам Даніель Ротфельд</p>
                <NavLink className="info" to="/bestsellers/u-tini">
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
              <img src={living_together} alt={"Доповідь Групи видатних осіб Ради Європи - Жити разом: поєднання різноманіття і свободи в Європі ХХІ століття"} />
              <div className="mask">
              <h2>Жити разом: поєднання різноманіття і свободи в Європі ХХІ століття</h2>
              <p>Доповідь Групи видатних осіб Ради Європи</p>
              <NavLink className="info" to="/bestsellers/fizyka-maybutnogo">
                Детальніше
              </NavLink>
              </div>
            </div>
          </div>
        </div>
          <div className="items">
         <div className="view">
            <div className="view view-first">
              <img src={global_2025} alt={"Доповідь Національної розвідувальної ради США - Глобальні зміни світу - 2025"} />
              <div className="mask">
                <h2>Глобальні зміни світу - 2025</h2>
                <p>Доповідь Національної розвідувальної ради США</p>
                <NavLink className="info" to="/bestsellers/globalni-zminy-svitu-2025">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>  
        </div> 
      
        
      </div>
)

export default Global


