import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/common/Layout';
import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import FAB from '@/components/list/FAB';
import ListFilter from '@/components/common/ListFilter';
import Navigation from '@/components/common/Navigation';
import PlaceList from '@/components/list/PlaceList';
function List() {
  const router = useRouter();
  const title = router.query.title as string;

  return (
    <Layout title={`${title}역`} right={profile}>
      <FAB />
      <Navigation />
      <ListFilter />
      <PlaceList />
    </Layout>
  );
}

export default List;
