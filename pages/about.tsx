import Head from 'next/head'
import { Layout } from "antd"
import LandingNavbar from '../components/LandingNavbar';
const { Header, Content, Footer } = Layout;

const About = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
                <meta name="description" content="About us" />
                <link rel="icon" href="/favicon16.png" sizes="16x16"/>
            </Head>

            <Header>
                <LandingNavbar selectedKey="about"/>
            </Header>

        </Layout>
    )
}

export default About