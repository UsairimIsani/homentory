import { FC } from 'react'
import '../styles/globals.css'
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Content } = Layout;

export default function App({ Component }: { Component: FC }) {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ color: "white" }}>Homentory</Header>
        <Content style={{ padding: '0 50px' }}>
          <Row justify="center">
            <Col span={20}>
              <Component />
            </Col>
          </Row>
        </Content>
        <Footer>Made by Usairim Isani - 2020</Footer>
      </Layout>
    </>
  )
}