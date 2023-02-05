import React, { FC } from 'react';
import "./TestPage.css"
import Card from '../../UI/Card/Card';
import Picture from '../../UI/Picture/Picture';
import Button, { ButtonStyleVariant } from '../../UI/Button/Button';

export interface ITestPageProps {

}

const TestPage: FC<ITestPageProps> = () => (
    <div
        className="testPage"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Picture
            preview={true}
            link={"https://sun9-82.userapi.com/impg/fnoksh9YPz3VnKAVdYBWdLZI-QnIExVJJr64Sw/GRFMFFATm3U.jpg?size=1600x999&quality=95&sign=cdad5fc6706bf220821b68a5beb0ecae&type=album"}
            width={300}
        />
        <Card>
            <>
                <Picture
                    preview={false}
                    link={"https://sun9-82.userapi.com/impg/fnoksh9YPz3VnKAVdYBWdLZI-QnIExVJJr64Sw/GRFMFFATm3U.jpg?size=1600x999&quality=95&sign=cdad5fc6706bf220821b68a5beb0ecae&type=album"}
                    width={300}
                />
                <p>Залупа</p>
                <Button variant={ButtonStyleVariant.outlined}>Что-то</Button>
            </>
        </Card>
        <Button variant={ButtonStyleVariant.outlined}>Some text</Button>
    </div>
);

export default TestPage;