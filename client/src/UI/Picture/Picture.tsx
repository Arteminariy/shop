import React, { FC } from 'react';
import './Picture.css';
import { Image } from 'antd';

export interface IPictureProps {
    link: string,
    width?: number,
    height?: number,
    preview?: boolean
}

const Picture: FC<IPictureProps> = ({link, width, height, preview = false}) => (
	<div className="picture" data-testid="Picture">
		<Image
			preview={preview}
			width={width}
			height={height}
			src={link}
		/>
	</div>
);

export default Picture;
