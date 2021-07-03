import { List } from 'antd'

type CategoryProps = {
    popularCourses: [string],

}

const Category = ({popularCourses}: CategoryProps) => {
    return (
        <>
            <List dataSource={popularCourses} renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta title={item}/>
                </List.Item>
            )}/>

        </>
    );
}

export async function getStaticProps() {

    const popularCourses = ["Course 1", "Course 2", "Course 3"]

    return {
        props: {
            popularCourses
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {
    const categories = ["category-1", "category-2", "category-3", "category-4", "category-5", "category-6"]

    const paths = categories.map((category) => ({
        params: { category: category }
    }))

    return { paths, fallback: "blocking"}
}


export default Category;