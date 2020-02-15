import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import { rhythm } from '../utils/typography';

const GaiyouSection = props => {
  const articles = [
    [
      'What can I do？',
      'I can do a handstand.',
    ],
    [
      'Thoughts on Blue Cheese？',
      'Love it in a crepe, as a buffalo wing dipping sauce, and as a crumbled salad topping.' +
        ' Note: I am lactose intolerant.',
    ],
    [
      'Github Account?',
      'Checkout my Github account here<a href="https://github.com/alexfrommars" target="_blank">',
    ],
    [
      'Can I work now？',
      'I graduate May2020',
    ],
  ];

  const styles = {
    container: {
      display: 'grid',
      gridGap: rhythm(1.5),
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      margin: 'auto',
      maxWidth: '700px',
      padding: rhythm(1.5),
    },
    caret: {
      color: '#6292F1',
      marginRight: rhythm(1 / 8),
      width: '0.875em',
    },
    title: {
      fontWeight: 'bold',
      borderBottom: '1px dotted rgba(0,0,0,0.3)',
      marginBottom: rhythm(0.5),
    },
    button: {
      background: '#fff',
      border: '5px solid #6292F1',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: '#6292F1',
      display: 'block',
      margin: '60px auto 0',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      width: '300px',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="gaiyou">
      <SectionHeader text="Overview" colorNumber="1" />

      <WhiteBox css={styles.container}>
        {articles.map(article => (
          <li key={article[0]}>
            <div css={styles.title}>
              <FontAwesomeIcon icon="caret-square-right" style={styles.caret} />
              {article[0]}
            </div>
            {/* eslint-disable-next-line */}
            <div dangerouslySetInnerHTML={{ __html: article[1] }} />
          </li>
        ))}
      </WhiteBox>

      <button
        css={styles.button}
        onClick={() => props.setCurrentModal('CONTACT')}
      >
        Contact Me
      </button>
    </SectionContainer>
  );
};

GaiyouSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default GaiyouSection;
