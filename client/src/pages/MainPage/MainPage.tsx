import React, { FC } from 'react';
import './MainPage.css';
import Card from '../../UI/Card/Card';
import Picture from '../../UI/Picture/Picture';
import Button from '../../UI/Button/Button';
import Contacts from '../../components/Contacts/Contacts';
import ScrollUpButton from '../../UI/ScrollUpButton/ScrollUpButton';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = ({}) => {
	return (
		<div className="main-page">
			{/*КАРТИНКА*/}
			<Picture
				preview={true}
				link="https://sun9-82.userapi.com/impg/fnoksh9YPz3VnKAVdYBWdLZI-QnIExVJJr64Sw/GRFMFFATm3U.jpg?size=1600x999&quality=95&sign=cdad5fc6706bf220821b68a5beb0ecae&type=album"
				width={300}
			/>
			{/*КАРТОЧКА*/}
			<Card>
				<Picture
					preview={false}
					link="https://sun9-82.userapi.com/impg/fnoksh9YPz3VnKAVdYBWdLZI-QnIExVJJr64Sw/GRFMFFATm3U.jpg?size=1600x999&quality=95&sign=cdad5fc6706bf220821b68a5beb0ecae&type=album"
					width={300}
				/>
				<p>Залупа</p>
				<Button variant="outlined">Что-то</Button>
			</Card>
			{/*КНОПКА*/}
			<Button variant="outlined">Some text</Button>
			{/*КОНТАКТЫ*/}
			<Contacts>Contact us!</Contacts>
			<RegistrationForm />
			<ScrollUpButton />
		</div>
	);
};

export default MainPage;
