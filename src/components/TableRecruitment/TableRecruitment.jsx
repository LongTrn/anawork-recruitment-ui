import React from 'react';
import "../../styles/TableRecruitment/TableRecruitment.scss"
import Header from "../Header/Header"

export default function TableRecruitment (props) {

	return (
		<div>
			<table class="table table-borderless table">
				<thead>
					<tr>
						<th 
							scope="col"
							className="table__header__name"
						>Yêu cầu tuyển dụng</th>
						<th 
							scope="col"
							className="table__header__description"
						>Mô tả yêu cầu</th>
						<th 
							scope="col"
							className="table__header__creator"
						>Người tạo</th>
						<th 
							scope="col"
							className="table__header__date-start"
						>Bắt đầu</th>
						<th 
							scope="col"
							className="table__header__date-end"
						>Kết thúc</th>
						<th 
							scope="col"
							className="table__header__count"
						>Số lượng</th>
						<th 
							scope="col"
							className="table__header__behavior"
						>Thao tác</th>
					</tr>
				</thead>
				<tbody>
					<tr className="table__rows">
						<td scope="row">Tuyển dụng nhân viên kiểm thử</td>
						<td>Tuyển dụng nhân viên kiểm thử</td>
						<td>Nguyễn Lữ Thế</td>
						<td>20/11/2020</td>
						<td>20/11/2020</td>
						<td>2</td>
						<td className="table__rows__action">
							<button
								type="button"
								className="table__action__button"
							>
								<i class="bi bi-list-ul"></i>
								<span className="spacing-xxs"/>
								Xem chi tiết
						</button></td>
					</tr>
					<tr className="table__rows">
						<td scope="row">Tuyển dụng nhân viên kiểm thử</td>
						<td>Tuyển dụng nhân viên kiểm thử</td>
						<td>Nguyễn Lữ Thế</td>
						<td>20/11/2020</td>
						<td>20/11/2020</td>
						<td>2</td>
						<td className="table__rows__action">
							<button
								type="button"
								className="btn btn-outline-primary table__action__button"
							>
								<i class="bi bi-list-ul"></i>
								<span className="spacing-xxs"/>
								Xem chi tiết
						</button></td>
					</tr>
				</tbody>					
			</table>
		</div>
	)
}