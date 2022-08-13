import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './slices/dataSlices';

const reducer = {
	formData: formDataReducer,
};

const store = configureStore({
	reducer: reducer,
	devTools: true,
});

export default store;
