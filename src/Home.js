import React, { Component } from 'react'

import './App.css'
import './home.css'

import robinson1 from './Catalog/img/robinson1.jpg'
import kaku from './Catalog/img/kaku.jpg'
import kakuRozum from './Catalog/img/kakuRozum.jpg'

import lviv4 from './Catalog/img/lviv4.jpg'
import lviv2 from './Catalog/img/lviv2.jpg'
import orangegirl from './Catalog/img/orangegirl.jpg'
import power from './Catalog/img/power.jpg'
import jan_pieklo from './Catalog/img/jan_pieklo.jpg'
import teylor from './Catalog/img/teylor.jpg'
import sodomora from './Catalog/img/sodomora.jpg'
import istoria_druk from './Catalog/img/istoria_druk.jpg'
import gato from './Catalog/img/gato.jpg'
import vorkuta from './Catalog/img/vorkuta.jpg'



class Home extends Component {

  render () {
    return(
      <div>
       <div className="banner-conteiner">
        <div className="banner">
          <div className="banner-content">
            <h1>Літопис</h1>
          </div>
        </div>
      </div>
      <div className="main">

      <div className="tittle">
        <h2>Незабаром вийде з друку</h2>
      </div>
      <div className="newBooks">
        <div className="newBooks-wrap">
          <div className="newBooks-cnteiner">
            <div className="newBooks-content content-1">
              {/*<img className="newBooks-img" src={} alt={""} />*/}
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content content-1">
              {/*<img className="newBooks-img" src={} alt={""} />*/}
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content content-1">
              {/*<img className="newBooks-img" src={} alt={""} />*/}
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content content-1">
              {/*<img className="newBooks-img" src={} alt={""} />*/}
            </div>
          </div>
        </div>
      </div>

      <div className="tittle">
        <h2>Бестселери</h2>
      </div>
      <div className="wrap">
        <div className="row">
          <div className="bit-12 row row-wrap">
            <div className="bit-2">
              <div className="img-container">
               <img className="img" src={robinson1} alt={"Robinson"} />
              </div>
            </div>
            <div className="bit-2">
              <div className="img-container">
                <img className="img" src={kaku} alt={"Kaku"} />
              </div>
            </div>
            <div className="bit-2">
              <div className="img-container">
                <img className="img" src={lviv4} alt={"Lviv4"} />
              </div>
            </div>
            <div className="bit-2">
              <div className="img-container">
                <img className="img" src={orangegirl} alt={"orangegirl"} />
              </div>
            </div>
            <div className="bit-2">
              <div className="img-container">
                <img className="img" src={lviv2} alt={"Енциклопедія Львова том 2"} />
              </div>
            </div>
            <div className="bit-2">
              <div className="img-container">
                <img className="img" src={teylor} alt={"teylor"} />
              </div>
            </div>
          </div>
          <div className="bit-21">
            <div className="bit-3">
              <div className="img-container">
                <img className="big-img" src={kakuRozum} alt={"kakuRozum"} />
              </div>
            </div>
            <div className="bit-1">
              <div className="img-container">
                <img className="img-1" src={power} alt={"power"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="tittle">
        <h2>Новинки</h2>
      </div>
      <div className="newBooks">
        <div className="newBooks-wrap">
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={sodomora} alt={"Саманта Пауер"} />
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={kakuRozum} alt={"Саманта Пауер"} />
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={jan_pieklo} alt={"Саманта Пауер"} />
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={istoria_druk} alt={"Саманта Пауер"} />
            </div>
          </div>
        </div>
        
        <div className="newBooks-wrap">
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={robinson1} alt={"Саманта Пауер"} />
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={gato} alt={"Саманта Пауер"} />
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={orangegirl} alt={"Саманта Пауер"} />
            </div>
          </div>
          <div className="newBooks-cnteiner">
            <div className="newBooks-content">
              <img className="newBooks-img" src={vorkuta} alt={"Саманта Пауер"} />
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>  
    )
  }
}

export default Home 