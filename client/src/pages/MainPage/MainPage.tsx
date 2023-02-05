import React, { FC } from 'react';
import TestPage from '../TestPage/TextPage';

export interface IMainPageProps {

}

const MainPage: FC<IMainPageProps> = () => (
    <div className="mainPage">
        <TestPage/>
    </div>
);

export default MainPage;