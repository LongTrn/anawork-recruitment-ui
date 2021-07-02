import React from 'react'
import '../../styles/Recruitment/Recruitment.scss';
import Header from "../Header/Header"
import Statistics from "../Statistics/Statistics"
import Recruit from "../Recruit/Recruit"

export default function Recruitment () {
	return(
		<div className="recruitment">
			<Header
				main="Tuyển dụng"
				sub="Yêu cầu tuyển dụng của tôi"
			/>
			<Statistics
				header="Thống kê số lượng cần tuyển / đã tuyển"
			/>

			<div></div>
			<div></div>
			<div></div>

		</div>
	)

}