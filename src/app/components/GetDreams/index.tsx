/**
 *
 * GetDreams
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import CircleSvg from './assets/circle.svg';
import GridlineSVG from './assets/gridlines.svg';
interface Props {}

export const GetDreams = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <MainPageComp
      className="d-flex flex-column align-items-center justify-content-center gap-1 position-relative  "
      style={{ marginTop: '230px' }}
    >
      <GridLine
        src={GridlineSVG}
        alt=""
        className="position-absolute  start-50 translate-middle "
      />
      <div className="d-flex my-3"></div>
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 position-absolute   ">
        <div className="d-flex flex-column align-items-center justify-content-center gap-1">
          <MainHeadingText>Get your dreams up and running</MainHeadingText>
          <MainHeadingSpan>in no time with Bootstack now!</MainHeadingSpan>
        </div>
        <Button className="d-flex justify-content-center align-items-center cursor-pointer">
          Schedule a consultation
        </Button>
      </div>
    </MainPageComp>
  );
});

const MainPageComp = styled.div``;

const MainHeadingText = styled.h3`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 600;
  line-height: 62.4px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: #ae87f0;
`;
const MainHeadingSpan = styled.h4`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 300;
  line-height: 62.4px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ae87f0;
`;

const Button = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  border: 1px solid #835cc5;
  background: linear-gradient(118.7deg, #9a65f4 -3.22%, #2d1850 91.64%);

  color: #ffffff;
  border-radius: 15px;
  height: 54px;
  width: 254px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2f1d4f;
    color: #e0e0e0;
    box-shadow: 4px 4px 12px 0px #6e31d480;

    box-shadow: -4px -4px 15px 0px #7557a780;
  }

  &:active {
    background-color: #3e295f;
    border-color: #482b6f;
    transform: scale(0.98);
  }
`;
const GridLine = styled.img`
  top: 30%;
`;
