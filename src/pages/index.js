import React, { Fragment } from 'react';
import loadable from '@loadable/component';

import SEO from '~/components/seo';
import { Title } from '~/utils/styles';

import StoryTilesLoader from '../components/StoryTilesLoader';

const StoryTiles = loadable(() => import('../components/StoryTiles'), {
  fallback: <StoryTilesLoader />,
});

const IndexPage = () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={[
        'software',
        'engineering',
        'swindon',
        'london',
        'react',
        'javascript',
        'node',
      ]}
    />
    <Title></Title>
    <p></p>
    <StoryTiles />
  </Fragment>
);

export default IndexPage;
