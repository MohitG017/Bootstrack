/**
 *
 * WhyComp
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import ReadySvg from './ready.svg';
interface Props {}

export const WhyComp = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div className="h-100">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Subheading>Why Choose Bootstack?</Subheading>
        <SubheadingParagraph>
          Bootstack is a Tech Accelerator designed specifically for non-tech
          founders. With Bootstack, you avoid the pitfalls of building an
          unscalable foundation and can focus on what matters—your core
          business.
        </SubheadingParagraph>
      </div>

      <div className="row row-cols-2 flex-wrap  align-items-center justify-content-end py-5 w-100  gap-4  ">
        <Container className=" col d-flex flex-column align-items-start  gap-3  ">
          <img src={ReadySvg} alt="" />
          <div className="d-flex flex-column ">
            <Heading>Ready-to-Go Tech Blueprint</Heading>
            <Paragraph>
              Our StartupOS provides a robust, scalable foundation—covering
              infrastructure, authentication, notifications, payments, and
              more—so you can start strong.
            </Paragraph>
          </div>
        </Container>

        <Container className=" col d-flex flex-column align-items-start   gap-3">
          <img src={ReadySvg} alt="" />
          <div className="d-flex flex-column">
            <Heading>Strategic CTO Partnership</Heading>
            <Paragraph>
              With a Strategic CTO and an expert team, we ensure your tech
              aligns with your vision and sets you up for success.
            </Paragraph>
          </div>
        </Container>

        <Container className="col  d-flex flex-column align-items-start    gap-3">
          <img src={ReadySvg} alt="" />
          <div className="d-flex flex-column">
            <Heading>Built for Growth</Heading>
            <Paragraph>
              From MVP to scaling, we design systems that grow with your
              startup—saving time, money, and resources in the long run.
            </Paragraph>
          </div>
        </Container>
        <Container className=" col d-flex flex-column  align-items-start  gap-3">
          <img src={ReadySvg} alt="" />
          <div className="d-flex flex-column">
            <Heading>Focused Approach</Heading>
            <Paragraph>
              We work with only a few startups at a time, ensuring personalized
              attention and tailored solutions for each founder.
            </Paragraph>
          </div>
        </Container>
      </div>
    </Div>
  );
});
const BorderLine = styled.div`
  border: 1px solid transparent;
  border-image-source: linear-gradient(
    90deg,
    rgba(131, 92, 197, 0) 0%,
    rgba(131, 92, 197, 0.8) 9.76%,
    rgba(131, 92, 197, 0.8) 89.77%,
    rgba(131, 92, 197, 0) 100%
  );
  border-image-slice: 1; /* Ensures the gradient applies properly */
  transform: rotate(90deg);
`;
const Div = styled.div`
  height: 50vh;
`;
const Subheading = styled.h3`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 275;
  line-height: 72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;

const SubheadingParagraph = styled.h3`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  width: 44%;
`;

const Heading = styled.h3`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;
const Paragraph = styled.h3`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  width: 60%;
`;
const Container = styled.div`
  width: 35vw;
`;
