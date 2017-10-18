import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Footer extends Component {
  render () {
    return(
      <div className="footer">
        <div className="footerBlock">
          <div className="footerBlock-container">
            <div className="footerBlock-contacts">
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
          <div className="wrap-1"> 
          <div className="wrap-2">
           <div className="footerBlock-container">
             <h3>Ми в соц мережах</h3>
             <div className="footerBlock-inNetworks">
              <div className="inFB">
                <a className="communityLink" href="https://www.facebook.com/litopys.lviv">
                  Facebook
                </a>
              </div>
              <div className="inYoutube">
                <a className="communityLink" href="https://www.youtube.com/user/LitopysLviv">
                  YouTube
                </a>
              </div>
            </div> 
          </div>
          <div className="footerBlock-container">
          <div className="footerBlock-partners">
              <h3>Наші партнери</h3>
              <p><a className="partnersLink" href="http://litakcent.com">ЛітАкцент</a></p>
              <p><a className="partnersLink" href="http://www.chytomo.com">Читомо</a></p>
            </div>
          </div>
          </div>
          <div className="footerBlock-container">
           <div className="downloadPrise">
             <p>Завантажити прайс-лист</p>
           </div>
          </div>
          </div>
          <div className="footerBlock-container">
          <div className="footerBlock-subscribtion">
            <form className="subs-form" action="/subscribe" method="post">
              <h3>Підписатись</h3>
              <input className="footer-emeil" type="text" placeholder="Enter your email address" />
              <input className="footer-submit" type="submit" />
            </form>
          </div>
          </div>
          
        </div>
        <div className="footerBottom-tittle">
          <p>© 1999 – 2017  Видавництво «Літопис»</p>
        </div>
      </div>
    )
  }
}

export default Footer