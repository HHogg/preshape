# [6.1.0](https://github.com/HHogg/preshape/compare/v6.0.0...v6.1.0) (2021-06-29)


### Features

* **Text:** Added an extra sizing option ([d126447](https://github.com/HHogg/preshape/commit/d1264472c79e5782e164dadd81294a7390a3cf47))

# [6.0.0](https://github.com/HHogg/preshape/compare/v5.1.0...v6.0.0) (2021-06-12)


### Bug Fixes

* **Appear:** animation value changing would cause previous stylings to remain ([6fede12](https://github.com/HHogg/preshape/commit/6fede1241225490b95b1b3f3eea4bb343436bdc5))
* **Icon:** Warning in Safari when using rems for SVG sizing. ([2044f81](https://github.com/HHogg/preshape/commit/2044f8140e27853efc1582df8279ec4c51de671b))
* **Input & Range:** Uniform height to align with the other form elements. ([4b07ca9](https://github.com/HHogg/preshape/commit/4b07ca951c54cc9757eb1da07e6bc0786521d1bb))
* **Text:** Improved sizing and spacings ([bd887c9](https://github.com/HHogg/preshape/commit/bd887c95e2fb3e3ecf86398fea3e15858cba7718))


### chore

* **React:** Updated React and FramerMotion ([b12fd7f](https://github.com/HHogg/preshape/commit/b12fd7f3be532b63c24ad30f6052308290d615ed))


### Features

* **Base:** Changed the accepted value for "basis", "grow" and "shrink" to be any valid CSS value. ([2510cd5](https://github.com/HHogg/preshape/commit/2510cd5278f6c5770d1d843a5cbb9038c66037f1))
* **Base:** Merged Flex into the Base component. ([fe91327](https://github.com/HHogg/preshape/commit/fe9132737d1ea77f89fde79468da3bb92129b1f8))
* **Box:** Renamed Base component to Box. ([95c8b87](https://github.com/HHogg/preshape/commit/95c8b876dc191c798971580e95e7458dddaa19e6))


### BREAKING CHANGES

* **React:** Major Version bumps on React and FramerMotion
* **Box:** Renamed Base component to Box.
* **Base:** Replaced basis prop values of "none", "content" and "container" with "0", "auto" and "100%".
* **Base:** Removed the Flex component. Any uses should be replaced with the Base component, and the "direction" prop should be replaced with "flex".

# [5.1.0](https://github.com/HHogg/preshape/compare/v5.0.1...v5.1.0) (2020-06-18)


### Features

* **Range:** Added a Range slider component ([294d28c](https://github.com/HHogg/preshape/commit/294d28c8df00977de8faa5ca6f39ff06335fd74d))

## [5.0.1](https://github.com/HHogg/preshape/compare/v5.0.0...v5.0.1) (2020-04-30)


### Bug Fixes

* **Link:** Forward ref ([d5fd4e5](https://github.com/HHogg/preshape/commit/d5fd4e53c37519dc022e6dc6d0c6f59cd37b0609))
* **Placement:** Pass 'visible' down in PlacementReference in a state param to prevent warning of spreading onto elements ([c923f3b](https://github.com/HHogg/preshape/commit/c923f3bb1c56d407b26db44f1bf1c3da474d7dc6))

# [5.0.0](https://github.com/HHogg/preshape/compare/v4.5.2...v5.0.0) (2020-04-21)


### Bug Fixes

* **Base:** Renamed absolute/fixed prop value 'fullscreen' to 'edge-to-edge'. ([47899c5](https://github.com/HHogg/preshape/commit/47899c54e57f8fb46932ba6ff644c9dddaeb2e1e))
* **CheckBox:** Swapped `label` prop for `children`. ([809c404](https://github.com/HHogg/preshape/commit/809c40433b0e6adca0d89258ec35db3bdf79d966))
* **Grid:** Allow grid inline CSS to override API CSS. ([72ffa21](https://github.com/HHogg/preshape/commit/72ffa21d8029cd1305fb3d24a2c1342bc7f05d16))
* **Input:** Split out the structure of the Input component. ([58f401b](https://github.com/HHogg/preshape/commit/58f401b4483852fd886277f513b405b0defbbf1e))
* **RadioButton:** Swapped `label` prop for `children`. ([acb232f](https://github.com/HHogg/preshape/commit/acb232f46a6576fb3370a1b22cd9d0653f16dca5))
* **TextArea:** Split out the structure of the TextArea component. ([bee72f9](https://github.com/HHogg/preshape/commit/bee72f94cf9240a634ab1ff306c3304fc82e3f69))
* **useIntersectionObserver:** Return the ref node ([7d7f193](https://github.com/HHogg/preshape/commit/7d7f193fb5ab07c5f93b528529215b08851b0165))
* **useResizeObserver:** Return the ref node ([5fc9ce8](https://github.com/HHogg/preshape/commit/5fc9ce8803eff15b81c5cfdff56f0b684337b197))


### Features

* **Base:** Added  prop that applies a drop shadow filter that gives the appearance of elevation ([d250ac4](https://github.com/HHogg/preshape/commit/d250ac41137c85d2f1bbcc981591be49d1b3b6e5))
* **Icon:** Added 'ChevronUp' and 'ChevronDown' icons. ([bdb55a3](https://github.com/HHogg/preshape/commit/bdb55a3701615f1dae5543fa7ea45998e4a9af0d))
* **Options:** Added Options component that can be used as a dropdown selection component. ([1ffa57e](https://github.com/HHogg/preshape/commit/1ffa57e84d820bd2f6841f6ad70a2e45ac3cf314))
* **Placement:** Added ability to set the minWidth to the reference node width with ([8c54878](https://github.com/HHogg/preshape/commit/8c54878c39da001210757a8a793292a78189443a))
* **Placement:** Pass the controlled visible value down through the Reference render callback. ([2a3cdc6](https://github.com/HHogg/preshape/commit/2a3cdc663d90dc0dea3b3fbbd9bdc5fedcb22c53))


### BREAKING CHANGES

* **Placement:** PlacementReference now passes the controlled `visible` value down in the render callback. Any current spreading of these props will cause a console error.
* **TextArea:** To support addon content sitting beside TextArea element and to allow the unstyled textarea to be used the structure has been split out to be more composable. TextArea is now required to be wrapped inside the TextAraLabel component to retain the same behaviour.
* **Input:** To support addon content sitting beside Input element and to allow the unstyled input to be used the structure has been split out to be more composable. Input is now required to be wrapped inside the InputLabel component to retain the same behaviour.
* **RadioButton:** Label contents for RadioButton should now be passed in as children.
* **CheckBox:** Label contents for CheckBox should now be passed in as children.
* **Base:** Renamed Base absolute/fixed prop value 'fullscreen' to 'edge-to-edge'.

## [4.5.2](https://github.com/HHogg/preshape/compare/v4.5.1...v4.5.2) (2020-04-12)


### Bug Fixes

* **CodeBlock:** White space when not wrapping ([0b64ec7](https://github.com/HHogg/preshape/commit/0b64ec72bd4cfa355b350702eee860d4214bbf32))

## [4.5.1](https://github.com/HHogg/preshape/compare/v4.5.0...v4.5.1) (2020-04-12)


### Bug Fixes

* **BulletPoints:** Changed counter style to bold font ([0dbde3d](https://github.com/HHogg/preshape/commit/0dbde3db4ebc625a385fedbec6aa5ecc6db144cd))
* **Modal:** Added overlayBackgroundColor prop ([d146b34](https://github.com/HHogg/preshape/commit/d146b3412993bdc6d73f4b762649aa23df3dfdaf))
* **Variables:** Added missing x5 variable ([7b618e5](https://github.com/HHogg/preshape/commit/7b618e5f428aa590f4070c7789e09da2f1274f0a))

# [4.5.0](https://github.com/HHogg/preshape/compare/v4.4.0...v4.5.0) (2020-04-04)


### Features

* **Icon:** Added LinkedIn, Layers and Hexagon icons ([e0dad42](https://github.com/HHogg/preshape/commit/e0dad42d7996f3510b4860da246a965dd6d04158))

# [4.4.0](https://github.com/HHogg/preshape/compare/v4.3.2...v4.4.0) (2020-04-03)


### Bug Fixes

* useIntersectionObserver & useResizeObserver not reacting to ref changes ([0a3450d](https://github.com/HHogg/preshape/commit/0a3450d63e8bc070d64dd363eaedaf8c1e1990f7))
* **Colors:** Added RGB color variables ([92efa10](https://github.com/HHogg/preshape/commit/92efa106dbb997c624268124a9a463d4910701ad))


### Features

* **Editor:** Added Editor component ([3ffd369](https://github.com/HHogg/preshape/commit/3ffd36929026e569e088a39181701f86a57fefc1))

## [4.3.2](https://github.com/HHogg/preshape/compare/v4.3.1...v4.3.2) (2020-03-29)


### Bug Fixes

* **useUrlState:** Gracefully handle failing encoders and decoders ([3f9e324](https://github.com/HHogg/preshape/commit/3f9e324711262ce3d73c498a3981b0689351ae4a))

## [4.3.1](https://github.com/HHogg/preshape/compare/v4.3.0...v4.3.1) (2020-03-28)


### Bug Fixes

* **Modal:** Flicker from Appear component spring animation. ([5cce3dd](https://github.com/HHogg/preshape/commit/5cce3ddfd964bc497774aa83952903092de3bb95))

# [4.3.0](https://github.com/HHogg/preshape/compare/v4.2.2...v4.3.0) (2020-03-22)


### Features

* **useLocalStorage:** Added useLocalStorage hook. ([f3ee155](https://github.com/HHogg/preshape/commit/f3ee1555b3ac3e4399bc583b44e6b8b0b52509ee))
* **useUrlState:** Added useUrlState hook for managing storing state in url search parameters ([d16231f](https://github.com/HHogg/preshape/commit/d16231f0ab49f26f7210e293aa9f5d530ee3d221))

## [4.2.2](https://github.com/HHogg/preshape/compare/v4.2.1...v4.2.2) (2020-03-03)


### Bug Fixes

* **HotLoader:** Using aliased hotloader breaks consumers without hotloader ([31ab6cf](https://github.com/HHogg/preshape/commit/31ab6cfbcf9a436a50ad4dda06234011269b5d27))

## [4.2.1](https://github.com/HHogg/preshape/compare/v4.2.0...v4.2.1) (2020-03-02)


### Bug Fixes

* **Modal:** Allow maxWidth to be used with fullscreen ([0b7cf59](https://github.com/HHogg/preshape/commit/0b7cf599bca555ba5e2032757f944b15dd7989af))

# [4.2.0](https://github.com/HHogg/preshape/compare/v4.1.4...v4.2.0) (2020-03-02)


### Bug Fixes

* **Flex:** Allow maxWidth to be used with children of Flex with gap ([d23a80e](https://github.com/HHogg/preshape/commit/d23a80eaa63031fa00871ae286b4e0ad48027d65))
* **Link:** Updated Link style ([5425d1c](https://github.com/HHogg/preshape/commit/5425d1c19832ede58c2a8b98d396b0e559d49f42))
* **Tabs:** Updated Tabs style ([a353031](https://github.com/HHogg/preshape/commit/a3530318261a54f31439cd37eaf1a67f84a9f606))


### Features

* **Appear:** Added origin props to change the animation origin. Also added a transition prop to pass a Framer Motion transition. Removed the duration property, as transition allows for more flexibility in configuring the animation. ([34161a7](https://github.com/HHogg/preshape/commit/34161a72be87cbeb204e2535ca0306c7eba1a5ff))
* **Base:** Added maxHeight prop ([3db5e68](https://github.com/HHogg/preshape/commit/3db5e68b96174d7de82ba22d9709951d7a880154))
* **Modal:** Added modal component ([1b3ad32](https://github.com/HHogg/preshape/commit/1b3ad328009412cc3269e3e8a70bddc9bd7c458f))
* **Placement:** Added trigger prop to allow uncontrolled use of Placement by adding handlers onto the reference element. ([26bd669](https://github.com/HHogg/preshape/commit/26bd669302f57c836bdcc69987c0a7840d25de0a))
* **Tooltip:** Added tooltip component ([ae650b1](https://github.com/HHogg/preshape/commit/ae650b14049962581fa06ccf5c0ffcbb23f343df))

## [4.1.4](https://github.com/HHogg/preshape/compare/v4.1.3...v4.1.4) (2020-02-18)


### Bug Fixes

* **Label:** Allow Label background and text color to be configureable ([a4db56c](https://github.com/HHogg/preshape/commit/a4db56c))

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
