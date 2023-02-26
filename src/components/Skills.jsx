import Skillcard from "./Skillcard";
import styled from "styled-components";
import skills from "../skills.json";

const SkillWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Skills = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "3rem"}}>
            <h1>Skill-Set</h1>
            <SkillWrapper>
                {skills.skills.map((skill) => (
                    <Skillcard
                        key={skill.name}
                        name={skill.name}
                        description={skill.description}
                    />
                ))}
            </SkillWrapper>
        </div>
    );
};

export default Skills;
