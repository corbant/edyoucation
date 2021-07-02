import Head from 'next/head'
import { Layout } from "antd"
import LandingNavbar from '../components/landingNavbar';
const { Header, Content, Footer } = Layout;

const About = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
                <meta name="description" content="About our team" />
                <link rel="icon" href="/logo-image-black.ico" />
            </Head>

            <Header>
                <LandingNavbar selectedKey="about"/>
            </Header>

        </Layout>
    )
}

export default About