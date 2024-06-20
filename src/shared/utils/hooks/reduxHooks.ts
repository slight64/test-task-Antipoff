import { useDispatch } from 'react-redux';
import { store } from '../../../app/providers/StoreProvider/config/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()