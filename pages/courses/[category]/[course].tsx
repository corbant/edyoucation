
type CourseProps = {
    lessons: [string]
}

const Course = ({lessons}: CourseProps) => {
    return null;
}

export async function getStaticProps() {

    const lessons = ["Lesson 1", "Lesson 2", "Lesson 3"]

    return {
        props: {
            lessons
        },
        revalidate: 60
    }
}

export async function getStaticPaths() {

    const courses = [{ category: "category-1", course: "course-1" } , { category: "category-1", course: "course-2" }, { category: "category-1", course: "course-3" }]

    const paths = courses.map((course) => ({
        params: { course: course.course, category: course.category }
    }))

    return { paths, fallback: "blocking" }
}

export default Course