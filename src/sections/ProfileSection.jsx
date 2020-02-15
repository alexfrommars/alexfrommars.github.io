import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import profileJpg from '../images/profile.jpg';
import { rhythm } from '../utils/typography';

const ProfileSection = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
    },
    link: {
      color: '#262626',
    },
    whiteBox: {
      height: 'min-content',
      padding: rhythm(1),
      paddingTop: 0,
    },
    whiteBoxKeireki: {
      gridRowStart: 'span 2',
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1.5),
    },
    gaiyouPictureContainer: {
      marginBottom: rhythm(1.5),
      textAlign: 'center',
    },
    gaiyouPicture: {
      width: '200px',
      borderRadius: '50%',
    },
    gaiyouListItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: rhythm(1),
    },
    gaiyouItemName: {
      flex: 2,
      textAlign: 'right',
      marginRight: '1rem',
    },
    gaiyouItemContent: {
      flex: 3,
    },
    keirekiGray: {
      color: '#999999',
    },
  };

  return (
    <SectionContainer id="profile" colorNumber="2" skew skewReverse>
      <SectionHeader text="profile" colorNumber="2" />

      <div css={styles.container}>
        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Hello, World</h3>
          <div css={styles.gaiyouPictureContainer}>
            <img
              src={profileJpg}
              css={styles.gaiyouPicture}
              alt="代表者のプロフィール写真"
            />
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Name</b>
            </div>
            <div css={styles.gaiyouItemContent}>Alexandra Scott</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Age</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              <AgeCalculator birthday="1995-07-15T15:00+09:00" />
            </div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Residence</b>
            </div>
            <div css={styles.gaiyouItemContent}>Austin, Texas</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Hobbies</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              <a
                href="https://www.google.com/search?sxsrf=ACYBGNTvyUJDKbnrs_rq4Zlf1d80mUBLPw%3A1579647184468&ei=0IAnXo6dHMS4sgXTg6wg&q=cooking&oq=cooking&gs_l=psy-ab.3..0i131i67j0i67l2j0j0i67j0l5.2186.3356..3432...0.4..0.95.457.7......0....1..gws-wiz.......0i71j35i39j0i131.3hXHJyH8npQ&ved=0ahUKEwiOxbOq5JXnAhVEnKwKHdMBCwQQ4dUDCAs&uact=5"
                css={{ color: '#262626' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cooking
                <IconExtLink />
              </a>
              <br />
              Gardening
            </div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Education</b>
            </div>
            <div css={styles.gaiyouItemContent}>The University of Texas</div>
          </div>
        </WhiteBox>

        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>Career</h3>

          <Hr />

          <p>
            <b>Coding with kids Instructor</b>
            <br />
            <span css={styles.keirekiGray}>(2020.1 - )</span>
          </p>
          <p>
            After school instructor for (insert classes here). Online instructor
            for (insert classes here).
          </p>

          <Hr />

          <p>
            <b>Undergraduate Lab Assistant</b>
            <br />
            <span css={styles.keirekiGray}>(2016.8 - 2018.5)</span>
          </p>
          <p>
            Assisted lab TA's with media procurement, and maintained
            Environmental Health and Safety standards. Also, assisted in the
            production and disposal of media and biohazardous waste.
            <a
              href="https://cns.utexas.edu/bio"
              target="_blank"
              rel="noopener noreferrer"
              css={styles.link}
            >
              Biology Instructional Office <IconExtLink />
            </a>
            <a
              href="https://jpn.nec.com/case/city.hamada/index.html"
              target="_blank"
              rel="noopener noreferrer"
              css={styles.link}
            />
          </p>

          <Hr text="Several Other Side Jobs" />

          <p>
            <b>Sales Associate</b>
            <br />
            <span css={styles.keirekiGray}>(1993)</span>
          </p>
          <p>Assisted customers.</p>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Origin</h3>
          <p />
          <p>
            <b>1．I want to dismantle capitalism</b>
            <br />
            Privyet Komrades,
          </p>
          <p>
            <b>2．I'm Black</b>
            <br />
            What it do Baybeeeee
          </p>
          <p>Life is hard, and then you die :)</p>
        </WhiteBox>
      </div>
    </SectionContainer>
  );
};

export default ProfileSection;
