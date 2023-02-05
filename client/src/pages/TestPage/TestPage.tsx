import React, { FC } from 'react';
import "./TestPage.css"
import Card from '../../UI/Card/Card';
import Picture from '../../UI/Picture/Picture';
import Button from '../../UI/Button/Button';
import Contacts from '../../components/Contacts/Contacts';
import LinkElement from '../../UI/Link/LinkElement';

export interface ITestPageProps { }

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
            link="https://sun9-82.userapi.com/impg/fnoksh9YPz3VnKAVdYBWdLZI-QnIExVJJr64Sw/GRFMFFATm3U.jpg?size=1600x999&quality=95&sign=cdad5fc6706bf220821b68a5beb0ecae&type=album"
            width={300}
        />
        <Card>
            <Picture
                preview={false}
                link="https://sun9-82.userapi.com/impg/fnoksh9YPz3VnKAVdYBWdLZI-QnIExVJJr64Sw/GRFMFFATm3U.jpg?size=1600x999&quality=95&sign=cdad5fc6706bf220821b68a5beb0ecae&type=album"
                width={300}
            />
            <p>Залупа</p>
            <Button variant='outlined'>Что-то</Button>
        </Card>
        <Button variant='outlined'>Some text</Button>
        <Contacts>
            Contact us!
        </Contacts>
        <LinkElement link="">
            Не может быть...
        </LinkElement>
    </div>
);

export default TestPage;