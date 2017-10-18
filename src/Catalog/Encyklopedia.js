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

import lviv4 from './img/lviv4.jpg'
import lviv2 from './img/lviv2.jpg'
import lviv3 from './img/lviv3.jpg'


const Encyklopedia = () => (
   <div className="conteiner">
      <div className="tittle">
        <h1>Енциклопедія Львова</h1>
      </div>

        <div className="items">
          
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
              <img src={lviv3} alt={"Lviv3"} />
              <div className="mask">
                <h2>Енциклопедія Львова</h2>
                <p>Том 3</p>
                <NavLink className="info" to="/bestsellers/encyklopediya-lvova-t-3">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>
       
          <Switch>
          <Route exact path="/bestsellers/robinson" component={Robinson}/>
          <Route  path="/bestsellers/pomarancheva-divchynka" component={OrangeGirl}/>
          <Route  path="/bestsellers/encyklopediya-lvova-t-4" component={Lviv4}/>
          </Switch>
        
      </div>
)

export default Encyklopedia