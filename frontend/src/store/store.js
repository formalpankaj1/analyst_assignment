import { configureStore } from '@reduxjs/toolkit';
import profileslicereducer from './profileslice';

const store = configureStore({
    reducer: {
        profile: profileslicereducer,
    },
});

export default store;
