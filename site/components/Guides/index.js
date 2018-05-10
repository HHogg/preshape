import Composition from './Composition';
import GettingStarted from './GettingStarted';
import ResponsiveDesign from './ResponsiveDesign';
import Themeing from './Themeing';

export default [{
  Component: GettingStarted,
  name: 'Getting Started',
  description: 'Preshape is designed to rapidly build the basics of interfaces, with flexibility from a deliberately minimal design.',
  to: '/guides/getting-started',
}, {
  Component: ResponsiveDesign,
  name: 'Responsive Design',
  to: '/guides/responsive-design',
}, {
  Component: Composition,
  name: 'Composition',
  to: '/guides/composition',
}, {
  Component: Themeing,
  name: 'Themeing',
  to: '/guides/theming',
}];
