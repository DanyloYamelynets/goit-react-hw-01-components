import PropTypes from 'prop-types';
import {
  StatsSection,
  Title,
  StatsList,
  Label,
  Percentage,
} from './StatisticsStyled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </li>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
