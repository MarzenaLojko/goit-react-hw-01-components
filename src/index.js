import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import './index.css';
import user from './user.json';
import data from './data.json';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
  </React.StrictMode>
);
