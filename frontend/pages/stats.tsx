import { Layout } from '../components/Layout';
import { Filter } from '../components/Stats/Filter';
import { Table } from '../components/Stats/Table';
import { Pagination } from '../components/Stats/Pagination';

export default function Stats() {
  return (
    <Layout>
      <section className="container">
        <Filter />
        <Table className='mb-4' />
        <Pagination />
      </section>
    </Layout>
  )
}
