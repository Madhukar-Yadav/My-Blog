import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Error</h2>
            <p>Something went wrong!</p>
            <Link to='/'>Take me back to Home</Link>
        </div>
     );
}
 
export default NotFound;