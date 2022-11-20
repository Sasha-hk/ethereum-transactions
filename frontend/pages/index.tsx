import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getTransactions } from '../api/transactions';

import { Layout } from '../components/Layout';
import { Filter } from '../components/Stats/Filter';
import { Pagination } from '../components/Stats/Pagination';
import { Table } from '../components/Stats/Table';
import { transactionsState } from '../state/transactions';

export default function Stats() {
  const [transactions, setTransactions] = useRecoilState(transactionsState);

  useEffect(() => {
    getTransactions(setTransactions);
  }, []);

  return (
    <Layout>
      <section className="container pt-8 pb-10">
        <Filter />
        <Table className='mb-20' transactions={transactions} />
        <Pagination
          limit={14}
          numberOfItems={transactions.numberOfTransactions}
          loadPage={(skip, limit) => {
            getTransactions(setTransactions, { limit, skip });
          }}
        />
      </section>
    </Layout>
  )
}
