import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Display from './components/Display';
import Create from './components/Create';
function App(): JSX.Element {
	return (
		<Provider store={store}>
			<Create />
			<Display />
		</Provider>
	);
}

export default App;
