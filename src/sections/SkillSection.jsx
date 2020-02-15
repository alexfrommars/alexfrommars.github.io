import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import WhiteBox from '../components/WhiteBox';
import questionSvg from '../icons/question.svg';
import awsClfPng from '../images/aws_clf.png';
import awsSaaPng from '../images/aws_saa.png';

const SkillSection = props => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: '3rem',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: 'auto',
    },
    whiteBox: {
      padding: '2rem',
    },
    containerKihon: {
      position:
        'relative' /* 親要素をrelativeにしないと子(?マーク)がはみ出すため */,
    },
    helpButton: {
      color: '#999999',
      position: 'absolute',
      right: '0',
      top: '2px',
      outline: 'none',
      width: '15px',
      cursor: 'pointer',
      ' img': { width: '1.2rem' },
    },
    otherListItem: {
      marginBottom: '1rem',
    },
    sonotaTitle: {
      color: '#262626',
      fontWeight: 'bold',
    },
    sonotaContent: {
      marginTop: '.5rem',
    },
    caret: {
      marginRight: '.5rem',
      opacity: 0.8,
    },
    link: {
      color: '#262626',
      cursor: 'pointer',
      textDecorationLine: 'underline',
    },
    awsBadge: {
      width: '80px',
      marginRight: '0.5rem',
    },
  };

  const skills = {
    フロントエンド: {
      //front end
      'JavaScript / Typescript': 3,
      'React / Redux': 3,
      'HTML5 CSS Bootstrap': 2,
    },
    バックエンド: {
      //back end
      Java: 3,
      'Node.js': 3,
      'Python ': 3,
      Docker: 2,
      Ruby: 2,
      Firebase: 1,
      Kubernetes: 1,
    },
  };

  return (
    <SectionContainer id="skill" colorNumber="2" skew>
      <SectionHeader text="Skills" colorNumber="2" />
      <div css={styles.grid}>
        <WhiteBox css={styles.whiteBox}>
          <div style={{ position: 'relative' }}>
            <h3>Front End</h3>
            <div
              css={styles.helpButton}
              onClick={() => props.setCurrentModal('SKILL_HELP')}
              onKeyDown={e => {
                if (e.keyCode === 13) props.setCurrentModal('SKILL_HELP');
              }}
              role="button"
              tabIndex={0}
            >
              <img src={questionSvg} alt="hint button" />
            </div>
            {Object.keys(skills['フロントエンド']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['フロントエンド'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Back End</h3>
            {Object.keys(skills['バックエンド']).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={skills['バックエンド'][skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Other</h3>
            <ul>
              <li css={styles.otherListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  Languages
                </div>
                <div css={styles.sonotaContent}>English</div>
              </li>
              <li css={styles.otherListItem}>
                <div css={styles.sonotaTitle}>
                  <FontAwesomeIcon
                    icon="caret-square-right"
                    style={styles.caret}
                  />
                  Favorite Tools
                </div>
                <div css={styles.sonotaContent}>VSCode, terminal</div>
              </li>
            </ul>
          </div>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

SkillSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default SkillSection;
