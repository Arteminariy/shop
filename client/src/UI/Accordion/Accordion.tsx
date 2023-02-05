import React, { FC } from 'react';
import './Accordion.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export interface IAccordionContent {
    text: string,
    header: string,
}

export interface IAccordionProps {
    content: IAccordionContent[]
}

const Accordion: FC<IAccordionProps> = ({ content }) => (
    <div className="Accordion" data-testid="Accordion">
        <Collapse accordion ghost>
            {content.map((item) => {
                return (
                    <Panel header={item.header} key={content.indexOf(item)}>
                        <p>{item.text}</p>
                    </Panel>
                )
            })}
        </Collapse>
    </div>
);

export default Accordion;
