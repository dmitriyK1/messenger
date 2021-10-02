import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import { Chat } from './Chat';
import { store } from '../redux/store';

export const App = () => {
  return <Provider store={store}>
    <CssBaseline />
    <Chat />
  </Provider>;
};
