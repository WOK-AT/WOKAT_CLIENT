import Layout from '@/components/common/Layout';
import { useRouter } from 'next/router';
import React from 'react';

function List() {
  const router = useRouter();
  const title = router.query.title as string;

  return <Layout title={`${title}역`}>List</Layout>;
}

export default List;
