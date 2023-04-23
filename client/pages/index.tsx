import Metadata from '@components/Metadata';
import About from 'container/AboutUs';
import Chef from 'container/Chef';
import Header from 'container/Header';
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
      </LayoutContainer>
    </>
  );
}
