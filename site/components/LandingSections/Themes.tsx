import * as React from 'react' ;
import { useMediaQuery, Code, Flex, Icon, Link, Text, TypeIcon, TypeTheme } from 'preshape';
import { widthMedium, RootContext } from '../Root';
import LandingSection, { Props } from '../Landing/LandingSection';
import LinkBox from '../LinkBox/LinkBox';

const themes: {
  name: string;
  icon: TypeIcon;
  theme: TypeTheme;
}[] = [{
  name: 'Day',
  icon: 'Sun',
  theme: 'day',
}, {
  name: 'Night',
  icon: 'Moon',
  theme: 'night',
}];

export default (props: Props) => {
  const { onChangeTheme, theme: contextTheme } = React.useContext(RootContext);
  const match = useMediaQuery([widthMedium]);

  return (
    <LandingSection { ...props }>
      <Flex
          direction={ match(widthMedium) ? 'horizontal' : 'vertical' }
          gap="x4"
          margin="x4">
        { themes.map(({ name, icon, theme }) => (
          <Flex grow key={ theme }>
            <LinkBox
                active={ contextTheme === theme }
                onClick={ () => onChangeTheme(theme) }
                padding="x4"
                theme={ theme }>
              <Flex
                  alignChildren="middle"
                  direction="horizontal"
                  gap="x3">
                <Flex>
                  <Icon name={ icon } size="2rem" />
                </Flex>
                <Flex>
                  <Text align="start" strong>{ name } Theme</Text>
                  <Code align="start" weak>theme="{ theme }"</Code>
                </Flex>
              </Flex>
            </LinkBox>
          </Flex>
        )) }
      </Flex>

      <Text margin="x4">
        Themes give a UI a unique appearance, while still retaining an overal consitent
        feel of the design system. The right theme choice depends on factors such as the UI's
        focal point, the target audience or what time the majority of activty occurs.
      </Text>

      <Flex direction={ match(widthMedium) ? 'horizontal' : 'vertical' } gap="x4">
        <Flex basis={ match(widthMedium) ? 'none' : undefined } grow shrink>
          <Text>
            The <Link onClick={ () => onChangeTheme('day') } underline>Day</Link> theme may be better
            used for websites where the main focus is the text, that are being looked
            at for a short duration.
          </Text>
        </Flex>

        <Flex basis={ match(widthMedium) ? 'none' : undefined } grow shrink>
          <Text>
            The <Link onClick={ () => onChangeTheme('night') } underline>Night</Link> theme may be better
            for a UI where users spend long periods of time concentrating on the content.
          </Text>
        </Flex>
      </Flex>
    </LandingSection>

  );
};
