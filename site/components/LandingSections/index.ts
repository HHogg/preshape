import Animations from './Animations';
import Colors from './Colors';
import Components from './Components';
import Icons from './Icons';
import Sizing from './Sizing';
import Themes from './Themes';

const landingSections: {
  id: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ReactType<any>;
}[] = [{
  id: 'Colors',
  title: 'Colors',
  Component: Colors,
}, {
  id: 'Themes',
  title: 'Themes',
  Component: Themes,
}, {
  id: 'Sizing',
  title: 'Sizing',
  Component: Sizing,
}, {
  id: 'Icons',
  title: 'Icons',
  Component: Icons,
}, {
  id: 'Animations',
  title: 'Animations & Transitions',
  Component: Animations,
}, {
  id: 'Components',
  title: 'Components',
  Component: Components,
}];

export default landingSections;
