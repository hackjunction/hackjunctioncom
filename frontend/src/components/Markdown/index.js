import React from 'react'
import './style.scss'

const ReactMarkdown = require('react-markdown')


const Markdown = ({ source }) => {

	return (
		<div className="Markdown">
			<ReactMarkdown source={source} />
		</div>
	)
}

export default Markdown