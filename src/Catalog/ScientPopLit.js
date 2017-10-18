import React, { Component } from 'react'
import {
BrowserRouter as Router,
Switch,
NavLink,
Route } from 'react-router-dom'


import './catalog.css'

import kakuRozum from './img/kakuRozum.jpg'
import robinson1 from './img/robinson1.jpg'
import fly from './img/fly.jpg'
import jump from './img/jump.jpg'
import light from './img/light.jpg'
import water from './img/water.jpg'
import kaku from './img/kaku.jpg'
import google from './img/google.jpg'


const ScientPopLit = () => ( 
  <div className="conteiner">
      <div className="tittle">
        <h1>Науково-популярна література</h1>
      </div>

        <div className="items">
          
          <div className="view">
            <div className="view view-first">
              <img src={kakuRozum} alt={"Мічіо Кайку - Майбутнє розуму"} />
              <div className="mask">
                <h2>Майбутнє розуму</h2>
                <p>Мічіо Кайку</p>
                <NavLink className="info" to="/bestsellers/maybutnye-rozumu">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={robinson1} alt={"Кен Робінсон, Лу Ароніка - Школа майбутнього"} />
              <div className="mask">
                <h2>Школа майбутнього</h2>
                <p>Кен Робінсон, Лу Ароніка</p>
                <NavLink className="info" to="/bestsellers/shkola-maybutnogo">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={fly} alt={"Саллі Г'юїтт - Чому я не можу літати, як супергерой"} />
              <div className="mask">
                <h2>Чому я не можу літати, як супергерой</h2>
                <p>Саллі Г'юїтт</p>
                <NavLink className="info" to="/chomu-ya-ne-mozhu-litaty-yak-supergeroy">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="items">

          <div className="view">
            <div className="view view-first">
              <img src={jump} alt={"Саллі Г'юїтт - Чому я не можу застрибнути на місяць"} />
              <div className="mask">
                <h2>Чому я не можу застрибнути на місяць</h2>
                <p>Саллі Г'юїтт</p>
                <NavLink className="info" to="/chomu-ya-ne-mozhu-zastrybnuty-misyac">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="view">
            <div className="view view-first">
              <img src={light} alt={"Саллі Г'юїтт - Чому я не можу з'їхати веселкою додолу"} />
              <div className="mask">
                <h2>Чому я не можу з'їхати веселкою додолу</h2>
                <p>Саллі Г'юїтт</p>
                <NavLink className="info" to="/bestsellers/chomu-ya-ne-mozhu-zyihaty-veselkoyu-dodolu">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={water} alt={"Саллі Г'юїтт - Чому я не можу жити під водою, як риба"} />
              <div className="mask">
              <h2>Чому я не можу жити під водою, як риба</h2>
              <p>Саллі Г'юїтт</p>
              <NavLink className="info" to="/bestsellers/chomu-ya-ne-mozhu-zhyty-pid-vodoyu-yak-ryba">
                Детальніше
              </NavLink>
              </div>
            </div>
          </div>

        </div> 

        <div className="items">
          
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

          <div className="view">
            <div className="view view-first">
              <img src={google} alt={"Ерік Шмідт, Джаред Коен - Новий цифровий світ"} />
              <div className="mask">
                <h2>Новий цифровий світ</h2>
                <p>Ерік Шмідт, Джаред Коен</p>
                <NavLink className="info" to="/bestsellers/novyy-cyfrovyy-svit">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>  
  
)

export default ScientPopLit
