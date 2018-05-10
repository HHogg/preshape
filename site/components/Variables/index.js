import Colors from './Colors';
import Sizing from './Sizing';
import Themes from './Themes';

export default [{
  Component: Colors,
  name: 'Colours',
  id: 'Colours',
  to: '/variables',
}, {
  Component: Themes,
  name: 'Themes',
  id: 'Themes',
  to: '/variables/#Themes',
}, {
  Component: Sizing,
  name: 'Sizing',
  id: 'Sizing',
  to: '/variables/#Sizing',
}];
