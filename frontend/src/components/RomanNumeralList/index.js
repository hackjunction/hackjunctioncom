import React from 'react'
import './style.scss'
import _ from 'lodash'

import { toRomanNumeral } from '../../utils/misc'

const RomanNumeralList = ({ items }) => {

	function renderListItems() {
		return _.map(items, (item, index) => {
			return (
				<li className="RomanNumeralList--list-item">
					<div className="RomanNumeralList--list-item__bullet">
						<span className="RomanNumeralList--list-item__bullet-text">{toRomanNumeral(index + 1)}</span>
					</div>
					<p className="RomanNumeralList--list-item__text">{item}</p>
				</li>
			)
		})
	}

	return (
		<div className="RomanNumeralList">
			<ol className="RomanNumeralList--list">
				{renderListItems()}
			</ol>
		</div>
	)
}

export default RomanNumeralList