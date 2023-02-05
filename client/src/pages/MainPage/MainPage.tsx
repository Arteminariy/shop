import React, { FC } from 'react';
import Picture from '../../UI/Picture/Picture';

export interface IMainPageProps {

}

const MainPage: FC<IMainPageProps> = () => (
    <div className="mainPage">
        <Picture
            link={"https://sun9-82.userapi.com/impg/fnoksh9YPz3VnKAVdYBWdLZI-QnIExVJJr64Sw/GRFMFFATm3U.jpg?size=1600x999&quality=95&sign=cdad5fc6706bf220821b68a5beb0ecae&type=album"}
            width={200}/>
    </div>
);

export default MainPage;