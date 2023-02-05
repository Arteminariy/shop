import React, { FC } from 'react';
import './Picture.css';
import { Image } from 'antd';

export interface IPictureProps {
    link: string,
    width?: number
}

const Picture: FC<IPictureProps> = ({link, width}) => (
    <div className="picture" data-testid="Picture">
        <Image
            width={width}
            src={link}
        />
    </div>
);

export default Picture;
