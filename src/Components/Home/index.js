import useFetch from '../../Hooks/useFetch'
import LectureList from './LectureList';

const Home = () => {
    const lecturesUrl = "http://localhost:3320/lectures"
    const { data: lectures, isPending, error } = useFetch(lecturesUrl)

    return (
        <div className="home">
            {/* Conditional AND if there are lectures then renders the blog list */}
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            { lectures && <LectureList lectures={ lectures } title="All Lectures!" />}
        </div>
    );
}
 
export default Home;