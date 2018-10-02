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
  description: 'Guidance around Preshapes Responsive component, and responsive design with the Javascript matchMedia API.',
  to: '/guides/responsive-design',
}, {
  Component: Composition,
  name: 'Composition',
  description: 'Guidance around composing multiple Preshape components and the underlying behaviour of the Base component.',
  to: '/guides/composition',
}, {
  Component: Themeing,
  name: 'Themeing',
  description: 'Guidance around Preshapes themeing requirements and capabilities with CSS Custom properties and accompanying Components.',
  to: '/guides/theming',
}];
