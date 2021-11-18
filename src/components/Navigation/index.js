import { Global, css } from '@emotion/react';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Container } from './styles';

const Navigation = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query LogoQuery {
      allFile(filter: { name: { eq: "joshuaa-logo" } }) {
        nodes {
          id
          name
          absolutePath
          childImageSharp {
            small: fixed(height: 68) {
              ...GatsbyImageSharpFixed
              originalName
            }
            large: fixed(height: 300) {
              ...GatsbyImageSharpFixed
              originalName
            }
          }
        }
      }
    }
  `);
  console.log({ nodes });
  const [logo] = nodes;

  return (
    <Container>
      <Global
        styles={css`
          #___gatsby {
            overflow-x: hidden;
            position: relative;
          }
        `}
      />
      <a
        href="/"
        title="Joshua Anderson - HIV Activist, peer support worker, educator"
      >
        <Image fixed={logo.childImageSharp.small} />
      </a>
    </Container>
  );
};

export default Navigation;
