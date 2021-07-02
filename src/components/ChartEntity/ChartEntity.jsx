import React from 'react'
import "../../styles/ChartEntity/ChartEntity.scss"

export default function ChartEntity (props) {
	const { background, description, } = props


	return(
		<div className="chart-entity">
			<div className="chart-entity__icon">

			</div>
			<span className="chart-entity__descriotion">{description}</span>
		</div>
	)

}