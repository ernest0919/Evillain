import { Layout as AntLayout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Header, Content } = AntLayout;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[router.pathname]}>
          <Menu.Item key="/">
            <Link href="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="/feature-a">
  <Link href="/feature-a">工时评估</Link>
</Menu.Item>
          <Menu.Item key="/feature-b">
            <Link href="/feature-b">功能B</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px' }}>{children}</Content>
    </AntLayout>
  );
};

export default Layout;
