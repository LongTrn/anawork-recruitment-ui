import React from 'react'
import "../../styles/Statistics/Statistics.scss"
import Header from "../Header/Header"
import TimeSort from "../TimeSort/TimeSort"
import Chart from "../Chart/Chart"

export default function Statistics (props) {
	const { header, } = props
	return(
		<div className="stats">
			<div className="stats__header">
				<div className="stats__header--left-padding">
					<Header main={header} flag={false}/>
					<div className="stats__header--middle-vertically">
						<TimeSort/>
					</div>
				</div>
			</div>
			<div className="stats__charts">
			 	<Chart/>
			</div>
		</div>
	)

}