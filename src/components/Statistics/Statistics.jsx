import PropTypes from "prop-types";
import { StatsInfo } from "components/Statistics/Statistics.styled";
export const Statistics = ({ stats: {label, percentage} }) => {
    return <ul>
    <li>
      <StatsInfo >{label}</StatsInfo>
      <StatsInfo >{percentage}%</StatsInfo>
    </li>
  </ul>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.string,
  
    };