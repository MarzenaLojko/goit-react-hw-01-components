import PropTypes from 'prop-types';
import StatsCSS from './stats.module.css';

export const Statistics = ({ title, stats, color }) => {
    return (
        <section className={StatsCSS.statistics}>
            {title && <h2 className={StatsCSS.title}>{title}</h2>}
            <ul className={StatsCSS.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                        className={StatsCSS.item}
                        key={id}
                        style={{ backgroundColor: color }}
                    >
                        <span className={StatsCSS.label} style={{ color: myTextColor }}>{label}</span>
                        <span className={StatsCSS.percentage} style={{ color: myTextColor }}>{percentage}%</span>
                    </li>
                ))}
            </ul>
    </section >
    )
}
const myTextColor = '#ffffff';

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};