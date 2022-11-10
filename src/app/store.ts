import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// 💡 configureStore 是優化redux createStore的寫法，可以接收 reducer 後建立 store，代入已經在slice產生好的reducer
// 透過 configureStore() 建立 Redux Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
//   preloadedState,
//   enhancers: [batchedSubscribe(debounceNotify)],
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
//  💡 Define types for redux-thunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
