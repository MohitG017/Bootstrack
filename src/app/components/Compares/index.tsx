/**
 *
 * Compares
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import ComparesSvg from './compares.svg';
interface Props {}

export const Compares = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <MainHeading>How Bootstack compares</MainHeading>
      <div
        className="d-flex py-5 justify-content-center "
        style={{ gap: '150px' }}
      >
        <Heading>Features</Heading>
        <Heading>Bootstack (Tech Accelerator)</Heading>

        <Heading>Traditional Tech Provider</Heading>
      </div>
      <div className="  d-flex flex-column align-items-center gap-5 py-3 ">
        <div
          className=" d-flex justify-content-center "
          style={{ gap: '120px' }}
        >
          <div className="d-flex align-items-center gap-2">
            <img src={ComparesSvg} alt="" />
            <FeaturesText className="my-1">Setup Speed</FeaturesText>
          </div>
          <Bootstracktext>
            Fast, modular setup with pre-built solutions
          </Bootstracktext>

          <TraditionalText>Custom development, often slow</TraditionalText>
        </div>

        <div
          className="  d-flex justify-content-center "
          style={{ gap: '120px' }}
        >
          <div className="d-flex  align-items-center gap-2">
            <img src={ComparesSvg} alt="" />
            <FeaturesText className="my-1">Scalability</FeaturesText>
          </div>
          <Bootstracktext>Built-in, designed to grow with you</Bootstracktext>

          <TraditionalText>
            Typically limited, with costly upgrades needed
          </TraditionalText>
        </div>

        <div
          className="  d-flex justify-content-center "
          style={{ gap: '120px' }}
        >
          <div className="d-flex align-items-center  gap-2">
            <img src={ComparesSvg} alt="" />
            <FeaturesText className="my-1">Cost Model</FeaturesText>
          </div>
          <Bootstracktext>
            Equity + cash, growth-aligned partnership
          </Bootstracktext>

          <TraditionalText>Project-based fees, transactional</TraditionalText>
        </div>

        <div
          className="  d-flex justify-content-center "
          style={{ gap: '120px' }}
        >
          <div className="d-flex  align-items-center gap-2  ">
            <img src={ComparesSvg} alt="" />
            <FeaturesText className="my-1">Expert Support</FeaturesText>
          </div>
          <Bootstracktext>Experienced team, fractional CTO</Bootstracktext>

          <TraditionalText>
            Limited, extra costs for experienced talent
          </TraditionalText>
        </div>
      </div>
    </Div>
  );
});

const Div = styled.div``;
const MainHeading = styled.h3`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 275;
  line-height: 72px;
  text-align: center;

  color: #ffffff;
`;
const Heading = styled.h4`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 275;
  line-height: 30px;

  color: #ffffff;
`;
const FeaturesText = styled.h4`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;

  color: #ae87f0;
`;
const Bootstracktext = styled.h3`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 30%;
  color: #ffffff;
`;
const TraditionalText = styled.h3`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 275;
  line-height: 24px;
  width: 30%;
  color: #ffffff;
`;
