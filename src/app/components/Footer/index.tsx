/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Footer = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div className=" border-top" style={{ marginTop: '300px' }}>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <div
        className="d-flex align-items-start justify-content-between  py-5 "
        style={{ margin: '0px 250px' }}
      >
        <div className="d-flex flex-column">
          <div className="d-flex">
            <LogoText>Boot</LogoText>
            <LogoTextSpan>Stack</LogoTextSpan>
          </div>
          <ParagraphText>
            Bootstack is a Tech Accelerator designed specifically for non-tech
            founders.
          </ParagraphText>
        </div>

        <div className="d-flex flex-column align-items-start">
          <ContactText>Contact</ContactText>
          <ParagraphText>
            Shri Nanak Complex, P.No., C-6, Budh Bazar, Vikas Nagar, New Delhi,
            West Delhi-110059
          </ParagraphText>
          <ParagraphText>+91 9876543210</ParagraphText>
          <ParagraphText>help@bootstack.xyz</ParagraphText>
        </div>

        <div className="d-flex flex-column align-items-start">
          <ContactText>Newsletter</ContactText>
          <ParagraphText>
            Join us to receive the latest updates and exclusive offers.
          </ParagraphText>
          <InputContainer className="d-flex justify-content-between align-items-center text-white p-3 ">
            <Input
              className="text-white"
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <Button className="d-flex justify-content-center align-items-center cursor-pointer">
              Subscribe
            </Button>
          </InputContainer>
        </div>
      </div>
      <Border className="border-top"></Border>
    </Div>
  );
});

const Div = styled.div`
  height: 50vh;
  border-image-source: linear-gradient(
    90deg,
    rgba(131, 92, 197, 0) 0%,
    rgba(131, 92, 197, 0.8) 9.76%,
    rgba(131, 92, 197, 0.8) 89.77%,
    rgba(131, 92, 197, 0) 100%
  );
  border-image-slice: 1;
`;
const LogoText = styled.h3`
  font-family: Figtree;
  font-size: 32px;
  font-weight: 800;
  line-height: 38.4px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;
const LogoTextSpan = styled.h3`
  font-family: Figtree;
  font-size: 32px;
  font-weight: 800;
  line-height: 38.4px;
  letter-spacing: 0.03em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;
const ContactText = styled.h3`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`;
const ParagraphText = styled.h4`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: #ffffff;
`;
const Button = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  border: 1px solid #835cc5;
  background: linear-gradient(118.7deg, #9a65f4 -3.22%, #2d1850 91.64%);

  color: #ffffff;
  border-radius: 35px;
  height: 38px;
  width: 120px;

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
const InputContainer = styled.div`
  width: 460px;
  height: 48px;
  top: 6665px;
  left: 860px;
  gap: 0px;
  border-radius: 25px;

  opacity: 0px;
  background: radial-gradient(
      84.63% 124.22% at 50.19% 63.99%,
      rgba(18, 7, 37, 0.3) 32.28%,
      rgba(147, 97, 233, 0.3) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid;
  border-image-slice: 1; /* Ensures the gradient applies properly */
  border-image-source: linear-gradient(
    118.3deg,
    #1d0c37 0%,
    #5e428e 53.57%,
    #1d0c37 100%
  );

  backdrop-filter: blur(30px);
`;
const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: auto;
  color: #ffff;
`;
const Border = styled.div`
  border: 1px solid;

  border-image-source: linear-gradient(
    90deg,
    rgba(131, 92, 197, 0) 0%,
    rgba(131, 92, 197, 0.8) 9.76%,
    rgba(131, 92, 197, 0.8) 89.77%,
    rgba(131, 92, 197, 0) 100%
  );

  border-image-slice: 1;
`;
