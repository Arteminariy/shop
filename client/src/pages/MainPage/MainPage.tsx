import React, { FC } from 'react';
import Card from '../../UI/Card/Card';
import Picture from '../../UI/Picture/Picture';
import Button, { ButtonStyleVariant } from '../../UI/Button/Button';
import TestPage from '../TestPage/TextPage';

export interface IMainPageProps {

}

const MainPage: FC<IMainPageProps> = () => (
    <div className="mainPage">
        <TestPage/>
    </div>
);

export default MainPage;