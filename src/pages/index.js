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
      keywords={['hiv', 'swindon', 'positively uk', 'peer support']}
    />
    <Title>Hello</Title>
    <p>
      I am a HIV activist and peer support worker. I split my time between
      Pembrokeshire, Swindon and London. Since being diagnosed with HIV in 2014,
      I have supported people living with HIV, working mainly with gay men in
      London, as well as supporting heterosexual men and women, and gay men in
      Swindon. I have been involved in numerous photography projects including{' '}
      <a href="https://throughpositiveeyes.org/joshua">Through Positive Eyes</a>{' '}
      and{' '}
      <a href="https://www.wearestillhere.net/story/joshua">
        We Are Still Here
      </a>
      . I have been featured in the{' '}
      <a href="http://www.swindonadvertiser.co.uk/news/19651697.hiv-photo-exhibition-shines-light-communitys-experiences/">
        Swindon Advertiser
      </a>{' '}
      and through other volunteer work I have been featured on{' '}
      <a href="https://positivelyuk.org/2015/11/22/testing-positive-josh/">
        Positively UK
      </a>
      's website, as well as on{' '}
      <a href="https://changingperceptions.co.uk/stories/reaching-the-right-people/">
        Changing Perceptions
      </a>
      .
    </p>
    <StoryTiles />
  </Fragment>
);

export default IndexPage;
