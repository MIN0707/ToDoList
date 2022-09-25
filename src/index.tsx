import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserView, MobileView} from 'react-device-detect'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserView>
			<App/>
		</BrowserView>
		<MobileView>
			<h1>This site is not allow mobile</h1>
		</MobileView>
	</React.StrictMode>
);