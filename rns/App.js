// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {Provider as ReduxProvider} from 'react-redux';

// import Navigator from './src/navigations';
// import {store} from './src/Redux/CreateStore';

// const App = () => {
//   return (
//     // <GestureHandlerRootView>
//     <NavigationContainer>
//       <Navigator />
//     </NavigationContainer>
//     // </GestureHandlerRootView>
//   );
// };
// export default App;


import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Navigator from "./src/navigations";

import store from "./src/redux/store";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Navigator />
    </ReduxProvider>
  );
};

export default App;
