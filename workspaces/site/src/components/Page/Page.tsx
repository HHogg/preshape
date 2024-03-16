import { Appear, Box, Text, useMatchMedia } from 'preshape';
import { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import preshapeImage from '../../assets/preshape.png';
import PageSummary, { PageSummaryConfig } from './PageSummary';

type PageProps = {
  title: string;
  description: string;
  summary?: PageSummaryConfig[];
};

export const Page = ({
  title,
  description,
  summary,
  children,
}: PropsWithChildren<PageProps>) => {
  const location = useLocation();
  const match = useMatchMedia(['1400px']);

  const urlContent = `https://preshape.hogg.io${location.pathname}`;

  return (
    <Appear animation="Fade" flex="horizontal" gap="x16" grow>
      <Helmet>
        <title>{title} ☄ Preshape</title>
        <meta content="Preshape" property="og:site_name" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="en_GB" property="og:locale" />
        <meta content={urlContent} property="og:url" />
        <meta content={preshapeImage} property="og:image" />
      </Helmet>

      <Box
        basis="0"
        grow
        paddingHorizontal="x8"
        paddingVertical="x16"
        minWidth={0}
      >
        <Box flex="vertical" gap="x16" grow maxWidth="800px">
          <Box flex="horizontal">
            <Box basis="0" grow>
              <Text margin="x4" size="x8" weight="x3">
                {title}
              </Text>

              <Text textColor="text-shade-3" margin="x4" size="x5">
                {description}
              </Text>
            </Box>
          </Box>

          <Box>{children}</Box>
        </Box>
      </Box>

      {match('1400px') && (
        <Box maxWidth="300px">
          {summary && <PageSummary summary={summary} />}
        </Box>
      )}
    </Appear>
  );
};
