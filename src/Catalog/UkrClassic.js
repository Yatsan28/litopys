import React, { Component } from 'react'
import {
BrowserRouter as Router,
Switch,
NavLink,
Route } from 'react-router-dom'


import './catalog.css'

import sodomora from "./img/sodomora.jpg"
import vorkuta from "./img/vorkuta.jpg"
import world_history from "./img/world_history.jpg"
import leopolis from "./img/leopolis.jpg"
import genocide from "./img/genocide.jpg"
import zubrytskyy from "./img/zubrytskyy.jpg"
import rusofily from "./img/rusofily.jpg"
import putivnyk from "./img/putivnyk.jpg"
import istoria_druk from "./img/istoria_druk.jpg"
import zubrytskyy_2 from "./img/zubrytskyy_2.jpg"

const UkrClassic = () => ( 
  <div className="conteiner">
      <div className="tittle">
        <h1>Українська класика</h1>
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
              <img src={zubrytskyy_2} alt={"Михайло Зубрицький - Зібрані твори і матеріали у трьох томах. Том 2: Матеріали до біографії"} />
              <div className="mask">
                <h2>Зібрані твори і матеріали у трьох томах. Том 2: Матеріали до біографії</h2>
                <p>Михайло Зубрицький</p>
                <NavLink className="info" to="/istoriya/zibrani-tvory-i-materialy-u-troh-tomah-tom-2-materialy-do-biografiyi">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={vorkuta} alt={"Юкка Рислаккі - Воркута! Повстання у виправно-трудовому таборі"} />
              <div className="mask">
                <h2>Воркута! Повстання у виправно-трудовому таборі</h2>
                <p>Юкка Рислаккі</p>
                <NavLink className="info" to="/istoriya/vorkuta-povstannya-u-vypravno-trudovomu-tabori">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="items">

          <div className="view">
            <div className="view view-first">
              <img src={world_history} alt={"За редакцією Ігора Підкови та Романа Шуста - Світова історія ХХ століття. Енциклопедичний словник"} />
              <div className="mask">
                <h2>Світова історія ХХ століття. Енциклопедичний словник</h2>
                <p>За редакцією Ігора Підкови та Романа Шуста</p>
                <NavLink className="info" to="/istoriya/svitova-istoriya-hh-stolittya-encyklopedychnyy-slovnyk">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="view">
            <div className="view view-first">
              <img src={leopolis} alt={"За науковою редакцією Ю. Мороза, М. Мальського- Leopolis Consulari. Сторінками історії консульського Львова (2-ге видання)"} />
              <div className="mask">
                <h2>Leopolis Consulari. Сторінками історії консульського Львова (2-ге видання)</h2>
                <p>За науковою редакцією Ю.Мороза, М.Мальського</p>
                <NavLink className="info" to="/istoriya/leopolis-consulari-storinkamy-istoriyi-konsulskogo-lvova-2-ge-vydannya">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={genocide} alt={"Андрій Козицький - Геноцид та політика масового винищення цивільного населення у ХХ ст."} />
              <div className="mask">
              <h2>Геноцид та політика масового винищення цивільного населення у ХХ ст.</h2>
              <p>Андрій Козицький</p>
              <NavLink className="info" to="/istoriya/genocyd-ta-polityka-masovogo-vynyshchennya-cyvilnogo-naselennya">
                Детальніше
              </NavLink>
              </div>
            </div>
          </div>

        </div> 

        <div className="items">
          <div className="view">
            <div className="view view-first">
              <img src={zubrytskyy} alt={"Михайло Зубрицький - Зібрані твори і матеріали у трьох томах. Том 1: Наукові праці"} />
              <div className="mask">
                <h2>Зібрані твори і матеріали у трьох томах. Том 1: Наукові праці</h2>
                <p>Михайло Зубрицький</p>
                <NavLink className="info" to="/istoriya/zibrani-tvory-i-materialy-u-troh-tomah-tom-1-naukovi-praci">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="view">
            <div className="view view-first">
              <img src={rusofily} alt={"Анна Вероніка Вендланд - Русофіли Галичини. Українські консерватори між Австрією та Росією, 1848-1915"} />
              <div className="mask">
                <h2>Русофіли Галичини. Українські консерватори між Австрією та Росією, 1848-1915</h2>
                <p>Анна Вероніка Вендланд</p>
                <NavLink className="info" to="/istoriya/rusofily-galychyny-ukrayinski-konservatory-mizh-avstriyeyu-ta-rosiyeyu-1848-1915">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={putivnyk} alt={"За редакцією Андрія Козицького - Львів. Місто наших героїв. Путівник"} />
              <div className="mask">
                <h2>Львів. Місто наших героїв. Путівник</h2>
                <p>За редакцією Андрія Козицького</p>
                <NavLink className="info" to="/istoriya/lviv-misto-nashyh-geroyiv-putivnyk">
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
                <NavLink className="info" to="/istoriya/chas-narodiv-istoriya-ukrayiny-hih-stolittya-navchalnyy-posibnyk">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={zubrytskyy_2} alt={"Михайло Зубрицький - Зібрані твори і матеріали у трьох томах. Том 2: Матеріали до біографії"} />
              <div className="mask">
                <h2>Зібрані твори і матеріали у трьох томах. Том 2: Матеріали до біографії</h2>
                <p>Михайло Зубрицький</p>
                <NavLink className="info" to="/istoriya/zibrani-tvory-i-materialy-u-troh-tomah-tom-2-materialy-do-biografiyi">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={vorkuta} alt={"Юкка Рислаккі - Воркута! Повстання у виправно-трудовому таборі"} />
              <div className="mask">
                <h2>Воркута! Повстання у виправно-трудовому таборі</h2>
                <p>Юкка Рислаккі</p>
                <NavLink className="info" to="/istoriya/vorkuta-povstannya-u-vypravno-trudovomu-tabori">
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
                <NavLink className="info" to="/istoriya/chas-narodiv-istoriya-ukrayiny-hih-stolittya-navchalnyy-posibnyk">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={zubrytskyy_2} alt={"Михайло Зубрицький - Зібрані твори і матеріали у трьох томах. Том 2: Матеріали до біографії"} />
              <div className="mask">
                <h2>Зібрані твори і матеріали у трьох томах. Том 2: Матеріали до біографії</h2>
                <p>Михайло Зубрицький</p>
                <NavLink className="info" to="/istoriya/zibrani-tvory-i-materialy-u-troh-tomah-tom-2-materialy-do-biografiyi">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>

          <div className="view">
            <div className="view view-first">
              <img src={vorkuta} alt={"Юкка Рислаккі - Воркута! Повстання у виправно-трудовому таборі"} />
              <div className="mask">
                <h2>Воркута! Повстання у виправно-трудовому таборі</h2>
                <p>Юкка Рислаккі</p>
                <NavLink className="info" to="/istoriya/vorkuta-povstannya-u-vypravno-trudovomu-tabori">
                  Детальніше
                </NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>
)

export default UkrClassic

