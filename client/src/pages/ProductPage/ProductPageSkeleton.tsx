import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

export interface IProductPageSkeleton {}

const ProductPageSkeleton: FC<IProductPageSkeleton> = ({}) => {
	return (
		<ContentLoader
			speed={2}
			width={1200}
			height={1000}
			viewBox="0 0 1200 1000"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="50" y="0" rx="0" ry="0" width="500" height="500" />
			<rect x="650" y="0" rx="0" ry="0" width="500" height="70" />
			<rect x="650" y="80" rx="0" ry="0" width="500" height="45" />
			<rect x="650" y="120" rx="0" ry="0" width="500" height="45" />
			<rect x="650" y="170" rx="0" ry="0" width="500" height="50" />
			<rect x="650" y="220" rx="0" ry="0" width="500" height="80" />
			<rect x="650" y="370" rx="0" ry="0" width="130" height="45" />
			<rect x="0" y="550" rx="0" ry="0" width="1200" height="45" />
			<rect x="0" y="605" rx="0" ry="0" width="1200" height="70" />
			<rect x="0" y="685" rx="0" ry="0" width="1200" height="35" />
			<rect x="0" y="730" rx="0" ry="0" width="230" height="45" />
			<rect x="240" y="730" rx="0" ry="0" width="230" height="45" />
			<rect x="0" y="785" rx="0" ry="0" width="230" height="45" />
			<rect x="240" y="785" rx="0" ry="0" width="230" height="45" />
		</ContentLoader>
	);
};

export default ProductPageSkeleton;
