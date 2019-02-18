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
