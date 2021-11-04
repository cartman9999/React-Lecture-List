import { Link } from 'react-router-dom'

const LectureList = ({ lectures, title }) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            { lectures.map((lecture) => (
                <div className="blog-preview" key={ lecture.id }>
                    <Link to={`/lectures/${lecture.id}`}>
                        <h2>{ lecture.title }</h2>
                        <p><i>{ lecture.classification }</i></p>
                    </Link>
                    {/* <button onClick={() => handleDelete(blog.id) }>X</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default LectureList;