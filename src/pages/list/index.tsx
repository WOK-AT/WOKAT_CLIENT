import { OptionContextProvider } from '@/context/OptionContext';
import { NavigationContextProvider } from '@/context/NavigationContext';
import ListLanding from '@/components/list/ListLanding';

function List() {
  return (
    <NavigationContextProvider>
      <OptionContextProvider>
        <ListLanding />
      </OptionContextProvider>
    </NavigationContextProvider>
  );
}

export default List;
