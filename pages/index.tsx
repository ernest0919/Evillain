import Layout from '../components/Layout';
import { Typography } from 'antd';

export default function Home() {
  return (
    <Layout>
      <Typography.Title>欢迎来到我的MVP网站</Typography.Title>
      <p>请选择上方导航访问模块。</p>
    </Layout>
  );
}