import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import About from './components/about/About'
import Songs from './components/song/Songs'
import Events from './components/event/Events'
import Contact from './components/contact/Contact'
import {abouts, contact, events, songs} from './template'

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
        <Route path="/about" render={() => <About abouts={abouts} />}/>
        <Route path="/songs" render={() => <Songs songs={songs} />} />
        <Route path="/events" render={() => <Events events={events} />} />
        <Route path="/contact" render={() => <Contact contact={contact} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;