import Head from 'next/head'
import Navbar from "../components/navbar"
import { Layout, Carousel, Input } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const { Search } = Input
const Explore = () => {

    const carouselContentStyle = {
        height: '280px',
        color: '#fff',
        lineHeight: '280px',
        background: '#364d79',
    }

    return(
        <Layout>
            <Head>
                <title>Explore</title>
                <meta name="description" content="Explore content" />
                <link rel="icon" href="/favicon16.png" sizes="16x16"/>
            </Head>

            <Header>
                <Navbar/>
            </Header>

            <Layout>
                <Content>
                    <div style={{maxWidth: 1400, width: "100%", margin: "0 auto"}}>
                        <Carousel autoplay>
                            <div>
                                <h3 style={carouselContentStyle}>Featured Course 1</h3>
                            </div>
                            <div>
                                <h3 style={carouselContentStyle}>Featured Course 2</h3>
                            </div>
                            <div>
                                <h3 style={carouselContentStyle}>Featured Course 3</h3>
                            </div>
                            <div>
                                <h3 style={carouselContentStyle}>Featured Course 4</h3>
                            </div>
                        </Carousel>
                        Search our collection of educational material
                        <Search placeholder="Search"/>
                    </div>


                </Content>
            </Layout>
        </Layout>

    )

}

export default Explore