import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import closeSvg from '../../icons/close.svg';
import Stars from '../Stars';

const propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

const SkillHelp = props => {
  const articles = [
    {
      level: 3,
      description: 'Over a year of experience.',
    },
    {
      level: 2,
      description: 'I can refer to it.',
    },
    {
      level: 1,
      description: 'Have used to some extent.',
    },
  ];

  const styles = {
    modalOverlay: {
      alignItems: 'center',
      background: 'rgba(64,64,64,0.7)',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 500,
    },
    modalContent: {
      margin: '1rem',
      maxHeight: '90vh',
      maxWidth: '600px',
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
    },
    closeButton: {
      background: `url(${closeSvg})`,
      border: 0,
      boxSizing: 'border-box',
      cursor: 'pointer',
      height: '18px',
      padding: 0,
      position: 'absolute',
      right: '1rem',
      top: '1rem',
      width: '18px',
    },
    articleContainer: {
      marginBottom: '1.5rem',
      ':last-child': { marginBottom: 0 },
    },
    articleDescription: {
      fontSize: '0.8rem',
    },
  };

  return (
    <ReactModal
      isOpen
      closeTimeoutMS={100}
      onRequestClose={() => props.setCurrentModal(null)}
      style={{
        overlay: styles.modalOverlay,
        content: styles.modalContent,
      }}
      ariaHideApp={false}
    >
      <button
        css={styles.closeButton}
        onClick={() => props.setCurrentModal(null)}
      />

      {articles.map(article => (
        <div css={styles.articleContainer} key={article.level}>
          <div>
            <Stars countOfStars={article.level} />
          </div>
          <div css={styles.articleDescription}>{article.description}</div>
        </div>
      ))}
    </ReactModal>
  );
};

SkillHelp.propTypes = propTypes;

export default SkillHelp;
