import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import { OptionContextProvider } from '@/context/OptionContext';
import { NavigationContextProvider } from '@/context/NavigationContext';
import ListLanding from '@/components/list/ListLanding';
import Layout from '@/components/common/Layout';

function List() {
  const router = useRouter();
  const title = router.query.title as string;

  return (
    <NavigationContextProvider>
      <OptionContextProvider>
        <Layout title={title ? `${title}역` : ''} right={profile}>
          <ListLanding />
        </Layout>
      </OptionContextProvider>
    </NavigationContextProvider>
  );
}

export default List;
