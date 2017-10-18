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

import gato from './img/gato.jpg'
import gato1 from './img/gato1.jpg'
import vchytel_20 from './img/vchytel_20.jpg'
import vynnycka from './img/vynnycka.jpg'
import robinsonTalant from './img/robinsonTalant.jpg'
import teylor from './img/teylor.jpg'


const Education = () => ( 
  <div className="conteiner">
      <div className="tittle">
        <h1>Освіта</h1>
      </div>

        <div className="items">
          
          <div className="view">
            <div className="view view-first">
              <img src={gato} alt={"Джон Тейлор Ґатто - Зброя масового навчання"} />
              <div className="mask">
              <h2>Зброя масового навчання</h2>
              <p>Джон Тейлор Ґатто</p>
              <NavLink className="info" to="/bestsellers/fizyka-maybutnogo">
                Детальніше
              </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={gato1} alt={"Джон Тейлор Ґатто - Прихована програма обов'язкової шкільної освіти. Отуплення"} />
              <div className="mask">
                <h2>Прихована програма обов'язкової шкільної освіти. Отуплення</h2>
                <p>Джон Тейлор Ґатто</p>
                <NavLink className="info" to="/bestsellers/pryhovana-programa-obovyazkovoyi-shkilnoyi-osvity-otuplennya">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={vchytel_20} alt={"Джон Тейлор Ґатто - Вчитель 2.0"} />
              <div className="mask">
                <h2>Вчитель 2.0</h2>
                <p>Джон Тейлор Ґатто</p>
                <NavLink className="info" to="/bestsellers/vchytel-20">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="items">

          <div className="view">
            <div className="view view-first">
              <img src={vynnycka} alt={"Оксана Винницька - Лицем до дитини"} />
              <div className="mask">
                <h2>Лицем до дитини</h2>
                <p>Оксана Винницька</p>
                <NavLink className="info" to="/bestsellers/lycem-do-dytyny">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="view">
            <div className="view view-first">
              <img src={robinsonTalant} alt={"Кен Робінсон - Освіта проти таланту. Сила творчості"} />
              <div className="mask">
                <h2>Освіта проти таланту. Сила творчості</h2>
                <p>Кен Робінсон</p>
                <NavLink className="info" to="/bestsellers/osvita-proty-talantu-syla-tvorchosti">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={teylor} alt={"Джон Тейлор Ґатто - Прихована історія американської освіти"} />
              <div className="mask">
                <h2>Прихована історія американської освіти</h2>
                <p>Джон Тейлор Ґатто</p>
                <NavLink className="info" to="/bestsellers/pryhovana-istoriya-amerykanskoyi-osvity">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div> 
      </div>
)

export default Education
