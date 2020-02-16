## [4.1.3](https://github.com/HHogg/preshape/compare/v4.1.2...v4.1.3) (2020-02-16)


### Bug Fixes

* **useEventListener:** Pass through options ([472d8d2](https://github.com/HHogg/preshape/commit/472d8d2))

## [4.1.2](https://github.com/HHogg/preshape/compare/v4.1.1...v4.1.2) (2020-02-08)


### Bug Fixes

* **Button:** Use correct theme text color for fill style ([b93e97b](https://github.com/HHogg/preshape/commit/b93e97b))

## [4.1.1](https://github.com/HHogg/preshape/compare/v4.1.0...v4.1.1) (2020-01-30)


### Bug Fixes

* **Placement:** Dont require children as a PopperOption ([087bd03](https://github.com/HHogg/preshape/commit/087bd03))

# [4.1.0](https://github.com/HHogg/preshape/compare/v4.0.2...v4.1.0) (2020-01-29)


### Bug Fixes

* **Base:** Allow highlight color to be used as backgroundColor, borderColor and textColor. ([bfd0c1d](https://github.com/HHogg/preshape/commit/bfd0c1d))
* **Button:** Always use light text color on fill style ([c9270c4](https://github.com/HHogg/preshape/commit/c9270c4))


### Features

* **Color:** Added overlay color as a possible backgroundColor ([8ca07bd](https://github.com/HHogg/preshape/commit/8ca07bd))
* **Grid:** Add props to configure horizontal and vertical gap separately ([ed3505a](https://github.com/HHogg/preshape/commit/ed3505a))

## [4.0.2](https://github.com/HHogg/preshape/compare/v4.0.1...v4.0.2) (2020-01-27)


### Bug Fixes

* **Table:** Apply correct text color on active state ([df3f072](https://github.com/HHogg/preshape/commit/df3f072))

## [4.0.1](https://github.com/HHogg/preshape/compare/v4.0.0...v4.0.1) (2020-01-27)


### Bug Fixes

* **Placement:** Passing PopperJS props down ([48ff92b](https://github.com/HHogg/preshape/commit/48ff92b))
* **Table:** Allow paddings to be configurable ([1d11d5f](https://github.com/HHogg/preshape/commit/1d11d5f))
* **Table:** Clickable styling for other interaction events. ([11a87d2](https://github.com/HHogg/preshape/commit/11a87d2))
* **Table:** Improved row interactions styling and added an active prop, to apply active styling ([6ca5890](https://github.com/HHogg/preshape/commit/6ca5890))

# [4.0.0](https://github.com/HHogg/preshape/compare/v3.1.0...v4.0.0) (2020-01-25)


### Bug Fixes

* **Alert:** Renamed prop 'style' to 'type' ([293a32d](https://github.com/HHogg/preshape/commit/293a32d))
* **Flex:** Renamed `initial` prop to `basis`. ([a5988a6](https://github.com/HHogg/preshape/commit/a5988a6))
* **Label:** Added interaction styling to Labels ([c489cc7](https://github.com/HHogg/preshape/commit/c489cc7))
* **SVG:** Set all SVG elements to be display block. ([af34855](https://github.com/HHogg/preshape/commit/af34855))
* **ThemeSwitcher:** Updated design of theme switch ([518556b](https://github.com/HHogg/preshape/commit/518556b))


### chore

* **Icon:** Removed Spin prop ([f415577](https://github.com/HHogg/preshape/commit/f415577))


### Features

* **Appear:** Improved Appear component and fixed initial hidden animated state. ([423b445](https://github.com/HHogg/preshape/commit/423b445))
* **Application:** Removed Application components in favour of hooks and granular components. ([f9260ee](https://github.com/HHogg/preshape/commit/f9260ee))
* **Base:** Added 'fixed' prop ([4258602](https://github.com/HHogg/preshape/commit/4258602))
* **Base:** Added Black and White colors ([3d02260](https://github.com/HHogg/preshape/commit/3d02260))
* **Base:** Added borderRadius prop ([dd29606](https://github.com/HHogg/preshape/commit/dd29606))
* **Base:** Added overflow prop ([0f85e66](https://github.com/HHogg/preshape/commit/0f85e66))
* **Base:** Normalised colors options across all the color props. ([7b9d8c1](https://github.com/HHogg/preshape/commit/7b9d8c1))
* **Button:** Removed 'style' prop and added 'fill' prop. ([b3658a8](https://github.com/HHogg/preshape/commit/b3658a8))
* **Color:** Added highlight color ([0d1e48a](https://github.com/HHogg/preshape/commit/0d1e48a))
* **colors:** Teaked color palette ([08c50d2](https://github.com/HHogg/preshape/commit/08c50d2))
* **forwardRef:** Allow all components to foward refs instead of using the innerRef prop. ([1caf35f](https://github.com/HHogg/preshape/commit/1caf35f))
* **Grid:** Improved the naming of the API to allow for non auto-fit column layouts and added the ability to customise the row size. ([8a29809](https://github.com/HHogg/preshape/commit/8a29809))
* **Icon:** Added Cloud, Command, Info, Shuffle, Terminal and Triangle icons. ([0e02735](https://github.com/HHogg/preshape/commit/0e02735))
* **Icon:** Exported Icon name list ([2d8acf5](https://github.com/HHogg/preshape/commit/2d8acf5))
* **Link:** Added new underline style ([a8cb559](https://github.com/HHogg/preshape/commit/a8cb559))
* **Markdown:** Removed Markdown component ([2490bed](https://github.com/HHogg/preshape/commit/2490bed))
* **Menu:** Removed Menu component ([3a0b61a](https://github.com/HHogg/preshape/commit/3a0b61a))
* **Motion:** Added Motion component ([19ddf8c](https://github.com/HHogg/preshape/commit/19ddf8c))
* **PlacementContent:** Added PlacementContent component to easily construct tooltip like components. ([0da8bad](https://github.com/HHogg/preshape/commit/0da8bad))
* **SwitchTransition:** Removed component ([f77c3ca](https://github.com/HHogg/preshape/commit/f77c3ca))
* **TypeScript:** Converted library components over to TypeScript ([7c9fff1](https://github.com/HHogg/preshape/commit/7c9fff1))
* **useEventListener:** Added useEventListener hook ([380cfbe](https://github.com/HHogg/preshape/commit/380cfbe))
* **useIntersectionObserver:** Added useIntersectionObserver hook ([d181312](https://github.com/HHogg/preshape/commit/d181312))
* **useMatchMedia:** Added MathMedia API hook ([4d5517a](https://github.com/HHogg/preshape/commit/4d5517a))
* **useResizeObserver:** Removed Bounds component in favour of useResizeObserver hook. ([c508be4](https://github.com/HHogg/preshape/commit/c508be4))


### BREAKING CHANGES

* **SVG:** All SVG elements will be set with display block.
* **Alert:** Renamed Alerts  prop 'style' to 'type'.
* **Grid:** Renamed Grid props:

autoFitWidthMax -> repeatWidthMax
autoFitWidthMin -> repeatWidthMin
columnCount -> repeat
columnWidth -> repeatWidth
* **Flex:** Renamed Flexs `initial` prop to `basis`
* **Appear:** Appear component API has changed, as it's now using framer-motion.

- `time` prop has been renamed to `duration` and accepts a number in milliseconds
- `onEntered` and `onExited` has been renamed to `onAnimationStart` and `onAnimationEnd`.
* **PlacementContent:** Removed Toolbar component as it's trivial to reconstruct with other components.
* **forwardRef:** - Removed the `innerRef` prop as all components use the forwardRef API so the `ref` prop can be used.
- Removed the `Component` prop. The rendered tag for Base and some other comoponents can be configured with the `tag` prop. Previous functionality of the passing in React components is no more.
* **Icon:** Removed Progress icon
* **Icon:** Removed 'spin' prop from Icon
* **useResizeObserver:** Removed Bounds component in favour of useResizerObserver hook.
* **Button:** Replaced the 'style' prop for a 'fill' prop, where 'outline' styling is still the default.
* **Markdown:** Removed Markdown component
* **SwitchTransition:** Removed the SwitchTransition component
* **Base:** - Removed implicit theme color when using a true value
- Removed simple shade-N values for explicit text and background versions
- Renamed `color` prop to `textColor`
* **Application:** Removed all Application components, and reaplced theme changing behaviour with `useTheme` hook and scrolling behaviour with `useWindowScrollTo` hook.
* **Menu:** Removed Menu components

# [3.1.0](https://github.com/HHogg/preshape/compare/v3.0.1...v3.1.0) (2019-02-19)


### Bug Fixes

* **SelectInputLabel:** Inheriting color from nearest applied theme ([168e01a](https://github.com/HHogg/preshape/commit/168e01a))


### Features

* **Varaibles:** Add JS mapping to CSS variable names for themese ([3afcd76](https://github.com/HHogg/preshape/commit/3afcd76))

## [3.0.1](https://github.com/HHogg/preshape/compare/v3.0.0...v3.0.1) (2019-02-18)


### Bug Fixes

* **Button:** Corrected CSS variable for text sizing ([8ad4cb8](https://github.com/HHogg/preshape/commit/8ad4cb8))

# [3.0.0](https://github.com/HHogg/preshape/compare/v2.0.0...v3.0.0) (2019-02-18)


### Bug Fixes

* **Appear:** Unanimated style ([930dd5c](https://github.com/HHogg/preshape/commit/930dd5c))
* **ApplicationDetails:** Removed license and made with ([c14c406](https://github.com/HHogg/preshape/commit/c14c406))
* **Base:** Allow width and height to be added to element for canvas ([674cd76](https://github.com/HHogg/preshape/commit/674cd76))
* **Base:** Changed fRef prop to innerRef ([f6d49b4](https://github.com/HHogg/preshape/commit/f6d49b4))
* **Flex:** Update gutter prop name to gap ([a5eed99](https://github.com/HHogg/preshape/commit/a5eed99))
* **Grid:** Changed API of Grid component to allow setting of min and max width for auto-fit, also aligning naming of spacing with gap. ([f0c6490](https://github.com/HHogg/preshape/commit/f0c6490))
* **InputLabels:** Allow InputLabel and SelectInputLabel to truncate ([4eacfca](https://github.com/HHogg/preshape/commit/4eacfca))


### Features

* **Base:** Added positive and negative background colors ([ec1bc5f](https://github.com/HHogg/preshape/commit/ec1bc5f))
* **BulletPoints:** Added BulletPoints components ([f197633](https://github.com/HHogg/preshape/commit/f197633))
* **Form:** Added Form component ([8c630e8](https://github.com/HHogg/preshape/commit/8c630e8))
* **Icon:** Added Book, Cog and QuestionMark icons ([92cc657](https://github.com/HHogg/preshape/commit/92cc657))
* **InView:** Added an InView component ([2fbd355](https://github.com/HHogg/preshape/commit/2fbd355))
* **Link:** Added underline style for links within Blocks of text ([973657d](https://github.com/HHogg/preshape/commit/973657d))
* **Text:** Added ellipsis prop ([5f3429a](https://github.com/HHogg/preshape/commit/5f3429a))
* **Text:** Introduce a heading font and rename size values. ([ab4627f](https://github.com/HHogg/preshape/commit/ab4627f))


### BREAKING CHANGES

* **Flex:** To be more aligned with Grid term of spacing, renamed Flex prop gutter to gap
* **Text:** Renamed size prop values.

`title` -> `x5`
`heading` -> `x3`
`body` -> `x2`
`small` -> `x1`
* **Grid:** Grid component, replaced columnAutoFit prop with autoFitWidthMax and autoFitWidthMin props. Replaced gutter prop with gap prop.
* **ApplicationDetails:** ApplicationDetails - Removed license and licenseUrl props
* **Base:** Base component fRef prop updated to innerRef to work better with ReactRouter components

# [2.0.0](https://github.com/HHogg/preshape/compare/v1.3.0...v2.0.0) (2018-10-02)


### Bug Fixes

* **Button:** Make disabled style a bit more obvious ([8cd731c](https://github.com/HHogg/preshape/commit/8cd731c))
* **Separator:** Default props typo ([e443905](https://github.com/HHogg/preshape/commit/e443905))


### Features

* **Base:** Added fRef for forwarding refs onto the Base component ([26ace79](https://github.com/HHogg/preshape/commit/26ace79))
* **Button:** Adds joined prop to allow Button within Buttons to not be joined ([cb89a3c](https://github.com/HHogg/preshape/commit/cb89a3c))
* **Placement:** Added React Popper ([91400c5](https://github.com/HHogg/preshape/commit/91400c5))
* **Toolbar:** Swapper over Toolbar to use Placement ([417ed2a](https://github.com/HHogg/preshape/commit/417ed2a))


### BREAKING CHANGES

* **Toolbar:** Toolbar now doesn't require a targetRef but does require to be wrapped in Placement components. See example.
* **Button:** Buttons - to retain same joined behaviour, add the "joined" prop.

# [1.3.0](https://github.com/HHogg/preshape/compare/v1.2.0...v1.3.0) (2018-09-25)


### Bug Fixes

* **Toolbar:** Arrow positioning overflow ([d745b2b](https://github.com/HHogg/preshape/commit/d745b2b))


### Features

* **Icon:** Added Maximise, Minimise, Redo and Undo Icon ([b4f6f32](https://github.com/HHogg/preshape/commit/b4f6f32))
* **Toolbar:** Added 'container' prop, to configure where the element should be inserted into ([4d2c89f](https://github.com/HHogg/preshape/commit/4d2c89f))

# [1.2.0](https://github.com/HHogg/preshape/compare/v1.1.0...v1.2.0) (2018-09-24)


### Features

* **Appear:** Added 'onEntered' and 'onExited' callbacks ([21d4960](https://github.com/HHogg/preshape/commit/21d4960))
* **Base:** Added 'top' and 'bottom' values to 'absoloute' prop ([54058c1](https://github.com/HHogg/preshape/commit/54058c1))
* **Button:** Added 'active' and 'style' props ([98091a1](https://github.com/HHogg/preshape/commit/98091a1))
* **Icon:** Added Copy, Delete, Eye, File, Pencil, Save, Water icons ([d852f3c](https://github.com/HHogg/preshape/commit/d852f3c))
* **Toolbar:** Added Toolbar component ([be2add5](https://github.com/HHogg/preshape/commit/be2add5))

# [1.1.0](https://github.com/HHogg/preshape/compare/v1.0.2...v1.1.0) (2018-08-12)


### Features

* **Separator:** Added Separator component ([bdb157f](https://github.com/HHogg/preshape/commit/bdb157f))

## [1.0.2](https://github.com/HHogg/preshape/compare/v1.0.1...v1.0.2) (2018-06-18)


### Bug Fixes

* **Edge:** Nested calc() with CSS Vars on shorthand props bug workaround ([c686f35](https://github.com/HHogg/preshape/commit/c686f35))

## [1.0.1](https://github.com/HHogg/preshape/compare/v1.0.0...v1.0.1) (2018-06-13)


### Bug Fixes

* **Appear:** When server side rendering and Appear is visible, add the appear class so on first load it transitions in ([153629a](https://github.com/HHogg/preshape/commit/153629a))
* **Input & TextArea:** Removed border radius from input and textarea elements which was being added on mobile devices ([67f62b5](https://github.com/HHogg/preshape/commit/67f62b5))
