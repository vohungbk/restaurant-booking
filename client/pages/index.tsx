import Metadata from '@components/Metadata';
import LayoutContainer from 'container/LayoutContainer';

export default function Home() {
  return (
    <>
      <Metadata title="Confetti" />
      <LayoutContainer>
        <h1 className="text-red-600 font-alt">Heloo</h1>
      </LayoutContainer>
    </>
  );
}
