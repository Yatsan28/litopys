import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import Home from "./Home"
import Bestsellers from "./Catalog/Bestsellers"
import History from "./Catalog/History"
import newBooks from "./Catalog/newBooks"
import Encyklopedia from "./Catalog/Encyklopedia"
import Philosophy from "./Catalog/Philosophy"
import UkrClassic from "./Catalog/UkrClassic"
import Theater from "./Catalog/Theater"
import UkrLit from "./Catalog/UkrLit"
import PolishLit from "./Catalog/PolishLit"
import Global from "./Catalog/Global"
import LiteraryStudies from "./Catalog/LiteraryStudies"
import GerAustrLiterature from "./Catalog/GerAustrLiterature"
import ScientPopLit from "./Catalog/ScientPopLit"
import Memoirs from "./Catalog/Memoirs"
import Scandinavian from "./Catalog/Scandinavian"
import Education from "./Catalog/Education"
import Culturology from "./Catalog/Culturology"
import ItalySerbCroatLiterature from "./Catalog/ItalySerbCroatLiterature"
import Robinson from "./Catalog/Robinson"
import OrangeGirl from "./Catalog/OrangeGirl"
import Lviv2 from "./Catalog/Lviv2"
import Lviv4 from "./Catalog/Lviv4"
import Power from "./Catalog/Power"
import Kaku from "./Catalog/Kaku"

import SignInUp from "./SignInUp.js"
import Buy from "./Buy"
import About from "./About"
import Community from "./Community"
import Basket from "./Basket"
import Footer from "./Footer"

import "./App.css"
import "./footer.css"


class App extends Component {
  render () {
    return(
      <div className="App">
        <div className="TopBar">
          <nav>

            <SignInUp />
            
            <ul className="topmenu">
              <li>
                <div className="Home">
                  <NavLink className="Nav-Link" to="/">
                    головна
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="catalog">
                  <div className="Nav-Link submenu-link">
                    Каталог
                  </div>
                </div>
                <table className="submenu-table">
                  <tr>
                    <th colSpan={3} className="table-tittle"> 
                      Книги за жанрами<hr />
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <NavLink className="sub-link" to="/bestsellers" >
                        Бестселер
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/istoriya">
                        Історія
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/filosofiya-ta-pravo">
                        Філософія та право
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink className="sub-link" to="/novinki">
                        Новинки
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/ukrayinska-klasika">
                        Українська класика
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/mystetstvo-teatru">
                        Мистецтво театру
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink className="sub-link" to="/encyklopedia">
                        Енциклопедія Львова
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/ukr-literatura">
                        Сучасна українська література
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/polska-literatura">
                        Польська література
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink className="sub-link" to="/hlobalniy-rozvitok">
                        Глобальний розвиток
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/literaturoznavstvo">
                        Літературознавство
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/nimecka-avstriyska-literatura">
                        Німецька та австрійська література
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>
                     <NavLink className="sub-link" to="/naukovo-populyarna-literatura">
                      Науково-популярна література
                    </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/spogady-narodoznavstvo">
                        Спогади, Народознавство
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/skandinavska-literatura">
                        Скандинавська література
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <NavLink className="sub-link" to="/osvita">
                        Освіта
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/kulturologiya">
                        Культурологія
                      </NavLink>
                    </td>
                    <td>
                      <NavLink className="sub-link" to="/italiyska-horvatska-serbska-literatura">
                        Італійська, хорватська, сербська література
                      </NavLink>
                    </td>
                  </tr>
                </table>
              </li>
              <li>
                <div className="howTobuy">
                  <NavLink className="Nav-Link" to="/buy">
                    Як купити
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="about">
                  <NavLink className="Nav-Link" to="/about">
                    про видавництво
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="community">
                  <NavLink className="Nav-Link" to="/community">
                    спільнота літопису
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="basket">
                  <NavLink className="Nav-Link" to="/basket">
                    Кошик
                  </NavLink>
                </div>
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
              <Route exact path="/bestsellers/robinson" component={Robinson}/>
              <Route  path="/bestsellers/pomarancheva-divchynka" component={OrangeGirl}/>
              <Route  path="/bestsellers/encyklopediya-lvova-t-4" component={Lviv4}/>
              <Route  path="/bestsellers/encyklopediya-lvova-t-2" component={Lviv2}/>
              <Route  path="/bestsellers/grebeni-polumya" component={Power}/>
              <Route  path="/bestsellers/fizyka-maybutnogo" component={Kaku}/> 
            <Route exact path="/istoriya" component={History}/>
            <Route exact path="/filosofiya-ta-pravo" component={Philosophy}/>
            <Route exact path="/novinki" component={newBooks}/>
            <Route exact path="/ukrayinska-klasika" component={UkrClassic}/>
            <Route exact path="/mystetstvo-teatru" component={Theater}/>
            <Route exact path="/encyklopedia" component={Encyklopedia}/>
            <Route exact path="/ukr-literatura" component={UkrLit}/>
            <Route exact path="/polska-literatura" component={PolishLit}/>
            <Route exact path="/hlobalniy-rozvitok" component={Global}/>
            <Route exact path="/literaturoznavstvo" component={LiteraryStudies}/>
            <Route exact path="/nimecka-avstriyska-literatura" component={GerAustrLiterature}/>
            <Route exact path="/naukovo-populyarna-literatura" component={ScientPopLit}/>
            <Route exact path="/spogady-narodoznavstvo" component={Memoirs}/>
            <Route exact path="/skandinavska-literatura" component={Scandinavian}/>
            <Route exact path="/osvita" component={Education}/>
            <Route exact path="/kulturologiya" component={Culturology}/>
            <Route exact path="/italiyska-horvatska-serbska-literatura" component={ItalySerbCroatLiterature}/>
          <Route path="/buy" component={Buy}/>
          <Route path="/about" component={About}/>
          <Route path="/community" component={Community}/>
          <Route path="/basket" component={Basket}/>
        </div>

        <Footer />

      </div>   
    )
  }
}
export default App
