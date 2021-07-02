import Head from 'next/head'
import Navbar from "../components/navbar"
import { Layout, Carousel } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const Explore = () => {

    return(
        <Layout>
            <Head>
                <title>Explore</title>
                <meta name="description" content="Explore content" />
                <link rel="icon" href="/logo-image-black.ico" />
            </Head>

            <Header>
                <Navbar/>
            </Header>

            <Layout>
                <Content>

                </Content>
            </Layout>
        </Layout>

    )

}

export default Explore