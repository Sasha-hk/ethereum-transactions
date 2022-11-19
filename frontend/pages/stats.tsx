import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { fetchTransactions } from '../api/transactions';

import { Layout } from '../components/Layout';
import { Filter } from '../components/Stats/Filter';
import { Pagination } from '../components/Stats/Pagination';
import { Table } from '../components/Stats/Table';
import { transactionsState } from '../state/transactions';

export default function Stats() {
  const [transactions, setTransactions] = useRecoilState(transactionsState);
  const [page, setPage] = useState(0);
  const pageSize = 14;
  const pagesSize = transactions.numberOfTransactions / pageSize;

  useEffect(() => {
    fetchTransactions(setTransactions, { limit: pageSize, skip: pageSize * page });
  }, []);

  return (
    <Layout>
      <section className="container">
        <Filter />
        <Table className='mb-4' transactions={transactions} />
        <Pagination
          limit={14}
          numberOfItems={transactions.numberOfTransactions}
          loadPage={(skip, limit) => {
            fetchTransactions(setTransactions, { limit, skip });
          }}
        />
      </section>
    </Layout>
  )
}
