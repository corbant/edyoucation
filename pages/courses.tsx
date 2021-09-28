import Head from 'next/head'
import { Layout, List, Card, Input } from 'antd'
const { Search } = Input
import Navbar from '../components/Navbar'
import MainFooter from '../components/MainFooter'
const { Header, Content, Footer } = Layout

type CoursesProps = {
    categories: [{ category: string, image: string}]
}

const Courses = ({categories: categories}: CoursesProps) => {
    return(
        <Layout>
            <Head>
                <title>Courses</title>
                <meta name="description" content="Explore content" />
                <link rel="icon" href="/favicon16.png" />
            </Head>
            
            <Navbar/>

            <Content>
                <div style={{maxWidth: 1080, margin: "40px auto"}}>
                    <Search placeholder="Find Courses"/>
                    <List grid={{gutter: 16, xs: 2, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3}} dataSource={categories} header={<h3>Subjects:</h3>} renderItem={item => (
                        <List.Item>
                            <Card hoverable cover={<img src={item.image}/>}>
                                <Card.Meta title={item.category}/>
                            </Card>
                        </List.Item>
                    )}/>
                </div>
            </Content>

            <MainFooter/>

        </Layout>

    );
}

export async function getStaticProps() {
    const categories = [
        {
            category: "Science",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Technology",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Engineering",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Math",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Language Arts",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "Economics",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        },
        {
            category: "History",
            image: "https://designshack.net/wp-content/uploads/placehold.jpg"
        }
    ]

    return {
        props: {
            categories: categories
        },
        revalidate: 60
    }

}

export default Courses