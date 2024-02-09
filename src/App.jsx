import ApplicationContextProvider from './context/ApplicationContextProvider';
import AppBody from './AppBody';


function App() {
  return (
    <ApplicationContextProvider>
      <AppBody />
    </ApplicationContextProvider>
  );
}

export default App;
