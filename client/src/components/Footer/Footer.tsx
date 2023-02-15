import React, { FC } from 'react';
import './Footer.css';

export interface IFooterProps {

}

const Footer: FC<IFooterProps> = () => {
	return (
		<footer>
			<div className="footer-logo">SHINE BRIGHT</div>
			<div className="footer-content">
				<div className="footer-tab">
					<h4 className="footer-tab-heading">Познакомиться с Shine Bright</h4>
					<p className="footer-tab-text">Макияж</p>
					<p className="footer-tab-text">Уход за кожей</p>
					<p className="footer-tab-text">Уход за телом</p>
					<p className="footer-tab-text">Парфюмерия</p>
				</div>
				<div className="footer-tab">
					<h4 className="footer-tab-heading">Онлайн услуги</h4>
					<p className="footer-tab-text">Учётная запись</p>
					<p className="footer-tab-text">Сервис</p>
				</div>
				<div className="footer-tab">
					<h4 className="footer-tab-heading">Каталог</h4>
					<p className="footer-tab-text">Помады</p>
					<p className="footer-tab-text">Крем</p>
					<p className="footer-tab-text">Парфюмерия</p>
					<p className="footer-tab-text">Ароматы для дома</p>
				</div>
				<div className="footer-tab">
					<h4 className="footer-tab-heading">О нас</h4>
					<p className="footer-tab-text">История создания</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
