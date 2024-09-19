// src/redux/store.d.ts
import { store } from './store'; // Adjust the path as needed

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
