import { FC } from 'react'
import '../styles/globals.css'
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;
import { Provider, Session } from 'next-auth/client'
export default function App({ Component, pageProps }: { Component: FC, pageProps: { session: Session } }) {

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ color: "white" }}>Homentory</Header>
        <Content style={{ padding: '0 50px' }}>
          <Row justify="center">
            <Col span={20}>
              <Provider session={pageProps.session}>
                <Component />
              </Provider>
            </Col>
          </Row>
        </Content>
        <Footer>Made by Usairim Isani - 2020</Footer>
      </Layout>
    </>
  )
}