import { useHistory, useParams } from "react-router-dom";
import useFetch from '../../Hooks/useFetch'

const LectureDetails = () => {
    const { id } = useParams()
    const url = "http://localhost:3320/lectures/" 
    const { data: lecture, error, isPending } = useFetch(url + id)
    const history = useHistory()

    const handleDelete = () => {
        fetch(`${url}${lecture.id}`, {
            method: 'DELETE'
        })
        .then( () => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { lecture && (
                <article>
                    <h2>{ lecture.title }</h2>
                    <p>{ lecture.classification }</p>
                    <div>{ lecture.body }</div>
                    <div><a href={ lecture.urlLink }>{ lecture.urlLink }</a></div>
                    <button onClick={ handleDelete }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default LectureDetails;