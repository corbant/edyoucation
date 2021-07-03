import Head from 'next/head'
import Image from 'next/image'
import Texty from 'rc-texty'
import QueueAnim from 'rc-queue-anim';

import Link from 'next/link'
import { Layout, Menu, Typography, Button } from 'antd'
import LandingNavbar from '../components/landingNavbar'
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography
require('../styles/variables.less')
import 'rc-texty/assets/index.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>edYOUcation</title>
        <meta name="description" content="The next generation of education" />
        <link rel="icon" href="/favicon16.png" sizes="16x16"/>
      </Head>

      <Header>
        <LandingNavbar selectedKey="home"/>
      </Header>

      <Content>
        <div style={{background: "linear-gradient(130deg, #006678, #4FA8FF)", height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Title level={1} style={{color: "white"}}>
            <Texty type="top" mode="smooth">The Future of Education is Now....</Texty>
          </Title>
        </div>
        <div style={{background: "grey", height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <QueueAnim duration={5000} interval={1000}>
            <Title key="1" level={1} style={{color: "white"}}>Some people say the sky is the limit, but we say "Why stop there"? Ready to start learning?</Title>
            <Button key="2" shape="round" type="primary" size="large">Create an Account</Button>
            <Text key="3">OR</Text>
            <Title key="4" level={1} style={{color: "white"}}>Sign up to create content! We love our educators!</Title>
            <Button key="5" shape="round" type="default" size="large">Create a Educator Account</Button>
          </QueueAnim>
        </div>

      </Content>

      {/*<Main>

        <ResponsiveContext.Consumer>
          {size => (
            <Header style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 2}} width="100%" height="90px" pad="20px">
              <Link href="/">
                <a  style={{ height: "100%" }}>
                  {
                    (size === "xxsmall" || size === "xsmall" || size === "small") && <img src="/logo-image-white.svg"  style={{ height: "100%" }}/> || <img src="/logo-white.svg"  style={{ height: "100%" }}/>
                  }
                </a>
              </Link>
              <Nav direction="row" justify="center">
                <Anchor alignSelf="center">About</Anchor>
                <Button href="/explore" primary label="Explore" icon={<LinkNext color="white"/>} reverse/>
              </Nav>
            </Header>
          )}
        </ResponsiveContext.Consumer>

          <Parallax pages={2} style={{backgroundImage: `url(/guy.jpg)`, backgroundSize: "cover"}}>
            <ParallaxLayer
            offset={0}
            speed={0.4}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(130deg, #006678, #4FA8FF)"}}>
            </ParallaxLayer>

            <ParallaxLayer
            offset={0}
            speed={2}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
              <Text size="8vw" style={{textShadow: "6px 6px 14px black"}}>The Future of Education</Text>
              <Text size="small" style={{textShadow: "4px 4px 10px black"}}>is now...</Text>
            </ParallaxLayer>

            <ParallaxLayer
            offset={1}
            speed={1.4}
            style={{background: "linear-gradient(230deg, #781200, #ffa64f)"}}>
            </ParallaxLayer>

            <ParallaxLayer
            offset={1}
            speed={2}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <Text size="xlarge" style={{textShadow: "4px 4px 10px black"}}>Some people say the sky is the limit, but we say "Why stop there"? Ready to start learning?</Text>
              <Button primary label="Create an Account"/>
              <Text size="xsmall">OR</Text>
              <Text size="xlarge" style={{textShadow: "4px 4px 10px black"}}>Sign up to create content! We love our educators!</Text>
              <Button secondary label="Create a Educator Account"/>
            </ParallaxLayer>
          </Parallax>

                </Main>*/}
    </Layout>
  )
}
