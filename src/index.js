import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';
import './index.css';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} color="#ff85c8" />
    <Statistics stats={data} color="#907cb8" />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </React.StrictMode>
);
