import { Statistics } from "./Statistics";
import { Title,Wrapper,StatsList,StatsItem } from "components/Statistics/Statistics.styled";

export const StatisticsList = ({statistics,title}) => {
    return (<Wrapper>
        <Title>{title}</Title>
        <StatsList>
            {statistics.map(stats => (
                <StatsItem key={stats.id}>
                    <Statistics stats={stats} />
                </StatsItem>
            ))}
        </StatsList>
    </Wrapper>
    )
}