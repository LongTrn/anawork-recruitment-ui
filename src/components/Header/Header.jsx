import React from 'react'
import "../../styles/Header/Header.scss"

export default function Header (props) {
	
	const { main, sub, flag = true } = props
	const classHeader = flag? "header header--margin": "header"

	return(
		<span className={classHeader}>
			<span>
				<b className="header__main">{main}</b>
			</span>
			<span className="spacing-xs"></span>
			<span className="header__line"> </span>
			<span className="header__sub">{sub}</span>
		</span>
	)

}