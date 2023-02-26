import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
    display: flex;
    padding: 6rem;
    justify-content: space-between;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin-top: 1rem;
    }
    li {
        padding: .5rem;
    }
`;

const Navbar = () => {
    return (
        <NavWrapper>
            <h1>Benjamin Lawton</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link>Contact</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Navbar;
