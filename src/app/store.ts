import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

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
    counter: counterReducer,
  },
  // middleware: middlewares,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
