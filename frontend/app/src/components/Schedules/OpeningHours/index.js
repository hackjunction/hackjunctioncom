// import React from 'react';
// import { connect } from 'react-redux';

// import * as ContentSelectors from '../../../redux/dynamiccontent/selectors';

// import styles from './styles.module.scss';

// import HoursItem from './HoursItem';

// const OpeningHours = props => {
//     const renderHours = hours => {
//         return hours.map(h => {
//             return <HoursItem {...h} key={h.name} />;
//         });
//     };
//     return <div className={styles.Hours}>{renderHours(props.hours)}</div>;
// };

// const mapStateToProps = state => ({
//     hours: ContentSelectors.openinghours(state)
// });

// export default connect(mapStateToProps)(OpeningHours);
