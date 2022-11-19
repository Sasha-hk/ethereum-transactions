import { Layout } from '../components/Layout';
import { Filter } from '../components/Stats/Filter';
import { Table } from '../components/Stats/Table';

export default function Stats() {
  return (
    <Layout>
      <section className="container">
        <Filter />
        <Table />
      </section>
    </Layout>
  )
}
