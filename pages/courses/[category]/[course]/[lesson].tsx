

type LessonProps = {
    type: string,
    videoURL?: string,
    content?: string
}

const Lesson = ({type, videoURL, content}: LessonProps) => {
    return null
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

    const lessons = [{category: "category-1", course: "course-1", lesson: "lesson-1"}, {category: "category-1", course: "course-1", lesson: "lesson-2"}, {category: "category-1", course: "course-1", lesson: "lesson-3"}]

    const paths = lessons.map((lesson) => ({
        params: { lesson: lesson.lesson, course: lesson.course, category: lesson.category }
    }))

    return { paths, fallback: "blocking" }
}

export default Lesson