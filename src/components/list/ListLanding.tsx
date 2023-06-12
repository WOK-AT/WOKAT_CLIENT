import { useContext } from 'react';
import PlaceList from './PlaceList';
import FAB from '@/components/list/FAB';
import Navigation from '@/components/common/Navigation';
import OptionSelector from './OptionSelector';
import { OptionContext } from '@/context/OptionContext';
import { NavigationContext } from '@/context/NavigationContext';

function ListLanding() {
  const { isOpen: optionSelectorOpen } = useContext(OptionContext);
  const { navType } = useContext(NavigationContext);

  return optionSelectorOpen ? (
    <OptionSelector />
  ) : (
    <>
      <Navigation />
      <PlaceList navType={navType} />
      <FAB />
    </>
  );
}

export default ListLanding;
