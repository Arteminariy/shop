import React, { useState } from 'react';
import './ScrollUpButton.css';
import {UpCircleOutlined} from '@ant-design/icons'

const ScrollUpButton = () => {

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true)
		}
		else if (scrolled <= 300) {
			setVisible(false)
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<UpCircleOutlined
			id="scrollUp"
			onClick={scrollToTop}
			style={{
				display: visible ? 'block' : 'none'
				// display: 'block'
			}}
		/>
	);
}

export default ScrollUpButton;