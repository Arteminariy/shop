import React, { FC } from 'react';
import './Picture.css';
import { Image } from 'antd';

export interface IPictureProps {
    link: string,
    width?: number,
    preview: boolean
}

const Picture: FC<IPictureProps> = ({link, width, preview}) => (
	<div className='picture' data-testid='Picture'>
		<Image
			preview={preview}
			width={width}
			src={link}
		/>
	</div>
);

export default Picture;
