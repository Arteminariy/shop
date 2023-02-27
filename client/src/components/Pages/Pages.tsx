import { Pagination } from 'antd';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Pages.css';

export interface IPagesProps {}

const Pages: FC<IPagesProps> = () => {
	const pages: number[] = [];

	const { totalCount, limit, page } = useSelector(
		(state: RootState) => state.product
	);

	const pageCount = Math.ceil(totalCount / limit);

	for (let i = 0; i < pageCount; i++) {
		pages.push(i + 1);
	}

	return <Pagination defaultCurrent={1} total={pages.length} />;
};

export default Pages;
