/**
 *
 * CoreStack
 *
 */
import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import DiagrarmSvg from './diagram.svg';
interface Props {}

export const CoreStack = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  // State to track selected module
  const [selectedModule, setSelectedModule] = useState<'core' | 'plug-n-play'>(
    'core',
  );
  const handleModuleClick = (module: 'core' | 'plug-n-play') => {
    setSelectedModule(module);
  };

  return (
    <Div className=" py-5">
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <Heading>Core Stack: The Engine Driving Speed and Scale</Heading>
      <div className="d-flex justify-content-center align-items-center">
        <Paragraph>
          A pre-built foundation of essential tech components, driving faster
          launches and seamless scalability for your startup's growth journey.
        </Paragraph>
      </div>
      <div className="d-flex justify-content-center py-5">
        <Container className="d-flex align-items-center   gap-4">
          {/* Core modules */}
          <div className="position-relative">
            {/* Hide the "Core modules" text if it's selected */}
            {selectedModule !== 'core' && (
              <Text
                className="cursor-pointer px-4 "
                onClick={() => handleModuleClick('core')}
              >
                Core modules
              </Text>
            )}
            {selectedModule === 'core' && (
              <ButtonContainer className="d-flex align-items-center justify-content-center">
                <Text>Core modules </Text>
              </ButtonContainer>
            )}
          </div>

          {/* Plug-n-Play modules */}
          <div className="position-relative ">
            {selectedModule !== 'plug-n-play' && (
              <Text
                className="cursor-pointer"
                onClick={() => handleModuleClick('plug-n-play')}
              >
                Plug-n-Play modules
              </Text>
            )}
            {selectedModule === 'plug-n-play' && (
              <ButtonContainer className="d-flex align-items-center justify-content-center">
                <Text>Plug-n-Play module </Text>
              </ButtonContainer>
            )}
          </div>
        </Container>
      </div>
      <div
        className="d-flex  align-items-center justify-content-between "
        style={{ padding: '0px 153px' }}
      >
        <img src={DiagrarmSvg} alt="" />
        <div className="d-flex flex-column ">
          <CoreModuleText className="align-self-start">
            Core module
          </CoreModuleText>

          <div className="d-flex flex-column  ">
            <div className="d-flex justify-content-start align-items-center gap-2 ">
              <CoreModuleHeading>. Authentication Module</CoreModuleHeading>
              <div className="text-white">.</div>
              <CoreModuleSubHeading>
                Secure user management with role-based access control.
              </CoreModuleSubHeading>
            </div>

            <div className="  d-flex align-items-center gap-2 ">
              <CoreModuleHeading>. Payment Routing Module</CoreModuleHeading>
              <div className="text-white">.</div>
              <CoreModuleSubHeading>
                Integrates with multiple payment gateways, optimizing costs and
                success rates in real-time.
              </CoreModuleSubHeading>
            </div>

            <div className="  d-flex  align-items-center gap-2 ">
              <CoreModuleHeading>. Notification System</CoreModuleHeading>
              <div className="text-white">.</div>
              <CoreModuleSubHeading>
                Send real-time updates to users via email, SMS, and other
                channels.
              </CoreModuleSubHeading>
            </div>

            <div className="  d-flex  align-items-center gap-2 ">
              <CoreModuleHeading>. Privacy and Compliance</CoreModuleHeading>
              <div className="text-white">.</div>
              <CoreModuleSubHeading>
                Pre-configured to meet SOC2, PCI, and GDPR standards.
              </CoreModuleSubHeading>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ paddingTop: '70px' }}
      >
        <Componenet />
      </div>
    </Div>
  );
});

const Div = styled.div``;
const Heading = styled.h4`
  font-family: Poppins;
  font-size: 48px;
  font-weight: 275;
  line-height: 72px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffff;
`;
const Paragraph = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffff;
  width: 48%;
`;
const Container = styled.div`
  width: 344px;
  height: 48px;
  top: 3328px;
  left: 548px;
  gap: 0px;
  border-radius: 25px;
  opacity: 0px;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Smooth transitions */
  background: radial-gradient(
      81.63% 124.22% at 50.19% 63.99%,
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
  backdrop-filter: blur(30px);
  border-image-slice: 1;
`;

const Text = styled.h4`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffff;
`;
const ButtonContainer = styled.div`
  width: 145px;
  height: 38px;

  border-radius: 35px;
  background: linear-gradient(118.7deg, #9a65f4 -3.22%, #2d1850 91.64%);

  border: 1px solid #835cc5;
  box-shadow: 4px 4px 12px 0px #6e31d480;

  :hover {
    box-shadow: -4px -4px 15px 0px #7557a780;
  }
`;
const CoreModuleText = styled.h3`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffff;
`;
const CoreModuleHeading = styled.h3`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.2em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffff;
`;
const CoreModuleSubHeading = styled.h3`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffff;
  width: 60%;
`;

const Componenet = () => {
  return (
    <ComponentContainer className="d-flex gap-4 p-3">
      <div className="d-flex flex-column gap-4 ">
        <Box1 className="d-flex justify-content-center align-items-center">
          <Box1Text>Bootstack core modules</Box1Text>
        </Box1>
        <Box4></Box4>
      </div>
      <Box2></Box2>
      <div className="d-flex flex-column gap-4">
        <Box3></Box3>
        <Box3></Box3>
      </div>
    </ComponentContainer>
  );
};
const ComponentContainer = styled.div`
  width: 1200px;
  height: 304px;

  border-radius: 25px;
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
  border-image-slice: 1;
  backdrop-filter: blur(10px);
`;
const Box1Text = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0.15em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ae87f0;
`;
const Box1 = styled.div`
  width: 326px;
  height: 64px;
  top: 3804px;
  left: 150px;
  gap: 0px;
  border-radius: 15px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
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
  border-image-slice: 1;
  backdrop-filter: blur(10px);
`;

const Box2 = styled.div`
  width: 326px;
  height: 264px;
  top: 3804px;
  left: 496px;
  gap: 0px;
  border-radius: 15px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
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
const Box3 = styled.div`
  width: 458px;
  height: 122px;
  top: 3804px;
  left: 842px;
  gap: 0px;
  border-radius: 15px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  background: radial-gradient(
      84.63% 124.22% at 50.19% 63.99%,
      rgba(18, 7, 37, 0.3) 32.28%,
      rgba(147, 97, 233, 0.3) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    118.3deg,
    #1d0c37 0%,
    #5e428e 53.57%,
    #1d0c37 100%
  );

  backdrop-filter: blur(10px);
`;

const Box4 = styled.div`
  width: 326px;
  height: 180px;
  top: 3888px;
  left: 150px;
  gap: 0px;
  border-radius: 15px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
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
