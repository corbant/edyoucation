import Head from 'next/head'
import { Layout, List, Card, Input } from 'antd'
const { Search } = Input
import Navbar from '../components/navbar'
const { Header, Content, Footer } = Layout

type CoursesProps = {
    popularCategories: [{ category: string, image: string}]
}

const Courses = ({popularCategories}: CoursesProps) => {
    return(
        <Layout>
            <Head>
                <title>Courses</title>
                <meta name="description" content="Explore content" />
                <link rel="icon" href="/favicon16.png" />
            </Head>
            <Header>
                <Navbar/>
            </Header>

            <Content>
                <div style={{maxWidth: 1080, margin: "0 auto"}}>
                    <List grid={{gutter: 16, xs: 2, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3}} dataSource={popularCategories} header={<h3>Popular Categories:</h3>} renderItem={item => (
                        <List.Item>
                            <Card hoverable cover={<img src={item.image}/>}>
                                <Card.Meta title={item.category}/>
                            </Card>
                        </List.Item>
                    )}/>

                    <h3>Find the perfect course</h3>
                    <Search />

                    
                </div>
            </Content>
        </Layout>

    );
}

export async function getStaticProps() {
    const popularCategories = [
        {
            category: "Category 1",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Category 2",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Category 3",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Category 4",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Category 5",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Category 6",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        }
    ]

    return {
        props: {
            popularCategories: popularCategories
        },
        revalidate: 60
    }

}

export default Courses