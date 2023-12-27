import {configureStore} from '@reduxjs/toolkit';
import {artworkApi} from '../api/artworkApi';

// const middlewares = getDefaultMiddleware({
//   // https://github.com/reduxjs/redux-toolkit/issues/415
//   immutableCheck: false,
// });

// if (__DEV__) {
//   const createDebugger = require("redux-flipper").default;
//   middlewares.push(createDebugger());
// }

export const store = configureStore({
  reducer: {
    [artworkApi.reducerPath]: artworkApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(artworkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
