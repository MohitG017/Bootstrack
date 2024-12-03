/**
 *
 * MainPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import CircleSvg from './assets/circle.svg';
import GridlineSVG from './assets/grid lines.svg';
interface Props {}

export const MainPage = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <MainPageComp className="d-flex flex-column align-items-center justify-content-center gap-1 position-relative my-5 ">
      <GridLine
        src={GridlineSVG}
        alt=""
        className="position-absolute  start-50 translate-middle "
      />
      <div className="d-flex my-3">
        <img src={CircleSvg} alt="" className="py-2" />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center gap-5 position-absolute   ">
        <div className="d-flex flex-column align-items-center justify-content-center gap-1">
          <Headingtext className="border-bottom py-1">
            eliminate tech hurdles . grow your business.
          </Headingtext>
          <MainHeadingText>
            Build Scalable Product from Day Zero
          </MainHeadingText>
          <ParagraphText>
            Bootstack takes the complexity out of building startup. From
            infrastructure to launch. We prepare your startup for growth while
            letting you focus on your core business.
          </ParagraphText>
        </div>
        <Button className="d-flex justify-content-center align-items-center cursor-pointer">
          Schedule a consultation
        </Button>
      </div>
    </MainPageComp>
  );
});

const MainPageComp = styled.div``;
const Headingtext = styled.h3`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.2em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  text-transform: uppercase;

  border: none; /* Remove all other borders */

  border-image-source: linear-gradient(
    90deg,
    rgba(131, 92, 197, 0) 0%,
    rgba(131, 92, 197, 0.8) 15%,
    rgba(131, 92, 197, 0.8) 85%,
    rgba(131, 92, 197, 0) 100%
  );
  border-image-slice: 1; /* Ensures the gradient applies properly */
`;
const MainHeadingText = styled.h3`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 400;
  line-height: 46px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;
const ParagraphText = styled.h4`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 22.4px;
  letter-spacing: 0.02em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  width: 52%;
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
