import { Link } from "react-router-dom";
import styled from 'styled-components';

const PgNotFound = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2vw;
    h2 {
        color: red;
    }
    p {
        color: #333;
    }
    a {
        padding-top: 2vw;
        color: ${(props) => props?.theme?.colors?.lightBlue};
    }
`;

const NotFound = () => {
    return ( 
        <PgNotFound>
            <h2>404 Error</h2>
            <p>Something went wrong!</p>
            <Link to='/my-blog'>Take me back to Home</Link>
        </PgNotFound>
    );
}

export default NotFound;