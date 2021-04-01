import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import routes from '../constants/routes.json';

export default function HomePage() {
  return (
    <div>
      <Home />
      111
      <Link to={routes.SURPRISE}>to surprise</Link>
    </div>
  );
}
