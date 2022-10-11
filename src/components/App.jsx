import { Profile } from "./Profile/Profile";
import { StatisticsList } from "./Statistics/StatisticsList";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionInfo } from "./TransactionHistory/TransactionInfo";
import { PageWrapper } from "./PageStyled.styled";
import profile from "./Profile/user.json";
import statistics from "./Statistics/data.json"
import friends from "./FriendList/friends.json"
import transactions from "./TransactionHistory/transactions.json"

export const App = () => {
  return (
    <PageWrapper>
      <Profile profile={profile} />
      <StatisticsList title={"Upload stats"} statistics={statistics} />
      <FriendsList friends={friends} />
      <TransactionInfo transactions={transactions} />
    </PageWrapper>
  );
};
