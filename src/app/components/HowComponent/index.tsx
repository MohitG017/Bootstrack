/**
 *
 * HowComponent
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import ReadySvg from './ready.svg';
import FirstSvg from './1.svg';
import SecondSvg from './2.svg';
import ThirdSvg from './3.svg';
import FourthSvg from './4.svg';
interface Props {}

export const HowComponent = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Heading className="text-center">How Bootstack works</Heading>

      <div>
        <TextContainerComp
          heading={'StartupOS Deployment'}
          paragraph={
            'We start with a ready-to-go framework designed to meet your business needs. Scalable infrastructure and pre-built modules ensure youre off to a strong start.'
          }
          image={FirstSvg}
        />
        <TextContainerComp
          heading={'Collaborative Development'}
          paragraph={
            'Our expert team works alongside you to refine, build, and launch your product. Think of us as your extended product and engineering team.'
          }
          image={SecondSvg}
        />
        <TextContainerComp
          heading={'Strategic CTO Guidance'}
          paragraph={
            'Our Strategic CTO helps align your technology with your business vision, ensuring scalability and long-term success.'
          }
          image={ThirdSvg}
        />
        <TextContainerComp
          heading={'Ongoing Support or Handoff'}
          paragraph={
            'As you grow, Bootstack offers continued support or a structured handoff to an in-house team, ensuring long-term sustainability.'
          }
          image={FourthSvg}
        />
      </div>
    </Div>
  );
});

const Div = styled.div`
  height: auto;
`;
const Heading = styled.h3`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 275;
  line-height: 72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;

const TextContainerComp = ({ image, heading, paragraph }) => {
  return (
    <div
      className="d-flex justify-content-center py-5  position-relative"
      style={{ gap: '100px' }}
    >
      <ImgContainer className="d-flex justify-content-center align-items-center  ">
        <img src={ReadySvg} alt="" />
        <Border className="position-absolute start-50 "></Border>
      </ImgContainer>
      <TextContainer className="d-flex flex-column justify-content-center ">
        <Circle className="position-absolute d-flex justify-content-center align-items-center ">
          <img src={image} alt="" />
        </Circle>
        <TextContainerHeading>{heading}</TextContainerHeading>
        <TextContainerParagraph>{paragraph}</TextContainerParagraph>
      </TextContainer>
    </div>
  );
};
const Border = styled.div`
  border: 1px dashed transparent;
  height: 290px;

  border-image-source: linear-gradient(
    90deg,
    rgba(131, 92, 197, 0) 0%,
    rgba(131, 92, 197, 0.8) 9.76%,
    rgba(131, 92, 197, 0.8) 89.77%,
    rgba(131, 92, 197, 0) 100%
  );

  border-image-slice: 1;
`;
const ImgContainer = styled.div`
  width: 189px;
  height: 189px;
  z-index: 10000;
  border-radius: 15px;
  background: radial-gradient(
      84.63% 124.22% at 50.19% 63.99%,
      rgba(18, 7, 37, 0.3) 32.28%,
      rgba(147, 97, 233, 0.3) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid transparent;

  border-image-source: linear-gradient(
    118.3deg,
    #1d0c37 0%,
    #5e428e 53.57%,
    #1d0c37 100%
  );
  backdrop-filter: blur(10px);
  border-image-slice: 1;
`;
const TextContainer = styled.div`
  width: 655px;
  height: 189px;
  padding-left: 80px;
  padding-right: 80px;
  border-radius: 15px;
  background: radial-gradient(
      84.63% 124.22% at 50.19% 63.99%,
      rgba(18, 7, 37, 0.3) 32.28%,
      rgba(147, 97, 233, 0.3) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid;

  border-image-source: linear-gradient(
    118.3deg,
    #1d0c37 0%,
    #5e428e 53.57%,
    #1d0c37 100%
  );
  backdrop-filter: blur(10px);
  border-image-slice: 1;
`;

const TextContainerHeading = styled.h3`
  font-family: Poppins;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;
const TextContainerParagraph = styled.h3`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 300;
  line-height: 27px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;

const Circle = styled.div`
  width: 90px;
  height: 90px;

  border-radius: 50%;
  background: radial-gradient(
      84.63% 124.22% at 50.19% 63.99%,
      rgba(18, 7, 37, 0.3) 32.28%,
      rgba(147, 97, 233, 0.3) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  border: 1px solid none;

  border-image-source: linear-gradient(
    118.3deg,
    #1d0c37 0%,
    #5e428e 53.57%,
    #1d0c37 100%
  );

  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  backdrop-filter: blur(10px);

  left: -50px;
  bottom: 20%;
`;
