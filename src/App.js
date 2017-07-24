import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import "./App.css"

const App = () => (
  <Router>
    <div className="App">
     <div className="TopBar">
      <ul className="Menu">
        <ol><Link className="NavLink" to="/">Головна</Link></ol>
        <ol><Link className="NavLink" to="/catalog">Каталог</Link></ol>
        <ol><Link className="NavLink" to="/basket">Кошик</Link></ol>
      </ul>
      </div>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/catalog" component={Catalog}/>
      <Route path="/basket" component={Basket}/>
    </div>
  </Router>
)

const Home = () => ( 
  <div>
    <h2>Головна</h2>
  </div>
)

const Basket = () => (
  <div>
    <h2>Кошик</h2>
  </div>
)

const Catalog = ({ match }) => (
  <div className="catalog">
    <ul className="Menu">
      <ol>
        <Link className="NavLink" to={`${match.url}/Бестселери`}>
          Бестселери
        </Link>
      </ol>
      <ol>
        <Link className="NavLink" to={`${match.url}/Список новинок`}>
          Новинки
        </Link>
      </ol>
      <ol>
        <Link className="NavLink" to={`${match.url}/Видання Енциклопедіі Львова`}>
          Енциклопедія Львова
        </Link>
      </ol>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App
