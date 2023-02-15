import React, { FC } from 'react';
import { Link } from 'react-router-dom';
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
					<Link to={'/'} className="footer-tab-text">Макияж</Link>
					<Link to={'/'} className="footer-tab-text">Уход за кожей</Link>
					<Link to={'/'} className="footer-tab-text">Уход за телом</Link>
					<Link to={'/'} className="footer-tab-text">Парфюмерия</Link>
				</div>
				<div className="footer-tab">
					<h4 className="footer-tab-heading">Онлайн услуги</h4>
					<Link to={'/'} className="footer-tab-text">Учётная запись</Link>
					<Link to={'/'} className="footer-tab-text">Сервис</Link>
				</div>
				<div className="footer-tab">
					<h4 className="footer-tab-heading">Каталог</h4>
					<Link to={'/'} className="footer-tab-text">Помады</Link>
					<Link to={'/'} className="footer-tab-text">Крем</Link>
					<Link to={'/'} className="footer-tab-text">Парфюмерия</Link>
					<Link to={'/'} className="footer-tab-text">Ароматы для дома</Link>
				</div>
				<div className="footer-tab">
					<h4 className="footer-tab-heading">О нас</h4>
					<Link to={'/'} className="footer-tab-text">История создания</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
