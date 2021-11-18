import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import ContextProvider from '~/provider/ContextProvider';
import {
  breakpoints,
  Block,
  GlobalStyle,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles';
import Navigation from '../components/Navigation';

import './styles.css';

const x = {
  'joshuaa-logo.png': {
    href: 'https://www.joshuaa.uk',
    title: 'Joshua Anderson - HIV Activist, peer support worker, educator',
  },
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`;
const Footer = styled.footer`
  font-size: 0.8rem;
  margin-top: 20px;
`;

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Navigation />
      <Wrapper>
        {children}
        <Block />
        <Footer>
          <p>
            &copy; Joshua Anderson 2021 |{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </Footer>
      </Wrapper>
    </ContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
