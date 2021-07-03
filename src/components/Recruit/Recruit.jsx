import React from 'react'
import "../../styles/Recruit/Recruit.scss"

export default function Recruit (props) {

	return (
		<div className="recruit">
			<div>
				<div className="recruit__action__header">Tuyển dụng của bạn</div>
				<button 
					type="button" 
					className="recruit__action recruit__action--padding  "
					>
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							width="16" height="16" 
							fill="#fff" 
							class="bi bi-plus-lg recruit__action__svg " 
							viewBox="0 0 16 16">
								<path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
						</svg>
						{/* class text-nowrap for avoiding drops few words */}
						<div className="recruit__action__text text-nowrap">YÊU CẦU TUYỂN DỤNG</div>
				</button>
			</div>
			<div>
				<div className="recruit__navigators__links">Link kết nhanh:</div>
				<div>
					<i class="bi bi-newspaper recruit__navigators__news"/>
					<span 
						href="localhost"
						className="recruit__navigators__news__text"
						>Tin tuyển dụng</span>
				</div>
				<div>
					<i class="bi bi-person-fill recruit__navigators__interview"></i>
					<span 
						href="localhost"
						className="recruit__navigators__interview__text "
						>Phỏng vấn ứng viên</span>
				</div>
			</div>
		</div>
	)
}