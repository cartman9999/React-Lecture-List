import { Link } from 'react-router-dom' 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Lecture List</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={ {
                    color: "white",
                    backgroundColor: '#f1256d',
                    borderRadius: "8px"
                } }>New Lecture</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;