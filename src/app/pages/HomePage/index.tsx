import { Compares } from 'app/components/Compares/Loadable';
import { CoreStack } from 'app/components/CoreStack/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { FrequentlyAsked } from 'app/components/FrequentlyAsked/Loadable';
import { GetDreams } from 'app/components/GetDreams/Loadable';
import { HowComponent } from 'app/components/HowComponent/Loadable';
import { MainPage } from 'app/components/MainPage/Loadable';
import { Navbar } from 'app/components/Navbar/Loadable';
import { WhyComp } from 'app/components/WhyComp/Loadable';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="d-flex justify-content-center ">
        <Navbar />
      </div>

      <MainPage />
      <WhyComp />
      <HowComponent />
      <CoreStack />
      <Compares />
      <FrequentlyAsked />
      <GetDreams />
      <Footer />
    </>
  );
}
