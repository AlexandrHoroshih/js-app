import { Layout } from '../ui/Layout';

import { Test } from '../components/Test';

const Home = () => (
  <Layout title="main page">
    {'Hello nextjs'}
    <Test />
  </Layout>
);

export default Home;
