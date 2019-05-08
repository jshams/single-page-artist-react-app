import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import About from './components/About'
import Songs from './components/Songs'
import Events from './components/Events'
import Contact from './components/Contact'

const Home = (props) => {
  return (
    <div>
      {props.title}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/songs">Songs</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/songs" render={() => <Songs songs={[]} />} />
        <Route path="/events" render={() => <Events events={[]} />} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;