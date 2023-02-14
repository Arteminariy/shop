import React, { FC } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

export interface IFooterProps {
    tabs: IFooterTabs[];
}

export interface IFooterTabs {
    tab: IFooterTab[];
}
export interface IFooterTab {
    text: string;
    link: string;
}

const Footer: FC<IFooterProps> = ({ tabs }) => {
	return (
		<footer>
			<div className='footer-content'>
				<Row gutter={[16, 0]}>
					{tabs.map((el) => {
						return (
							<>
								{el.tab.map((tabEl) => {
									return (
										<Col span={6}>
											<Link to={tabEl.link}>
												<div className='footer-tab-text'>
													{tabEl.text}
												</div>
											</Link>
										</Col>
									);
								})}
							</>
						);
					})}
				</Row>
			</div>
		</footer>
	);
};

export default Footer;
