import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import profile from "./Profile/user.json";
import stats from "./Statistics/data.json"
import friends from "./FriendList/friends.json"
import transactions from "./TransactionHistory/transactions.json"

// import { Children } from "react";
// import { StatisticsList } from "./Statistics/StatisticsList";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile profile={profile} />
      <Statistics key={stats.id} title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
         </div>
  );
};
