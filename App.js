import { NativeBaseProvider } from 'native-base';

import FlatListExample from './components/FlatListExample';
import UserStore from './stores/UserStore';

const userStore = new UserStore();

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <FlatListExample store={userStore} />
    </NativeBaseProvider>
  );
}
