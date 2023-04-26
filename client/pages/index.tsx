import Metadata from '@components/Metadata';
import About from 'container/AboutUs';
import Chef from 'container/Chef';
import FindUs from 'container/FindUs';
import Gallery from 'container/Gallery';
import Header from 'container/Header';
import Intro from 'container/Intro';
import Laurels from 'container/Laurels';
import LayoutContainer from 'container/LayoutContainer';
import SpecialMenu from 'container/SpecialMenu';

export default function Home() {
  return (
    <>
      <Metadata title="Confetti" />
      <LayoutContainer>
        <Header />
        <About />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
      </LayoutContainer>
    </>
  );
}
