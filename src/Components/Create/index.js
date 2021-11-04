import { useState, setState } from "react"
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [classification, setClassification] = useState('Entretainment')
    const [urlLink, setUrlLink] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const lecture = {title, body, classification, urlLink}

        setIsPending(true)
        
        fetch('http://localhost:3320/lectures', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(lecture)
        })
        .then( () => {
            setIsPending(false)
            console.log("new lecture added")

            history.push('/')
        })
        .catch( err => console.error(err) )
    }

    return (
        <div className="create">
            <h2>Add a New Lecture</h2>
            <form onSubmit={ (e) => handleSubmit(e) } >
                <label>Lecture title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Lecture description:</label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={ (e) => setBody(e.target.value) }
                >
                </textarea>
                <label>Lecture url:</label>
                <input 
                    type="text"
                    required
                    value={urlLink}
                    onChange={ (e) => setUrlLink(e.target.value) }
                />
                <label>Classification:</label>
                <select
                    value={classification}
                    onChange={ (e) => setClassification(e.target.value) }
                >
                    <option value="Entretainment">Entretainment</option>
                    <option value="Programming">Programming</option>
                </select>
                {!isPending && <button>Add lecture</button>}
                {isPending && <button disabled>Adding lecture...</button>}
            </form>
        </div>
    );
}
 
export default Create;