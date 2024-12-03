/**
 *
 * FrequentlyAsked
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import AddSvg from './add.svg';
import NotAdd from './notadd.svg';

interface Props {}

export const FrequentlyAsked = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div className="py-5">
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Heading className="py-5 ">Frequently asked questions</Heading>
      <div className="d-flex gap-4   flex-column justify-content-center align-items-center  ">
        <Component
          heading={
            'What makes Bootstack a tech accelerator rather than a traditional tech service provider or accelerator?'
          }
        />
        <Component
          heading={'Why choose Bootstack over hiring an in-house tech team?'}
        />

        <Component
          heading={'How does Bootstack’s modular approach benefit my business?'}
        />
        <Component
          heading={
            'Can Bootstack help if my business has unique or industry-specific requirements?'
          }
        />
        <Component heading={'How does the equity + cash model work?'} />
        <Component
          heading={
            'How does Bootstack support my growth and scaling needs as my business evolves?'
          }
        />
        <Component heading={'How quickly can I launch with Bootstack?'} />
      </div>
    </Div>
  );
});

const Div = styled.div``;
const Heading = styled.div`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 275;
  line-height: 72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;

const Component = ({ heading }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <Container
      isOpen={isOpen}
      className="d-flex flex-column justify-content-start gap-3  p-4"
    >
      <div className="d-flex  justify-content-between align-items-center gap-5 ">
        <Text>. {heading}</Text>
        <img
          src={isOpen ? NotAdd : AddSvg}
          alt=""
          className="cursor-pointer"
          onClick={toggleOpen}
        />
      </div>
      <InnerText isVisible={isOpen}>
        Building an in-house team is costly and time-consuming, especially for
        non-tech founders. Bootstack provides an experienced team and fractional
        CTO support, so you avoid the challenges of hiring and managing a tech
        team. Our pre-built modules also mean faster deployment, allowing you to
        focus on core business goals rather than technical details.
      </InnerText>
    </Container>
  );
};
const Text = styled.h4`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;

  color: #ffffff;
`;
const Container = styled.div<{ isOpen: boolean }>`
  width: 1200px;
  height: ${props =>
    props.isOpen ? 'auto' : '80px'}; /* Adjust the closed height */

  border-radius: 15px;
  background: radial-gradient(
      84.63% 124.22% at 50.19% 63.99%,
      rgba(18, 7, 37, 0.3) 32.28%,
      rgba(147, 97, 233, 0.3) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  border-image-slice: 1;
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
const InnerText = styled.h4<{ isVisible: boolean }>`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: #ffffff;
  max-height: ${props => (props.isVisible ? '200px' : '0')};
  overflow: hidden;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;
