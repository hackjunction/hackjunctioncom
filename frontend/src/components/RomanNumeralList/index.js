import React, { PureComponent } from 'react'
import './style.scss'
import { map } from 'lodash-es';

import { connect } from 'react-redux';
import { content as selectContent } from '../../redux/staticcontent/selectors';
import { toRomanNumeral } from '../../utils/misc'

class RomanNumeralList extends PureComponent {

	renderListItems() {
		const { items } = this.props;
		return map(items, (item, index) => {

			if (!item) {
				return null;
			}

			return (
				<li key={item} className="RomanNumeralList--list-item">
					<div className="RomanNumeralList--list-item__bullet">
						<span className="RomanNumeralList--list-item__bullet-text">{toRomanNumeral(index + 1)}</span>
					</div>
					<p className="RomanNumeralList--list-item__text">{item}</p>
				</li>
			)
		})
	}

	render() {
		return (
			<div className="RomanNumeralList">
				<ol className="RomanNumeralList--list">
					{this.renderListItems()}
				</ol>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { itemKeys } = ownProps;
	const content = selectContent(state);

	return {
		items: itemKeys ? map(itemKeys, key => content[key]) : ownProps.items
	}
}

export default connect(mapStateToProps)(RomanNumeralList)