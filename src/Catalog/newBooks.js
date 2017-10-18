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

import sodomora from './img/sodomora.jpg'
import kakuRozum from './img/kakuRozum.jpg'
import jan_pieklo from './img/jan_pieklo.jpg'
import istoria_druk from './img/istoria_druk.jpg'
import robinson1 from './img/robinson1.jpg'
import gato from './img/gato.jpg'
import gato1 from './img/gato1.jpg'
import vchytel_20 from './img/vchytel_20.jpg'
import orangegirl from './img/orangegirl.jpg'
import vorkuta from './img/vorkuta.jpg'
import power from './img/power.jpg'
import kaku from './img/kaku.jpg'
import robinsonTalant from './img/robinsonTalant.jpg'
import teylor from './img/teylor.jpg'

const newBooks = () => (
  <div className="conteiner">
      <div className="tittle">
        <h1>Новинки</h1>
      </div>

        <div className="items">
          
          <div className="view">
            <div className="view view-first">
              <img src={sodomora} alt={"Андрій Содомора - Історія одного перекладу"} />
              <div className="mask">
                <h2>Історія одного перекладу, або Моя перша книжка</h2>
                <p>Андрій Содомора</p>
                <NavLink className="info" to="/bestsellers/istoriya-odnogo-perekladu-abo-moya-persha-knyzhka">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

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
              <img src={jan_pieklo} alt={"Ян Пєкло - Світ за поворотом"} />
              <div className="mask">
                <h2>Світ за поворотом</h2>
                <p>Ян Пєкло</p>
                <NavLink className="info" to="/bestsellers/svit-za-povorotom">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="items">

          <div className="view">
            <div className="view view-first">
              <img src={istoria_druk} alt={"Час народів. Історія України ХІХ століття. Навчальний посібник"} />
              <div className="mask">
                <h2>Час народів. Історія України ХІХ століття. Навчальний посібник</h2>
                <p>Олена Аркуша, Костянтин Кондратюк, Мар’ян Мудрий, Олексій Сухий</p>
                <NavLink className="info" to="/bestsellers/chas-narodiv-istoriya-ukrayiny-hih-stolittya-navchalnyy-posibnyk">
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

        </div> 

        <div className="items">
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
        </div> 

         <div className="items">
          <div className="view">
            <div className="view view-first">
              <img src={vorkuta} alt={"Юкка Рислаккі - Воркута! Повстання у виправно-трудовому таборі"} />
              <div className="mask">
                <h2>Воркута! Повстання у виправно-трудовому таборі</h2>
                <p>Юкка Рислаккі</p>
                <NavLink className="info" to="/bestsellers/vorkuta-povstannya-u-vypravno-trudovomu-tabori">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="view">
            <div className="view view-first">
              <img src={power} alt={"Саманта Пауер - На гребені полум'я"} />
              <div className="mask">
                <h2>На гребені полум'я</h2>
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

        <div className="items">
          
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
        
          <Switch>
          <Route exact path="/bestsellers/robinson" component={Robinson}/>
          <Route  path="/bestsellers/pomarancheva-divchynka" component={OrangeGirl}/>
          <Route  path="/bestsellers/encyklopediya-lvova-t-4" component={Lviv4}/>
          <Route  path="/bestsellers/encyklopediya-lvova-t-2" component={Lviv2}/>
          <Route  path="/bestsellers/grebeni-polumya" component={Power}/>
          <Route  path="/bestsellers/fizyka-maybutnogo" component={Kaku}/>
          </Switch>
        
      </div>
)

export default newBooks