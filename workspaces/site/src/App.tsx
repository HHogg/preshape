import DesktopApp from './components/App/AppDesktop';
import MobileApp from './components/App/AppMobile';
import { Media, MediaContextProvider } from './components/App/Media';

const App = () => {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="sm">
        <DesktopApp />
      </Media>
      <Media lessThan="sm">
        <MobileApp />
      </Media>
    </MediaContextProvider>
  );
};

export default App;
