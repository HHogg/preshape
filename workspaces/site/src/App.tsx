import { HelmetProvider } from 'react-helmet-async';
import DesktopApp from './components/App/AppDesktop';
import MobileApp from './components/App/AppMobile';
import { Media, MediaContextProvider } from './components/App/Media';

if (process.env.NODE_ENV === 'production') {
  // @ts-ignore
  import('preshape/dist/style.css');
}

type Props = {
  helmetContext?: any;
};

const App = ({ helmetContext = {} }: Props) => {
  return (
    <HelmetProvider context={helmetContext}>
      <MediaContextProvider>
        <Media greaterThanOrEqual="sm">
          <DesktopApp />
        </Media>
        <Media lessThan="sm">
          <MobileApp />
        </Media>
      </MediaContextProvider>
    </HelmetProvider>
  );
};

export default App;
