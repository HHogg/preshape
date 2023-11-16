import DesktopApp from './DesktopApp';
import { Media, MediaContextProvider } from './Media';
import MobileApp from './MobileApp';

const App = () => {
  return (
    <MediaContextProvider>
      <Media lessThan="sm">
        <MobileApp />
      </Media>
      <Media greaterThanOrEqual="sm">
        <DesktopApp />
      </Media>
    </MediaContextProvider>
  );
};

export default App;
