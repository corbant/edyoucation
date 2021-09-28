import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
import { Layout, Menu, Typography, Button, Space } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import LandingNavbar from '../components/LandingNavbar'
import { useEffect } from 'react'
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography
require('../styles/variables.less')
import bookLover from '../public/book-lover.svg'
import tutorialVideo from '../public/tutorial-video.svg'
import { ScreenSize, useScreenSize } from '../hooks/screen-size'

export default function Home() {
  const controls = useAnimation();
  const {ref, inView} = useInView({ threshold: 0.2 });
  const screenSize = useScreenSize();

  const infoArea = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.7 } }
  }
  const info = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }
  }

  useEffect(() => {
    if(inView) {
      controls.start('visible')
    }
  })
  return (
    <Layout>
      <Head>
        <title>edYOUcation</title>
        <meta name="description" content="The next generation of education" />
        <link rel="icon" href="/favicon16.png" sizes="16x16"/>
      </Head>
      
      <Header style={{ position: "absolute", background: "transparent", width: "100%" }}>
        <LandingNavbar selectedKey="home"/>
      </Header>

      <Content>
        <div style={{background: "linear-gradient(rgb(0 75 148), rgb(0 26 31))", height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <Title level={1} style={{color: "white", textAlign: 'center', fontSize: "7vw",}}>
            Education for everyone
          </Title>
          <Link href="/courses" passHref>
            <Button shape="round" type="primary" size={screenSize < ScreenSize.MD ? "middle" : "large"}>Start Learning</Button>
          </Link>
        </div>
        <div style={{background: "rgb(0 26 31)", height: "120vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <motion.div ref={ref} initial='hidden' animate={controls} variants={infoArea} style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "column"}}>
            <motion.div variants={info} style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around"}}>
              <Image src={bookLover}/>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Title level={3} style={{color: "white"}}>No more using 10 year old textbooks</Title>
                <Text style={{color: "white"}}>Always have the latest and greatest learning material at your fingertips with our evergreen textbooks written and maintained by the community.</Text>
              </div>
            </motion.div>
            <motion.div variants={info} style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around"}}>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Title level={3} style={{color: "white"}}>Video Content</Title>
                <Text style={{color: "white"}}>Check out our community video content designed with you in mind.</Text>
              </div>
              <Image src={tutorialVideo}/>
            </motion.div>
            <motion.div variants={info} style={{display: "flex", flexDirection: "row"}}>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Title level={3} style={{color: "white"}}>No more using 10 year old textbooks</Title>
                <Text style={{color: "white"}}>Always have the latest and greatest learning material at your fingertips with our evergreen textbooks.</Text>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
        <div style={{background: "linear-gradient(rgb(0 26 31), rgb(0 75 148)", height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
          <Title style={{color: "white", fontSize: "5vw"}}>
            So what are you waiting for?
          </Title>
          <Link href="/courses" passHref>
            <Button shape="round" type="ghost" size={screenSize < ScreenSize.MD ? "middle" : "large"} style={{color: "white"}}>Lets get started</Button>
          </Link>

        </div>

      </Content>

      <Footer style={{background: "rgb(0 75 148)"}}>
        <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between"}}>
          <text style={{color: "white"}}>© 2021 edYOUcation</text>
          <text style={{color: "white"}}>View our <a>Terms of Use</a> and <a>Privacy Policy</a></text>
        </div>
      </Footer>

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
