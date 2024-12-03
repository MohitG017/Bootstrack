/**
 *
 * Navbar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Navbar = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div className="d-flex justify-content-between align-items-center px-4 border-bottom  position-fixed  ">
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <div className="d-flex cursor-pointer ">
        <LogoText>Boot</LogoText>
        <LogoSpan>stack</LogoSpan>
      </div>
      <div className="d-flex gap-4 ">
        <FeaturesText className="cursor-pointer">Features</FeaturesText>
        <FeaturesText className="cursor-pointer">Product</FeaturesText>
        <FeaturesText className="cursor-pointer">Pricing</FeaturesText>
        <FeaturesText className="cursor-pointer">About Us</FeaturesText>
      </div>
      <Button className="d-flex justify-content-center align-items-center cursor-pointer">
        Schedule a consultation
      </Button>
    </Div>
  );
});

const Div = styled.div`
  background-color: #0d0220;
  width: 1200px;
  height: 69px;
  z-index: 100000;
  border-image-source: linear-gradient(
    90deg,
    rgba(131, 92, 197, 0) 0%,
    rgba(131, 92, 197, 0.8) 15%,
    rgba(131, 92, 197, 0.8) 85%,
    rgba(131, 92, 197, 0) 100%
  );
  border-image-slice: 1; /* Ensures the gradient applies properly */
  backdrop-filter: blur(10px);
`;
const LogoText = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
`;
const LogoSpan = styled.h3`
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;
`;

const FeaturesText = styled.h3`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  text-transform: uppercase;

  &:hover {
    color: #e0e0e0;
  }

  &:active {
    color: #a0a0a0;
    transform: scale(0.98);
  }
`;

const Button = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  border: 1px solid #2f1d4f;
  background-color: #1c0f32;
  color: #ffffff;
  border-radius: 12px;
  height: 41px;
  width: 209px;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2f1d4f;
    color: #e0e0e0;
  }

  &:active {
    background-color: #3e295f;
    border-color: #482b6f;
    transform: scale(0.98);
  }
`;
