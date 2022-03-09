import { NativeBaseProvider } from 'native-base';

import FlatListExample from './components/FlatListExample';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <FlatListExample />
    </NativeBaseProvider>
  );
}
