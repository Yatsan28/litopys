import React from 'react'

import "./about.css"


const About = () => ( 
  <div className="about">

  <div className="about-page">
    <div className="about-headBlock">
      <div className="about-tittle-container">
        <h2 className="about-tittle">Видавництво "Літопис"</h2>
      </div>
      <div className="about-headline-container">
         <div><p className="headline-text">Книги - мов ріки, які напоюють собою весь світ.</p>
       <p className="headline-text">- Повість минулих літ -</p></div>
      </div>
      <div className="about-content-conteiner">
       <div className="content-text">
        <p className="paragraph">  Вітаємо Вас, дорогий читачу, на електронній сторінці українського видавництва "Літопис".
        Ми перекладаємо і видаємо знану у світі інтелектуальну літературу різного спрямування, 
       знайомимо українського читача з вершинами світової гуманістичної думки.
       Своєю працею ми прагнемо розвивати й поширювати ідеї толерантності, віднаходити взаєморозуміння, 
        зберігати і пропагувати європейську культурну спадщину в Україні й українську - у світі.</p>
        </div>
      </div>
    </div>
  
    <div className="about-teamBlock">
      <div className="about-tittle-container">
        <h2 className="about-tittle">колектив</h2>
      </div>
      <div className="about-team-conteiner">
        <div className="face director">
        </div>
        <div className="contacts">
          <p className="name">Михайло Комарницький</p>
          <p className="position">директор видавництва</p>
          <p className="email">e-mail: kms@litech.net</p>
        </div>
        <div className="face accountant">
        </div>
        <div className="contacts">
          <p className="name">Галя Возьна</p>
          <p className="position">головний бухгалтер</p>
          <p className="email">e-mail: litopys@ukr.net</p>
        </div>
      </div>
      <div className="about-team-conteiner">
        <div className="face sales-manager">
        </div>
        <div className="contacts">
          <p className="name">Ярослав Яворський </p>
          <p className="position">менеджер з продажу</p>
          <p className="email">e-mail: litopys@ukr.net</p>
        </div>
        <div className="face manager">
        </div>
        <div className="contacts">
          <p className="name">Андрій Зубрицький</p>
          <p className="position">менеджер</p>
          <p className="email">e-mail: zubr017@mail.ru</p>
        </div>
      </div>
      <div className="about-team-conteiner">
        <div className="face editor-Anna">
        </div>
        <div className="contacts">
          <p className="name">Анна-Марія Волосацька</p>
          <p className="position">редактор</p>
          <p className="email">e-mail: annamagdalena@email.com</p>
        </div>
        <div className="face editor-Iryna">
        </div>
        <div className="contacts">
          <p className="name">Ірина Новіцька  </p>
          <p className="position">редактор</p>
          <p className="email">e-mail: i.l.novitska@ukr.net</p>
        </div>
      </div>
      <div className="about-team-conteiner-last">
        <div className="face admin">
        </div>
        <div className="contacts-last">
          <p className="name">Андрій Василів</p>
          <p className="position">верстка, системний адміністратор</p>
          <p className="email">e-mail: neoboss@ukr.net</p>
        </div>
      </div>
    </div>
    </div>
  </div>
)

export default About