import React from 'react';
import DirectoryMenu from "./components/DirectoryMenu";

import './homepage.scss';

const HomePage = ({items}) => {
	return (
		<div className="homepage">
			<DirectoryMenu items={items} />
		</div>
	)
};

export default HomePage;