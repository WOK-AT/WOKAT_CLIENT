import FAB from '@/components/list/FAB';
import Navigation from '@/components/common/Navigation';
import PlaceList from './PlaceList';
import { useContext } from 'react';
import { OptionContext } from '@/context/OptionContext';
import OptionSelector from './OptionSelector';

function ListLanding() {
  const { isOpen: optionSelectorOpen } = useContext(OptionContext);

  return optionSelectorOpen ? (
    <OptionSelector />
  ) : (
    <>
      <Navigation />
      <PlaceList />
      <FAB />
    </>
  );
}

export default ListLanding;
