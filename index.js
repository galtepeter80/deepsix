import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Testing from './testing';
import ContainerOuter from './components/ContainerOuter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let defaultProps = {
  name: ""
  //,...this.state
};


root.render(
	<React.StrictMode>
		<ContainerOuter>
			
		</ContainerOuter>
	</React.StrictMode>
);


