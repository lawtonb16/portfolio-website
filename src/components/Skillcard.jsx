import styled from "styled-components";

const Card = styled.div`
    width: 20%;
    background: #002d62;
    margin: 1rem;
    p {
        margin: 1rem;
    }
`;

const Skillcard = ({ name, description }) => {
    return (
        <Card>
            <p>{name}</p>
            <p>{description}</p>
        </Card>
    );
};

export default Skillcard;
