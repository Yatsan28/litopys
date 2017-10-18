import React, { Component } from 'react'
import {
Link } from 'react-router-dom'

import FragmentOfBook from './FragmentOfBook'
import "./book.css" 
import kaku from './img/kaku.jpg'

class Kaku extends Component {
  render () {
    return(
      <div className="book">
      <div className="bookPage">
        <div className="bookPage-container">
          <div className="bookPage-topper">
            <div className="bookTopper-cover">
              <img className="books-cover" src={kaku} alt={"Кайку"} />
            </div>
            <div className="bookTopper-hgroup">
              <h1>Фізика майбутнього</h1>
              <h2>Мічіо Кайку</h2>
              <p>Рік видання: 2017</p>
              <p>Мова оригіналу: англійська</p>
              <p>Перекладачі: Анжела Кам'янець</p>
              <p>Мова видання: українська</p>
              <p>Кількість сторінок: 432</p>
              <p>Формат: 145х215 мм, оправа - тверда ламінована</p>
              <p>ISBN: 978-966-8853-36-4</p>
              <p><b>Доставка та самовивіз почнеться з 11 вересня</b></p>
              <div className="prise">
                <h3><p><s>199</s> грн 140 грн</p></h3>
              </div>
              <div className="bookTopper-button">
                <Link className="Link-basket" to="/Basket" >
                  В кошик
                </Link>
              </div>
            </div>  
          </div>
        </div> 
          
          <div className="annotation">
            <div className="annotation-buttonBlock">
            <div className="annotation-buttons">
              <FragmentOfBook />
                <div className="buttons-share">
                  <div className="fb"></div>
                  <div className="google"></div>
                  <div className="twi"></div>
                </div>
              </div>
              <div className="annotation-textBlock">
              <div className="annotation-tittle">
                <p>ІІ видання</p>
              </div>
              <div className="annotation-2">
                <p>    У книжці-бестселері Мічіо Кайку досліджує, як три великі 
                <br /> наукові революції – квантова механіка, біогенетика і штучний
                <br /> інтелект, – що кардинально змінили світ в останні сто років, 
                <br /> змінять наше життя в ХХІ сторіччі.</p>
              </div> 
              </div>
            </div>
            <div className="annotation-3">
              <p>Спираючись на дослідження, які вже сьогодні проводять в наукових лабораторіях в усьому світі, 
              Кайку передбачає майбутнє, у якому ми вже не будемо пасивними спостерігачами танцю Природи, 
              а натомість перетворимося на активних хореографів матерії, життя й інтелекту.</p>
            </div> 
            <div className="annotation-3">
              <p>“Фізика майбутнього” – захоплива науково-популярна розповідь, що сплітає докупи найновіші досягнення провідних науковців світу.</p>
            </div>
            <div className="annotation-3">
              <p>Майбутнє компʼютера, штучного інтелекту, медицини, енергії, космічних подорожей і навіть майбутнє багатства ‒ про це все можна дізнатися з книжки.</p> 
            </div>
            <div className="bookPage-annotation-3">
              <p>Для широкого кола читачів.</p>
            </div>
            <div className="annotation-3">
              <p>Наукові редактори: проф. Іван Вакарчук, проф. Віктор Федоренко</p>
            </div>
          </div>
          <div className="rewiew">
        </div>
      </div> 
    </div>
    )
  }
}
export default Kaku
