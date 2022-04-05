### [11.5.1](https://github.com/HHogg/preshape/compare/v11.5.0...v11.5.1) (2022-04-05)


### Fixes

* **Button:** Always whit etext on coloured buttons ([05c690e](https://github.com/HHogg/preshape/commit/05c690e07db2309445c74901bae96abace49cc72))
* **Input:** Moved ref to containing div ([921d999](https://github.com/HHogg/preshape/commit/921d999de5aa5faef6b94c6416247b8a584f9758))
* **Input:** Removed duplicated CSS import ([129f7dd](https://github.com/HHogg/preshape/commit/129f7ddf1456849ed00b5f7b24039f0111934a20))
* **Placement:** Added fixed width prop to Placement element ([5009b2d](https://github.com/HHogg/preshape/commit/5009b2dd70423561cffad3474b8f6623ffa44662))
* **Table:** Typo in transition property ([d1c01e5](https://github.com/HHogg/preshape/commit/d1c01e58c5f2ad1b10c61fd3eb664f6edb940dab))

## [11.5.0](https://github.com/HHogg/preshape/compare/v11.4.0...v11.5.0) (2022-03-21)


### Features

* **Toggle:** Added Toggle component ([ab33e2e](https://github.com/HHogg/preshape/commit/ab33e2e67c35ce6b6abccb7cd821b1222eb41844))


### Fixes

* **Box:** Added padding x0 style for explicitly removing padding ([fa3dc4a](https://github.com/HHogg/preshape/commit/fa3dc4a310acffdee4e3bac6350beb6833af3630))
* **Button:** Styling on iOS for non Button elements ([ff8c251](https://github.com/HHogg/preshape/commit/ff8c251ce737e57371f1da8e8e1f1c6e984968ff))
* **Modal:** Event propagation on close icon ([6f9a74f](https://github.com/HHogg/preshape/commit/6f9a74f6a1dbbc20d4103ca53ecd12ca9c53d9ba))

## [11.4.0](https://github.com/HHogg/preshape/compare/v11.3.0...v11.4.0) (2022-03-15)


### Features

* **Box:** Added paddingHorizontal offset prop ([c2aafa1](https://github.com/HHogg/preshape/commit/c2aafa15252b63b444da6de1c4b0b5d76c02cb25))
* **Modal:** Added ModalPaddingOffset component ([b276d19](https://github.com/HHogg/preshape/commit/b276d195d703b15d1991dfe7c3eb0dbfed2e8da9))

## [11.3.0](https://github.com/HHogg/preshape/compare/v11.2.1...v11.3.0) (2022-03-06)


### Features

* **Box:** Added gapHorizontal and gapVertical props ([fcdd70c](https://github.com/HHogg/preshape/commit/fcdd70ced2dcd199d4c89ab48e7ecf971026f050))

### [11.2.1](https://github.com/HHogg/preshape/compare/v11.2.0...v11.2.1) (2022-03-05)


### Fixes

* **Input:** Handle forwared margin prop ([bcac458](https://github.com/HHogg/preshape/commit/bcac458a084fc51a561e62eb50b2f7a6249531dd))
* **InputLabel:** Spacing ([949c652](https://github.com/HHogg/preshape/commit/949c652c1f564fbcefeb82a49b4147b65c16a3fc))

## [11.2.0](https://github.com/HHogg/preshape/compare/v11.1.0...v11.2.0) (2022-03-05)


### Features

* **Modal:** Added unrender prop to control the unrender behaviour ([d4a0cce](https://github.com/HHogg/preshape/commit/d4a0cced066a0665e29aa8ba78f34b6551083290))


### Fixes

* **Input:** Flex the input content container by default ([4862701](https://github.com/HHogg/preshape/commit/4862701c1b755e47edbba38f6ffb4cdb70ec5628))
* **Modal:** Make ModalHeader and ModalFooter sticky by default ([7b15674](https://github.com/HHogg/preshape/commit/7b156748732344951d65753645898ddb6588ec9d))
* **Placement:** Added a secuduled update when the content becomes visible ([225a8e5](https://github.com/HHogg/preshape/commit/225a8e58245ffd719299112bee3aa4270b24f136))
* **Placement:** Corrected arrow rotation ([e07c420](https://github.com/HHogg/preshape/commit/e07c42085d9b0712d12d6294578b8f002f40920f))

## [11.1.0](https://github.com/HHogg/preshape/compare/v11.0.0...v11.1.0) (2022-02-16)


### Features

* **useResizeoBserver:** Adjusted to return the entire DOMRect ([91ad087](https://github.com/HHogg/preshape/commit/91ad0875e06723e8fc1b159a56ddd3f692522a2b))

## [11.0.0](https://github.com/HHogg/preshape/compare/v10.6.1...v11.0.0) (2022-01-25)


### ⚠ BREAKING CHANGES

* **Input:** Changed the Range, TextArea and InputWrapper, Input and InputAddon API.

From

```tsx
<InputWrapper label="">
  <InputAddon />
  <Input />
  <InoutAddon />
</InputWrapper>
```

to

```tsx
<InputLabel label="">
  <Input addonStart={ } addonEnd={ } />
</InputLabel>
```

### Features

* **Input:** Changed the API of InputWrapper, Input and InputAddon. ([88387c2](https://github.com/HHogg/preshape/commit/88387c25041c42cd9a13c7778e3240a0f7755960))

### [10.6.1](https://github.com/HHogg/preshape/compare/v10.6.0...v10.6.1) (2022-01-13)


### Fixes

* **SelectInputLabel:** Remove ellipsis behaviour ([da36658](https://github.com/HHogg/preshape/commit/da3665878fd564f24b46b07ea965fc6c6dc6c571))

## [10.6.0](https://github.com/HHogg/preshape/compare/v10.5.0...v10.6.0) (2022-01-12)


### Features

* **Box:** Updated ellevation to have multiple levels. ([6b8ca3b](https://github.com/HHogg/preshape/commit/6b8ca3b782ef3d2efdde22dbb7abc6a0d683299a))


### Style Changes

* **NightTheme:** Updated accent colour ([b214026](https://github.com/HHogg/preshape/commit/b214026ca07e371802001fe057781796bd1422e9))

## [10.5.0](https://github.com/HHogg/preshape/compare/v10.4.3...v10.5.0) (2022-01-10)


### Features

* **Modal:** Added ModalTitle component ([c2b2ad1](https://github.com/HHogg/preshape/commit/c2b2ad1712313c9173421ba5a35e329fc557d41b))

### [10.4.3](https://github.com/HHogg/preshape/compare/v10.4.2...v10.4.3) (2022-01-09)


### Fixes

* **Modal:** Remove border radius when snapping to edges ([820d9ab](https://github.com/HHogg/preshape/commit/820d9ab1215d738d0ba4618f56b558e90fc77993))

### [10.4.2](https://github.com/HHogg/preshape/compare/v10.4.1...v10.4.2) (2022-01-09)


### Fixes

* **Modal:** Remove flex grow from footer ([f1271bb](https://github.com/HHogg/preshape/commit/f1271bbac53b6976a5dc9385a71a2e6cd53cad02))

### [10.4.1](https://github.com/HHogg/preshape/compare/v10.4.0...v10.4.1) (2022-01-09)


### Fixes

* **Modal:** Allow Modal paddings to be overridden ([593c0be](https://github.com/HHogg/preshape/commit/593c0becd8db4984d273d85909d42d52b2a43378))

## [10.4.0](https://github.com/HHogg/preshape/compare/v10.3.0...v10.4.0) (2021-11-29)


### Features

* **Color:** Added a 4th text coloring ([db64325](https://github.com/HHogg/preshape/commit/db643258e48cda2b6814fea68ae94847d7d1b895))
* **InputWrapper:** Added description prop ([b1b1bfb](https://github.com/HHogg/preshape/commit/b1b1bfbde529df3618fbaa8f95784cebe04e1d57))
* **Modal:** Added onCloseAnimationComplete prop to Modal ([58588b7](https://github.com/HHogg/preshape/commit/58588b76fd97ddf58bd0a41207ba141756dd779f))


### Style Changes

* **DarkTheme:** Adjusted the dark theme background colours ([d584d36](https://github.com/HHogg/preshape/commit/d584d368712fb7033e97eabeac755c7330752a0a))

## [10.3.0](https://github.com/HHogg/preshape/compare/v10.2.1...v10.3.0) (2021-11-24)


### Features

* **Box:** Added paddingTop, paddingBottom, paddingLeft, paddingRight props ([c771ec6](https://github.com/HHogg/preshape/commit/c771ec64de64b51445f8d639cf3c6bce444aa60f))

### [10.2.1](https://github.com/HHogg/preshape/compare/v10.2.0...v10.2.1) (2021-11-24)


### Fixes

* **Placement:** Offset arrow ([862a3f5](https://github.com/HHogg/preshape/commit/862a3f5dcf0b85f00b35479873705c625d695ed6))

## [10.2.0](https://github.com/HHogg/preshape/compare/v10.1.2...v10.2.0) (2021-11-24)


### Features

* **InputWrapper:** Added invalid prop ([7b4b47a](https://github.com/HHogg/preshape/commit/7b4b47aaaec70e8f90175f19875e9012026681b0))


### Fixes

* **lists:** Always remove default browser list styling for uls & ols ([5070ee8](https://github.com/HHogg/preshape/commit/5070ee8f56b76fb2548795b17df789d9943a1133))
* **Placement:** Always call onClose prop ([945e1cb](https://github.com/HHogg/preshape/commit/945e1cb31fa8805a9de88ac90aff75a692b3939f))
* **Placement:** Remove pointer events when hidden ([18169df](https://github.com/HHogg/preshape/commit/18169df165b4bec23bf30f7b082d0224086b1a08))
* **SelectInputLabel:** Issue with not shrinking inside flex containers ([1f4ca02](https://github.com/HHogg/preshape/commit/1f4ca029e9376683ce65ae518db82bc637fb8e09))

### [10.1.2](https://github.com/HHogg/preshape/compare/v10.1.1...v10.1.2) (2021-11-14)


### Fixes

* **Button:** Removed old button alignment fix ([565d3a1](https://github.com/HHogg/preshape/commit/565d3a12b0493008052364a83341953f5808c127))

### [10.1.1](https://github.com/HHogg/preshape/compare/v10.1.0...v10.1.1) (2021-11-14)


### Fixes

* **Package:** Oopsie in build structure ([a8d341d](https://github.com/HHogg/preshape/commit/a8d341d2de5d65974d89190a7f25339133128a72))

## [10.1.0](https://github.com/HHogg/preshape/compare/v10.0.1...v10.1.0) (2021-11-14)


### Features

* **Button:** Added React Router aware to prop to Button ([4c5b3da](https://github.com/HHogg/preshape/commit/4c5b3da11b613017753b289e91bc40a6384a5845))

### [10.0.1](https://github.com/HHogg/preshape/compare/v10.0.0...v10.0.1) (2021-11-14)


### Fixes

* **Button:** Allow Button paddings and text style to be configured ([0f5a58e](https://github.com/HHogg/preshape/commit/0f5a58e9fc6cd410de03f47614ac723e621816de))
* **Text:** Added missing sizing class ([3af33c6](https://github.com/HHogg/preshape/commit/3af33c6a649d71d9674635dd2970dfd1aa875a14))

## [10.0.0](https://github.com/HHogg/preshape/compare/v9.0.0...v10.0.0) (2021-11-14)

### ⚠ BREAKING CHANGES

- **Transition:** Updated CSS variable name for transition-function to transition-timing-function
- **Transition:** Updated CSS variable name for transition-time to transition-duration
- **ReactRouter:** Updated to the new ReactRouter v6 API
- **Text:** All current text sizes should shift up a number (e.g. x7 -> x8), x1 is a new smaller size.
- **Base:** Removed scrollable prop in favour of overflow prop.

### Features

- **Box:** Added transitionDuration and tranisitionProperty props ([debbc89](https://github.com/HHogg/preshape/commit/debbc8926b46aa4b8cdd7dc517f267662df9f593))
- **Box:** Allow any value as well as predefined ones ([50d1369](https://github.com/HHogg/preshape/commit/50d13699feb35dcf15f2dce6e7ffcbca95fe106a))
- **ReactRouter:** Updated to ReactRouter v6 ([72314b3](https://github.com/HHogg/preshape/commit/72314b31936a013ddb081bd806ad99f44d86b065))
- **Text:** Added a new smaller size. ([7a0af82](https://github.com/HHogg/preshape/commit/7a0af826f92f9651979890a9887a8dd7149a77d8))

### Fixes

- **Base:** Removed scrollable prop, for overflow prop. ([a9b9c9c](https://github.com/HHogg/preshape/commit/a9b9c9c292864b0eca6038efaa64fc719f8ea552))
- **Box:** Added missing color type values ([fa8c101](https://github.com/HHogg/preshape/commit/fa8c101586c4c00dcf090cdc3aa14460572b0a28))
- **Buttons:** Wrapping with siblings ([8c0eac6](https://github.com/HHogg/preshape/commit/8c0eac62ed2ace90949b0c52ec54cb86911529e8))
- **Transition:** Updated CSS variable name for transition-function to transition-timing-function. ([e8f9092](https://github.com/HHogg/preshape/commit/e8f9092dd742c4ca6d32e856529556db2a1f641d))
- **Transition:** Updated CSS variable name for transition-time to transition-duration. ([0434b00](https://github.com/HHogg/preshape/commit/0434b0071de36f3c37e22bef386bb5fbf82ca0a8))

## [9.0.0](https://github.com/HHogg/preshape/compare/v8.0.0...v9.0.0) (2021-10-21)

### ⚠ BREAKING CHANGES

- **Colors:** Renumbered Accent, Positive and Negative colours. Do a find and replace and increase the numbers by 2.

### Features

- **Colors:** Added 2 veyr light colours of Accents, Positive and Negative ([95e1682](https://github.com/HHogg/preshape/commit/95e1682e1691810353139a990521fce5dd328da4))
- **Colors:** Renumbered Accent, Positive and Negative colours to make way for some lighter shades. ([a93de18](https://github.com/HHogg/preshape/commit/a93de189304e6b1dcd200f3f8365e6d886141b2a))

### Style Changes

- **Alert:** Updated style of Alert to use new light colours ([60d496f](https://github.com/HHogg/preshape/commit/60d496ffe7201e7e9a1bc35a32bec4eb358a89f1))
- **Button:** Updated style of Button to use new light colours ([4f9945e](https://github.com/HHogg/preshape/commit/4f9945ecc3b7386da83e4cb4fbf3c45ff20c28e3))
- **CheckBox:** Updated style to use new light colours ([46fc3db](https://github.com/HHogg/preshape/commit/46fc3db4bffcb0c6d81ff3337b28376e8b83338b))
- **RadioButton:** Updated style to use new light colours ([6977821](https://github.com/HHogg/preshape/commit/697782149a7e6b0ea5642651aa79870bc7c3fb65))
- **Table:** Updated style to use new light colours ([037c2a9](https://github.com/HHogg/preshape/commit/037c2a94805cc82d1042a8c0115388c5d584e685))

# [8.0.0](https://github.com/HHogg/preshape/compare/v7.1.0...v8.0.0) (2021-10-18)

### Bug Fixes

- **Build:** Case sensitivity on export ([625fd84](https://github.com/HHogg/preshape/commit/625fd8474684a0767d100cab81016799238cd9fd))

### Features

- **Box:** Added x3 border size ([27b0096](https://github.com/HHogg/preshape/commit/27b0096e44ef4a0deca63628d406257773a7cf78))
- **Button:** Removed the default heaviour of buttons to grow. ([7e01270](https://github.com/HHogg/preshape/commit/7e01270a36c5f859c9abb03843fc41ee5af8547a))
- **Button:** Updated and added more styling options with variants and sizes. ([4551847](https://github.com/HHogg/preshape/commit/455184792f8acbbcc28dbea6d831feaab405c779))
- **Icon:** Removed Icon component and exports all Feather icons under Icons[IconName]. ([946442c](https://github.com/HHogg/preshape/commit/946442ca459cdfc67076021802594a21acef2e1f))
- **Input:** Added Input sizes ([4f346d9](https://github.com/HHogg/preshape/commit/4f346d90380efda4c8a3cfd413770800beece6b8))
- **Input:** Renamed InputLabel to InputWrapper and will log an error if "disabled" is given ([6e4beb9](https://github.com/HHogg/preshape/commit/6e4beb90efc94bb3874abf93a1848b05ecb1f6e2))
- **Label:** Removed clickable styling. Use a button instead. ([d62cb17](https://github.com/HHogg/preshape/commit/d62cb1723b9af49da0f4a1dc9a5378b2eef79f23))
- **Link:** Added isTextLink prop to be used when the link is being used for text and should be styled like so. ([d612cc6](https://github.com/HHogg/preshape/commit/d612cc63074b72db1ec848fa301c28f531d349af))
- **Modal:** Added ModalFooter component ([fa64d17](https://github.com/HHogg/preshape/commit/fa64d17d1c9b228a5f1c05766ecadf2bd2c5a486))
- **Modal:** Added size property ([22ccb25](https://github.com/HHogg/preshape/commit/22ccb25cfae495d32610ffe73b11c36e4b24c748))
- **SelectIndicators:** Export the Checkbox and RadioButton Indicators from the package ([dedf558](https://github.com/HHogg/preshape/commit/dedf55800fc92bbb1ed1f6c18776e7f2264ec5df))
- **TextArea:** Renamed TextAreaLabel to TextAreaWrapper and will log an error if "disabled" is given ([92e9e9f](https://github.com/HHogg/preshape/commit/92e9e9f7eec06e2f2c7dc4ce10427a71da32f6c7))

### BREAKING CHANGES

- **Icon:** Removed Icon components and replaced with exporting all feather Icons under Icons.\*
- **TextArea:** TextAreaLabel is renamed to TextAreaWrapper
- **Input:** InputLabel is renamed to InputWrapper
- **Button:** Button auto grow has been removed. Add the grow prop back on to get it back.
- **Button:** Removed the fill prop
- **Link:** Removed underline prop, use isTextLink

# [7.1.0](https://github.com/HHogg/preshape/compare/v7.0.0...v7.1.0) (2021-10-12)

### Bug Fixes

- **Box:** Swapped over to using flex-gap instead of margin hack ([f21936a](https://github.com/HHogg/preshape/commit/f21936ab805ebd48d118e52af4a986fa0a90b8ca))

### Features

- **Box:** Added props for specifying what sides borders should be applied to ([bb785b0](https://github.com/HHogg/preshape/commit/bb785b0d3ca463da035084018acdf17fac1f780e))

# [7.0.0](https://github.com/HHogg/preshape/compare/v6.1.1...v7.0.0) (2021-10-07)

### Features

- **Icon:** Added check icon ([e74d4a3](https://github.com/HHogg/preshape/commit/e74d4a358484553f4f7f50384384977d4f6291c2))
- **Text:** Introduced a smaller sizing which is the new x1, and everything shifts up a number. ([11b8377](https://github.com/HHogg/preshape/commit/11b8377e5d7a1cec949def45cca7b8fc170917e2))

### BREAKING CHANGES

- **Text:** All Text sizes x1 - x6 need shifing up 1. I did this with a find and replace, starting with x6.

## [6.1.1](https://github.com/HHogg/preshape/compare/v6.1.0...v6.1.1) (2021-09-26)

### Bug Fixes

- **Colors:** Defined rgb CSS variables for white and black. ([2700f63](https://github.com/HHogg/preshape/commit/2700f63cb1dc2c73e865dc494fb8ff520754e967))

# [6.1.0](https://github.com/HHogg/preshape/compare/v6.0.0...v6.1.0) (2021-06-29)

### Features

- **Text:** Added an extra sizing option ([d126447](https://github.com/HHogg/preshape/commit/d1264472c79e5782e164dadd81294a7390a3cf47))

# [6.0.0](https://github.com/HHogg/preshape/compare/v5.1.0...v6.0.0) (2021-06-12)

### Bug Fixes

- **Appear:** animation value changing would cause previous stylings to remain ([6fede12](https://github.com/HHogg/preshape/commit/6fede1241225490b95b1b3f3eea4bb343436bdc5))
- **Icon:** Warning in Safari when using rems for SVG sizing. ([2044f81](https://github.com/HHogg/preshape/commit/2044f8140e27853efc1582df8279ec4c51de671b))
- **Input & Range:** Uniform height to align with the other form elements. ([4b07ca9](https://github.com/HHogg/preshape/commit/4b07ca951c54cc9757eb1da07e6bc0786521d1bb))
- **Text:** Improved sizing and spacings ([bd887c9](https://github.com/HHogg/preshape/commit/bd887c95e2fb3e3ecf86398fea3e15858cba7718))

### chore

- **React:** Updated React and FramerMotion ([b12fd7f](https://github.com/HHogg/preshape/commit/b12fd7f3be532b63c24ad30f6052308290d615ed))

### Features

- **Base:** Changed the accepted value for "basis", "grow" and "shrink" to be any valid CSS value. ([2510cd5](https://github.com/HHogg/preshape/commit/2510cd5278f6c5770d1d843a5cbb9038c66037f1))
- **Base:** Merged Flex into the Base component. ([fe91327](https://github.com/HHogg/preshape/commit/fe9132737d1ea77f89fde79468da3bb92129b1f8))
- **Box:** Renamed Base component to Box. ([95c8b87](https://github.com/HHogg/preshape/commit/95c8b876dc191c798971580e95e7458dddaa19e6))

### BREAKING CHANGES

- **React:** Major Version bumps on React and FramerMotion
- **Box:** Renamed Base component to Box.
- **Base:** Replaced basis prop values of "none", "content" and "container" with "0", "auto" and "100%".
- **Base:** Removed the Flex component. Any uses should be replaced with the Base component, and the "direction" prop should be replaced with "flex".

# [5.1.0](https://github.com/HHogg/preshape/compare/v5.0.1...v5.1.0) (2020-06-18)

### Features

- **Range:** Added a Range slider component ([294d28c](https://github.com/HHogg/preshape/commit/294d28c8df00977de8faa5ca6f39ff06335fd74d))

## [5.0.1](https://github.com/HHogg/preshape/compare/v5.0.0...v5.0.1) (2020-04-30)

### Bug Fixes

- **Link:** Forward ref ([d5fd4e5](https://github.com/HHogg/preshape/commit/d5fd4e53c37519dc022e6dc6d0c6f59cd37b0609))
- **Placement:** Pass 'visible' down in PlacementReference in a state param to prevent warning of spreading onto elements ([c923f3b](https://github.com/HHogg/preshape/commit/c923f3bb1c56d407b26db44f1bf1c3da474d7dc6))

# [5.0.0](https://github.com/HHogg/preshape/compare/v4.5.2...v5.0.0) (2020-04-21)

### Bug Fixes

- **Base:** Renamed absolute/fixed prop value 'fullscreen' to 'edge-to-edge'. ([47899c5](https://github.com/HHogg/preshape/commit/47899c54e57f8fb46932ba6ff644c9dddaeb2e1e))
- **CheckBox:** Swapped `label` prop for `children`. ([809c404](https://github.com/HHogg/preshape/commit/809c40433b0e6adca0d89258ec35db3bdf79d966))
- **Grid:** Allow grid inline CSS to override API CSS. ([72ffa21](https://github.com/HHogg/preshape/commit/72ffa21d8029cd1305fb3d24a2c1342bc7f05d16))
- **Input:** Split out the structure of the Input component. ([58f401b](https://github.com/HHogg/preshape/commit/58f401b4483852fd886277f513b405b0defbbf1e))
- **RadioButton:** Swapped `label` prop for `children`. ([acb232f](https://github.com/HHogg/preshape/commit/acb232f46a6576fb3370a1b22cd9d0653f16dca5))
- **TextArea:** Split out the structure of the TextArea component. ([bee72f9](https://github.com/HHogg/preshape/commit/bee72f94cf9240a634ab1ff306c3304fc82e3f69))
- **useIntersectionObserver:** Return the ref node ([7d7f193](https://github.com/HHogg/preshape/commit/7d7f193fb5ab07c5f93b528529215b08851b0165))
- **useResizeObserver:** Return the ref node ([5fc9ce8](https://github.com/HHogg/preshape/commit/5fc9ce8803eff15b81c5cfdff56f0b684337b197))

### Features

- **Base:** Added prop that applies a drop shadow filter that gives the appearance of elevation ([d250ac4](https://github.com/HHogg/preshape/commit/d250ac41137c85d2f1bbcc981591be49d1b3b6e5))
- **Icon:** Added 'ChevronUp' and 'ChevronDown' icons. ([bdb55a3](https://github.com/HHogg/preshape/commit/bdb55a3701615f1dae5543fa7ea45998e4a9af0d))
- **Options:** Added Options component that can be used as a dropdown selection component. ([1ffa57e](https://github.com/HHogg/preshape/commit/1ffa57e84d820bd2f6841f6ad70a2e45ac3cf314))
- **Placement:** Added ability to set the minWidth to the reference node width with ([8c54878](https://github.com/HHogg/preshape/commit/8c54878c39da001210757a8a793292a78189443a))
- **Placement:** Pass the controlled visible value down through the Reference render callback. ([2a3cdc6](https://github.com/HHogg/preshape/commit/2a3cdc663d90dc0dea3b3fbbd9bdc5fedcb22c53))

### BREAKING CHANGES

- **Placement:** PlacementReference now passes the controlled `visible` value down in the render callback. Any current spreading of these props will cause a console error.
- **TextArea:** To support addon content sitting beside TextArea element and to allow the unstyled textarea to be used the structure has been split out to be more composable. TextArea is now required to be wrapped inside the TextAraLabel component to retain the same behaviour.
- **Input:** To support addon content sitting beside Input element and to allow the unstyled input to be used the structure has been split out to be more composable. Input is now required to be wrapped inside the InputLabel component to retain the same behaviour.
- **RadioButton:** Label contents for RadioButton should now be passed in as children.
- **CheckBox:** Label contents for CheckBox should now be passed in as children.
- **Base:** Renamed Base absolute/fixed prop value 'fullscreen' to 'edge-to-edge'.

## [4.5.2](https://github.com/HHogg/preshape/compare/v4.5.1...v4.5.2) (2020-04-12)

### Bug Fixes

- **CodeBlock:** White space when not wrapping ([0b64ec7](https://github.com/HHogg/preshape/commit/0b64ec72bd4cfa355b350702eee860d4214bbf32))

## [4.5.1](https://github.com/HHogg/preshape/compare/v4.5.0...v4.5.1) (2020-04-12)

### Bug Fixes

- **BulletPoints:** Changed counter style to bold font ([0dbde3d](https://github.com/HHogg/preshape/commit/0dbde3db4ebc625a385fedbec6aa5ecc6db144cd))
- **Modal:** Added overlayBackgroundColor prop ([d146b34](https://github.com/HHogg/preshape/commit/d146b3412993bdc6d73f4b762649aa23df3dfdaf))
- **Variables:** Added missing x5 variable ([7b618e5](https://github.com/HHogg/preshape/commit/7b618e5f428aa590f4070c7789e09da2f1274f0a))

# [4.5.0](https://github.com/HHogg/preshape/compare/v4.4.0...v4.5.0) (2020-04-04)

### Features

- **Icon:** Added LinkedIn, Layers and Hexagon icons ([e0dad42](https://github.com/HHogg/preshape/commit/e0dad42d7996f3510b4860da246a965dd6d04158))

# [4.4.0](https://github.com/HHogg/preshape/compare/v4.3.2...v4.4.0) (2020-04-03)

### Bug Fixes

- useIntersectionObserver & useResizeObserver not reacting to ref changes ([0a3450d](https://github.com/HHogg/preshape/commit/0a3450d63e8bc070d64dd363eaedaf8c1e1990f7))
- **Colors:** Added RGB color variables ([92efa10](https://github.com/HHogg/preshape/commit/92efa106dbb997c624268124a9a463d4910701ad))

### Features

- **Editor:** Added Editor component ([3ffd369](https://github.com/HHogg/preshape/commit/3ffd36929026e569e088a39181701f86a57fefc1))

## [4.3.2](https://github.com/HHogg/preshape/compare/v4.3.1...v4.3.2) (2020-03-29)

### Bug Fixes

- **useUrlState:** Gracefully handle failing encoders and decoders ([3f9e324](https://github.com/HHogg/preshape/commit/3f9e324711262ce3d73c498a3981b0689351ae4a))

## [4.3.1](https://github.com/HHogg/preshape/compare/v4.3.0...v4.3.1) (2020-03-28)

### Bug Fixes

- **Modal:** Flicker from Appear component spring animation. ([5cce3dd](https://github.com/HHogg/preshape/commit/5cce3ddfd964bc497774aa83952903092de3bb95))

# [4.3.0](https://github.com/HHogg/preshape/compare/v4.2.2...v4.3.0) (2020-03-22)

### Features

- **useLocalStorage:** Added useLocalStorage hook. ([f3ee155](https://github.com/HHogg/preshape/commit/f3ee1555b3ac3e4399bc583b44e6b8b0b52509ee))
- **useUrlState:** Added useUrlState hook for managing storing state in url search parameters ([d16231f](https://github.com/HHogg/preshape/commit/d16231f0ab49f26f7210e293aa9f5d530ee3d221))

## [4.2.2](https://github.com/HHogg/preshape/compare/v4.2.1...v4.2.2) (2020-03-03)

### Bug Fixes

- **HotLoader:** Using aliased hotloader breaks consumers without hotloader ([31ab6cf](https://github.com/HHogg/preshape/commit/31ab6cfbcf9a436a50ad4dda06234011269b5d27))

## [4.2.1](https://github.com/HHogg/preshape/compare/v4.2.0...v4.2.1) (2020-03-02)

### Bug Fixes

- **Modal:** Allow maxWidth to be used with fullscreen ([0b7cf59](https://github.com/HHogg/preshape/commit/0b7cf599bca555ba5e2032757f944b15dd7989af))

# [4.2.0](https://github.com/HHogg/preshape/compare/v4.1.4...v4.2.0) (2020-03-02)

### Bug Fixes

- **Flex:** Allow maxWidth to be used with children of Flex with gap ([d23a80e](https://github.com/HHogg/preshape/commit/d23a80eaa63031fa00871ae286b4e0ad48027d65))
- **Link:** Updated Link style ([5425d1c](https://github.com/HHogg/preshape/commit/5425d1c19832ede58c2a8b98d396b0e559d49f42))
- **Tabs:** Updated Tabs style ([a353031](https://github.com/HHogg/preshape/commit/a3530318261a54f31439cd37eaf1a67f84a9f606))

### Features

- **Appear:** Added origin props to change the animation origin. Also added a transition prop to pass a Framer Motion transition. Removed the duration property, as transition allows for more flexibility in configuring the animation. ([34161a7](https://github.com/HHogg/preshape/commit/34161a72be87cbeb204e2535ca0306c7eba1a5ff))
- **Base:** Added maxHeight prop ([3db5e68](https://github.com/HHogg/preshape/commit/3db5e68b96174d7de82ba22d9709951d7a880154))
- **Modal:** Added modal component ([1b3ad32](https://github.com/HHogg/preshape/commit/1b3ad328009412cc3269e3e8a70bddc9bd7c458f))
- **Placement:** Added trigger prop to allow uncontrolled use of Placement by adding handlers onto the reference element. ([26bd669](https://github.com/HHogg/preshape/commit/26bd669302f57c836bdcc69987c0a7840d25de0a))
- **Tooltip:** Added tooltip component ([ae650b1](https://github.com/HHogg/preshape/commit/ae650b14049962581fa06ccf5c0ffcbb23f343df))

## [4.1.4](https://github.com/HHogg/preshape/compare/v4.1.3...v4.1.4) (2020-02-18)

### Bug Fixes

- **Label:** Allow Label background and text color to be configureable ([a4db56c](https://github.com/HHogg/preshape/commit/a4db56c))

## [4.1.3](https://github.com/HHogg/preshape/compare/v4.1.2...v4.1.3) (2020-02-16)

### Bug Fixes

- **useEventListener:** Pass through options ([472d8d2](https://github.com/HHogg/preshape/commit/472d8d2))

## [4.1.2](https://github.com/HHogg/preshape/compare/v4.1.1...v4.1.2) (2020-02-08)

### Bug Fixes

- **Button:** Use correct theme text color for fill style ([b93e97b](https://github.com/HHogg/preshape/commit/b93e97b))

## [4.1.1](https://github.com/HHogg/preshape/compare/v4.1.0...v4.1.1) (2020-01-30)

### Bug Fixes

- **Placement:** Dont require children as a PopperOption ([087bd03](https://github.com/HHogg/preshape/commit/087bd03))

# [4.1.0](https://github.com/HHogg/preshape/compare/v4.0.2...v4.1.0) (2020-01-29)

### Bug Fixes

- **Base:** Allow highlight color to be used as backgroundColor, borderColor and textColor. ([bfd0c1d](https://github.com/HHogg/preshape/commit/bfd0c1d))
- **Button:** Always use light text color on fill style ([c9270c4](https://github.com/HHogg/preshape/commit/c9270c4))

### Features

- **Color:** Added overlay color as a possible backgroundColor ([8ca07bd](https://github.com/HHogg/preshape/commit/8ca07bd))
- **Grid:** Add props to configure horizontal and vertical gap separately ([ed3505a](https://github.com/HHogg/preshape/commit/ed3505a))

## [4.0.2](https://github.com/HHogg/preshape/compare/v4.0.1...v4.0.2) (2020-01-27)

### Bug Fixes

- **Table:** Apply correct text color on active state ([df3f072](https://github.com/HHogg/preshape/commit/df3f072))

## [4.0.1](https://github.com/HHogg/preshape/compare/v4.0.0...v4.0.1) (2020-01-27)

### Bug Fixes

- **Placement:** Passing PopperJS props down ([48ff92b](https://github.com/HHogg/preshape/commit/48ff92b))
- **Table:** Allow paddings to be configurable ([1d11d5f](https://github.com/HHogg/preshape/commit/1d11d5f))
- **Table:** Clickable styling for other interaction events. ([11a87d2](https://github.com/HHogg/preshape/commit/11a87d2))
- **Table:** Improved row interactions styling and added an active prop, to apply active styling ([6ca5890](https://github.com/HHogg/preshape/commit/6ca5890))

# [4.0.0](https://github.com/HHogg/preshape/compare/v3.1.0...v4.0.0) (2020-01-25)

### Bug Fixes

- **Alert:** Renamed prop 'style' to 'type' ([293a32d](https://github.com/HHogg/preshape/commit/293a32d))
- **Flex:** Renamed `initial` prop to `basis`. ([a5988a6](https://github.com/HHogg/preshape/commit/a5988a6))
- **Label:** Added interaction styling to Labels ([c489cc7](https://github.com/HHogg/preshape/commit/c489cc7))
- **SVG:** Set all SVG elements to be display block. ([af34855](https://github.com/HHogg/preshape/commit/af34855))
- **ThemeSwitcher:** Updated design of theme switch ([518556b](https://github.com/HHogg/preshape/commit/518556b))

### chore

- **Icon:** Removed Spin prop ([f415577](https://github.com/HHogg/preshape/commit/f415577))

### Features

- **Appear:** Improved Appear component and fixed initial hidden animated state. ([423b445](https://github.com/HHogg/preshape/commit/423b445))
- **Application:** Removed Application components in favour of hooks and granular components. ([f9260ee](https://github.com/HHogg/preshape/commit/f9260ee))
- **Base:** Added 'fixed' prop ([4258602](https://github.com/HHogg/preshape/commit/4258602))
- **Base:** Added Black and White colors ([3d02260](https://github.com/HHogg/preshape/commit/3d02260))
- **Base:** Added borderRadius prop ([dd29606](https://github.com/HHogg/preshape/commit/dd29606))
- **Base:** Added overflow prop ([0f85e66](https://github.com/HHogg/preshape/commit/0f85e66))
- **Base:** Normalised colors options across all the color props. ([7b9d8c1](https://github.com/HHogg/preshape/commit/7b9d8c1))
- **Button:** Removed 'style' prop and added 'fill' prop. ([b3658a8](https://github.com/HHogg/preshape/commit/b3658a8))
- **Color:** Added highlight color ([0d1e48a](https://github.com/HHogg/preshape/commit/0d1e48a))
- **colors:** Teaked color palette ([08c50d2](https://github.com/HHogg/preshape/commit/08c50d2))
- **forwardRef:** Allow all components to foward refs instead of using the innerRef prop. ([1caf35f](https://github.com/HHogg/preshape/commit/1caf35f))
- **Grid:** Improved the naming of the API to allow for non auto-fit column layouts and added the ability to customise the row size. ([8a29809](https://github.com/HHogg/preshape/commit/8a29809))
- **Icon:** Added Cloud, Command, Info, Shuffle, Terminal and Triangle icons. ([0e02735](https://github.com/HHogg/preshape/commit/0e02735))
- **Icon:** Exported Icon name list ([2d8acf5](https://github.com/HHogg/preshape/commit/2d8acf5))
- **Link:** Added new underline style ([a8cb559](https://github.com/HHogg/preshape/commit/a8cb559))
- **Markdown:** Removed Markdown component ([2490bed](https://github.com/HHogg/preshape/commit/2490bed))
- **Menu:** Removed Menu component ([3a0b61a](https://github.com/HHogg/preshape/commit/3a0b61a))
- **Motion:** Added Motion component ([19ddf8c](https://github.com/HHogg/preshape/commit/19ddf8c))
- **PlacementContent:** Added PlacementContent component to easily construct tooltip like components. ([0da8bad](https://github.com/HHogg/preshape/commit/0da8bad))
- **SwitchTransition:** Removed component ([f77c3ca](https://github.com/HHogg/preshape/commit/f77c3ca))
- **TypeScript:** Converted library components over to TypeScript ([7c9fff1](https://github.com/HHogg/preshape/commit/7c9fff1))
- **useEventListener:** Added useEventListener hook ([380cfbe](https://github.com/HHogg/preshape/commit/380cfbe))
- **useIntersectionObserver:** Added useIntersectionObserver hook ([d181312](https://github.com/HHogg/preshape/commit/d181312))
- **useMatchMedia:** Added MathMedia API hook ([4d5517a](https://github.com/HHogg/preshape/commit/4d5517a))
- **useResizeObserver:** Removed Bounds component in favour of useResizeObserver hook. ([c508be4](https://github.com/HHogg/preshape/commit/c508be4))

### BREAKING CHANGES

- **SVG:** All SVG elements will be set with display block.
- **Alert:** Renamed Alerts prop 'style' to 'type'.
- **Grid:** Renamed Grid props:

autoFitWidthMax -> repeatWidthMax
autoFitWidthMin -> repeatWidthMin
columnCount -> repeat
columnWidth -> repeatWidth

- **Flex:** Renamed Flexs `initial` prop to `basis`
- **Appear:** Appear component API has changed, as it's now using framer-motion.

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

- **SelectInputLabel:** Inheriting color from nearest applied theme ([168e01a](https://github.com/HHogg/preshape/commit/168e01a))

### Features

- **Varaibles:** Add JS mapping to CSS variable names for themese ([3afcd76](https://github.com/HHogg/preshape/commit/3afcd76))

## [3.0.1](https://github.com/HHogg/preshape/compare/v3.0.0...v3.0.1) (2019-02-18)

### Bug Fixes

- **Button:** Corrected CSS variable for text sizing ([8ad4cb8](https://github.com/HHogg/preshape/commit/8ad4cb8))

# [3.0.0](https://github.com/HHogg/preshape/compare/v2.0.0...v3.0.0) (2019-02-18)

### Bug Fixes

- **Appear:** Unanimated style ([930dd5c](https://github.com/HHogg/preshape/commit/930dd5c))
- **ApplicationDetails:** Removed license and made with ([c14c406](https://github.com/HHogg/preshape/commit/c14c406))
- **Base:** Allow width and height to be added to element for canvas ([674cd76](https://github.com/HHogg/preshape/commit/674cd76))
- **Base:** Changed fRef prop to innerRef ([f6d49b4](https://github.com/HHogg/preshape/commit/f6d49b4))
- **Flex:** Update gutter prop name to gap ([a5eed99](https://github.com/HHogg/preshape/commit/a5eed99))
- **Grid:** Changed API of Grid component to allow setting of min and max width for auto-fit, also aligning naming of spacing with gap. ([f0c6490](https://github.com/HHogg/preshape/commit/f0c6490))
- **InputLabels:** Allow InputLabel and SelectInputLabel to truncate ([4eacfca](https://github.com/HHogg/preshape/commit/4eacfca))

### Features

- **Base:** Added positive and negative background colors ([ec1bc5f](https://github.com/HHogg/preshape/commit/ec1bc5f))
- **BulletPoints:** Added BulletPoints components ([f197633](https://github.com/HHogg/preshape/commit/f197633))
- **Form:** Added Form component ([8c630e8](https://github.com/HHogg/preshape/commit/8c630e8))
- **Icon:** Added Book, Cog and QuestionMark icons ([92cc657](https://github.com/HHogg/preshape/commit/92cc657))
- **InView:** Added an InView component ([2fbd355](https://github.com/HHogg/preshape/commit/2fbd355))
- **Link:** Added underline style for links within Blocks of text ([973657d](https://github.com/HHogg/preshape/commit/973657d))
- **Text:** Added ellipsis prop ([5f3429a](https://github.com/HHogg/preshape/commit/5f3429a))
- **Text:** Introduce a heading font and rename size values. ([ab4627f](https://github.com/HHogg/preshape/commit/ab4627f))

### BREAKING CHANGES

- **Flex:** To be more aligned with Grid term of spacing, renamed Flex prop gutter to gap
- **Text:** Renamed size prop values.

`title` -> `x5`
`heading` -> `x3`
`body` -> `x2`
`small` -> `x1`

- **Grid:** Grid component, replaced columnAutoFit prop with autoFitWidthMax and autoFitWidthMin props. Replaced gutter prop with gap prop.
- **ApplicationDetails:** ApplicationDetails - Removed license and licenseUrl props
- **Base:** Base component fRef prop updated to innerRef to work better with ReactRouter components

# [2.0.0](https://github.com/HHogg/preshape/compare/v1.3.0...v2.0.0) (2018-10-02)

### Bug Fixes

- **Button:** Make disabled style a bit more obvious ([8cd731c](https://github.com/HHogg/preshape/commit/8cd731c))
- **Separator:** Default props typo ([e443905](https://github.com/HHogg/preshape/commit/e443905))

### Features

- **Base:** Added fRef for forwarding refs onto the Base component ([26ace79](https://github.com/HHogg/preshape/commit/26ace79))
- **Button:** Adds joined prop to allow Button within Buttons to not be joined ([cb89a3c](https://github.com/HHogg/preshape/commit/cb89a3c))
- **Placement:** Added React Popper ([91400c5](https://github.com/HHogg/preshape/commit/91400c5))
- **Toolbar:** Swapper over Toolbar to use Placement ([417ed2a](https://github.com/HHogg/preshape/commit/417ed2a))

### BREAKING CHANGES

- **Toolbar:** Toolbar now doesn't require a targetRef but does require to be wrapped in Placement components. See example.
- **Button:** Buttons - to retain same joined behaviour, add the "joined" prop.

# [1.3.0](https://github.com/HHogg/preshape/compare/v1.2.0...v1.3.0) (2018-09-25)

### Bug Fixes

- **Toolbar:** Arrow positioning overflow ([d745b2b](https://github.com/HHogg/preshape/commit/d745b2b))

### Features

- **Icon:** Added Maximise, Minimise, Redo and Undo Icon ([b4f6f32](https://github.com/HHogg/preshape/commit/b4f6f32))
- **Toolbar:** Added 'container' prop, to configure where the element should be inserted into ([4d2c89f](https://github.com/HHogg/preshape/commit/4d2c89f))

# [1.2.0](https://github.com/HHogg/preshape/compare/v1.1.0...v1.2.0) (2018-09-24)

### Features

- **Appear:** Added 'onEntered' and 'onExited' callbacks ([21d4960](https://github.com/HHogg/preshape/commit/21d4960))
- **Base:** Added 'top' and 'bottom' values to 'absoloute' prop ([54058c1](https://github.com/HHogg/preshape/commit/54058c1))
- **Button:** Added 'active' and 'style' props ([98091a1](https://github.com/HHogg/preshape/commit/98091a1))
- **Icon:** Added Copy, Delete, Eye, File, Pencil, Save, Water icons ([d852f3c](https://github.com/HHogg/preshape/commit/d852f3c))
- **Toolbar:** Added Toolbar component ([be2add5](https://github.com/HHogg/preshape/commit/be2add5))

# [1.1.0](https://github.com/HHogg/preshape/compare/v1.0.2...v1.1.0) (2018-08-12)

### Features

- **Separator:** Added Separator component ([bdb157f](https://github.com/HHogg/preshape/commit/bdb157f))

## [1.0.2](https://github.com/HHogg/preshape/compare/v1.0.1...v1.0.2) (2018-06-18)

### Bug Fixes

- **Edge:** Nested calc() with CSS Vars on shorthand props bug workaround ([c686f35](https://github.com/HHogg/preshape/commit/c686f35))

## [1.0.1](https://github.com/HHogg/preshape/compare/v1.0.0...v1.0.1) (2018-06-13)

### Bug Fixes

- **Appear:** When server side rendering and Appear is visible, add the appear class so on first load it transitions in ([153629a](https://github.com/HHogg/preshape/commit/153629a))
- **Input & TextArea:** Removed border radius from input and textarea elements which was being added on mobile devices ([67f62b5](https://github.com/HHogg/preshape/commit/67f62b5))
