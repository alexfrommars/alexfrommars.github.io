import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import jissekiCompare from '../images/jisseki-compare.png';
import jissekiNote from '../images/jisseki-note.png';
import jissekiPict from '../images/jisseki-pict.png';
import jissekiRebalancer from '../images/jisseki-rebalancer.jpg';
import jissekiTravelrPng from '../images/jisseki-travelr.png';
import jissekiYuuniJpg from '../images/jisseki-yuuni.jpg';
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
  const performances = [
    {
      name: 'Oxfam',
      description:
        'Oxfam UT is a nonprofit organization focused on alleviating poverty and hunger',
      techStack: [{ name: 'React', description: 'UI' }],
      webpageURL: 'https://www.oxfamamerica.org/',
      githubURL: 'https://www.instagram.com/oxfamut/',
      imgPath: jissekiCompare,
    },
    {
      name: 'Tic Tac Toe game',
      description: 'made a tic tac toe game in React。',
      techStack: [
        { name: 'create-react-app', description: 'Front-end Framework' },
        { name: 'lil tic tac toe', description: 'game' },
        { name: 'first try', description: 'woo!' },
        { name: 'just sumn cute', description: 'it works' },
        { name: 'Node.js', description: 'API' },
      ],
      webpageURL: 'https://github.com/alexfrommars/my-reactapp',
      githubURL: 'https://github.com/alexfrommars/my-reactapp',
      imgPath: jissekiPict,
    },
    {
      name: 'Heroku',
      description:
        'First deployment with Heroku。',
      techStack: [
        
      ],
      webpageURL: 'https://github.com/alexfrommars/Herokuapp',
      githubURL: 'https://github.com/alexfrommars/Herokuapp',
      imgPath: jissekiRebalancer,
    },
    {
      name: 'FRI',
      description:
        'I did some undergraduate research creating BAP peptides.',
      techStack: [
        { name: 'Microwave Peptide Synthesizer', description: 'make peptides' },
        { name: 'HPLC and LCMS', description: 'check purity' },
        { name: 'EHS', description: 'lab safety' },
        { name: 'NMR and MS', description: 'expensive' },
        {
          name: 'Lab stuff',
          description: 'we focused on creating supramolecular sensors',
        },
        { name: 'Supramolecular Sensors', description: 'Ansyln' },
      ],
      webpageURL: 'https://cns.utexas.edu/component/cobalt/item/1453-supramolecular-sensors?Itemid=1971',
      githubURL: 'https://cns.utexas.edu/component/cobalt/item/1453-supramolecular-sensors?Itemid=1971',
      blogPath: '/blog/2018-07-31-デモシステムを作成しました/',
      imgPath: jissekiTravelrPng,
    },
    {
      name: 'Twitter is a hellscape',
      description:
        'I enjoy Twitter, heres a post I like:',
      techStack: [
        { name: 'They really should ban the nazis', description: ':(' },
        { name: 'The CEO of twitter is a simp', description: ':l' },
      ],
      webpageURL: 'https://twitter.com/queersocialism/status/1182034098426204161?s=20',
      githubURL: 'https://twitter.com/queersocialism/status/1182034098426204161?s=20',
      imgPath: jissekiNote,
    },
    {
      name: 'Yuuniworks Web',
      description:
        'This is the template I use for this site。',
      techStack: [
        { name: 'Gatsby', description: 'Static Site Generator' },
        { name: 'GraphQL', description: 'クエリ言語' },
        { name: 'AWS Lambda', description: '問い合わせフォーム用バックエンド' },
        { name: 'AWS SES', description: '問い合わせフォーム用バックエンド' },
        { name: 'Netlify CMS', description: 'CMS' },
        { name: 'Sentry', description: 'クライアントサイドのエラー収集' },
      ],
      webpageURL: 'https://www.yuuniworks.com',
      githubURL: 'https://github.com/junkboy0315/yuuni-web',
      blogPath: '/blog/2018-04-09-jamstackなwebサイトの作成/',
      imgPath: jissekiYuuniJpg,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
      filter: 'brightness(95%) grayscale(30%)',
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      margin: '1rem 0',
      textDecoration: 'none',
    },
    description: {
      fontSize: '0.8rem',
      marginBottom: '0.8rem',
    },
    externalLink: {
      color: '#999',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginRight: '1rem',
      ':hover': {
        background: '#eee',
      },
    },
    techStackGrid: {
      borderTop: '1px dotted #999',
      display: 'grid',
      fontSize: '0.8rem',
      gridGap: '0.4rem',
      gridTemplateColumns: '1fr 1fr',
      marginTop: '0.8rem',
      paddingTop: '1rem',
      ' > span': {
        cursor: 'default',
      },
      ' > span::before': {
        content: '- ',
      },
    },
  };

  return (
    <SectionContainer id="performance">
      <SectionHeader text="Projects and Volunteer Work" colorNumber="1" />

  {/* uh huh*/}
      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {performance.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{performance.description}</p>

            {performance.githubURL ? (
              <a
                href={performance.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.externalLink}
              >
                Poolside.chacos
              </a>
            ) : (
              <div style={{ color: 'transparent' }}>_</div>
            )}

            {performance.blogPath && (
              <Link
                to={performance.blogPath}
                target="_blank"
                css={styles.externalLink}
              >
                :)
              </Link>
            )}

            <ul css={styles.techStackGrid}>
              {performance.techStack.map(tech => (
                <span
                  data-for={tech.name + tech.description}
                  data-tip
                  key={tech.name}
                >
                  {tech.name}
                  <ReactTooltip
                    id={tech.name + tech.description}
                    effect="solid"
                  >
                    {tech.description}
                  </ReactTooltip>
                </span>
              ))}
            </ul>
          </WhiteBox>
        ))}
      </div>
      {/* Intro to Misfits*/}
    </SectionContainer>
  );
};

export default PerformanceSection;
