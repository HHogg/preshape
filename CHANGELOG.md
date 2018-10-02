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
