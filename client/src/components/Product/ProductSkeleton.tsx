import React, { FC } from 'react';
import ContentLoader from 'react-content-loader'

export interface IProductSkeleton {}

const ProductSkeleton: FC<IProductSkeleton> = ({}) => {
	return (
		<ContentLoader
			speed={2}
			width={300}
			height={520}
			viewBox="0 0 300 520"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="10" y="10" rx="0" ry="0" width="280" height="280" />
			<rect x="10" y="300" rx="0" ry="0" width="280" height="60" />
			<rect x="10" y="370" rx="0" ry="0" width="280" height="30" />
			<rect x="10" y="410" rx="0" ry="0" width="280" height="30" />
			<rect x="50" y="463" rx="0" ry="0" width="200" height="40" />
		</ContentLoader>
	);
};

export default ProductSkeleton;
