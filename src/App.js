import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'



import Home from "./Home"
import Bestsellers from "./Catalog/Bestsellers"
import newBooks from "./Catalog/newBooks"
import Encyklopedia from "./Catalog/Encyklopedia"
/*import Robinson from "./Catalog/Robinson"
import OrangeGirl from "./Catalog/OrangeGirl"
import Lviv2 from "./Catalog/Lviv2"
import Lviv4 from "./Catalog/Lviv4"
import Power from "./Catalog/Power"*/

import Buy from "./Buy"
import About from "./About"
import Community from "./Community"
import Basket from "./Basket"


import litakcent from "./Catalog/img/litakcent.png"
import chytomo from "./Catalog/img/chytomo.png"

import "./App.css"


class App extends Component {
  render () {
    return(
      
        <div className="App">
        <div className="TopBar">
        <nav>
          <ul className="topmenu">
            <li>
              <NavLink className="Nav-Link" to="/">
                Головна
              </NavLink>
            </li>
            <li>
              <div className="Nav-Link submenu-link">
                Каталог
              </div>
              <ul className="submenu">
                <li>
                  <NavLink className="Nav-Link" to="/bestsellers" >
                    Бестселери
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav-Link sub-link" to="/newBooks">
                    Новинки
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav-Link sub-link" to="/encyklopedia">
                    Енциклопедія Львова
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav-Link sub-link" to="/rozvytok">
                    Глобальний розвиток
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav-Link sub-link" to="/naukovo-populyarna-literatura">
                    Науково-популярна література
                  </NavLink>
                </li>
                <li>
                  <NavLink className="Nav-Link sub-link" to="/osvita">
                    Освіта
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink className="Nav-Link sub-link" to="/buy">
                Як купити
              </NavLink>
            </li>
            <li>
              <NavLink className="Nav-Link" to="/about">
                про видавництво
              </NavLink>
            </li>
            <li>
              <NavLink className="Nav-Link" to="/community">
                спільнота літопису
              </NavLink>
            </li>
            <li>
              <NavLink className="Nav-Link" to="/basket">
                Кошик
              </NavLink>
            </li>
            <li>
              <div className="Nav-Link wrap" >
                <form action="" autoComplete="on">
                  <input className="search" name="search" type="text" placeholder="Введіть ключові слова" />
                  <input className="search_submit" value="Researcher" type="submit" />
                </form>
              </div>
            </li>
          </ul>
          <hr/>
          </nav>
          </div>
          
          <div>
          <Route exact path="/" component={Home}/>
            <Route exact path="/bestsellers" component={Bestsellers}/>
            <Route path="/newBooks" component={newBooks}/>
            <Route path="/encyklopedia" component={Encyklopedia}/>
          <Route path="/buy" component={Buy}/>
          <Route path="/about" component={About}/>
          <Route path="/community" component={Community}/>
          <Route path="/basket" component={Basket}/>
         </div>

          <div className="footer">
            <div className="footerBlock">
              <div className="footerBlock-contacts">
              <div>
              <h3>Контакти</h3>
                <p>Львів, вул. Костюшка 2, 79007</p>
                <p>+38 (032) 255-34-31</p>
                <p>+38 (068) 134-99-80</p>
                <p>ЄДРПОУ 23963698, п/р 26000053703100</p>
                <p>ЗГРУ КБ "ПРИВАТБАНК" М.ЛЬВІВ, МФО 325321</p>
                <p>kms@litech.net (директор видавництва)</p>
                <p>litopys@ukr.net (відділ реклами та збуту)</p>
                </div>
              </div>
              <div className="footerBlock-subscribtion">
                
                <form className="subs-form" action="/subscribe" method="post">
                <h3>Підписка</h3>
                  <input type="text" placeholder="Enter your email address" />
                  <input type="submit" />
                </form>
              </div>
              <div className="footerBlock-partners">
                <div className="footerBlock-partners-img">
                  <img src={chytomo} alt={"Читомо"} />
                  <img src={litakcent} alt={"ЛітАкцент"} />
                </div>
              </div>
            </div>
            <div className="footerBottom-tittle">
            <p>© 1999–2016 Видавництво «Літопис»</p>
            </div>
          </div>
        
        </div>
       
    )
  }
}
export default App
