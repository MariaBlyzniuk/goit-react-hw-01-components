// import PropTypes from "prop-types";

export const Statistics = ({ title, stats: {id,label, percentage} }) => {
    return <section className="statistics">
        <h2 className="title">{title}</h2>

  <ul className="stat-list">
            <li key={id} className="item">
                <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
            </li>
            <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  </ul>
</section>;
}