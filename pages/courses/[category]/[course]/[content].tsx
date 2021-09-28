import { Layout } from 'antd'
const { Content } = Layout
import Navbar from '../../../../components/Navbar'
import TextbookSideNav from '../../../../components/TextbookSideNav'

type TextbookProps = {
    
}

const Lesson = () => {
    return(
        <Layout>
            <Navbar/>
            <Layout style={{height: "100vh"}}>
                <TextbookSideNav/>

                <Content style={{background: "#fff", margin: "40px auto", maxWidth: "1200px"}}>

                </Content>

            </Layout>

        </Layout>
    )
}

export async function getStaticProps() {

    const type = "video"
    if(type === "video") {
        return {
            props: {
                type: "video",
                videoURL: "asdf"
            }
        }
    }
    else {
        return {
            props: {
                type: "text",
                content: "asdf"
            }
        }
    }
}

export async function getStaticPaths() {

    const textbooks = [{category: "category-1", course: "course-1", textbook: "lesson-1"}, {category: "category-1", course: "course-1", textbook: "lesson-2"}, {category: "category-1", course: "course-1", textbook: "lesson-3"}]

    const paths = textbooks.map((textbook) => ({
        params: { textbook: textbook.textbook, course: textbook.course, category: textbook.category }
    }))

    return { paths, fallback: "blocking" }
}

export default Lesson