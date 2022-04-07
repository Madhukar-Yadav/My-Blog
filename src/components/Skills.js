import { BubbleSkill, SkillsContainer } from 'components/styled-components/skillsStyles';
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { desktop_image } from 'assets/images';

const Skills = () => {
    const skills = [
        {icon: FaHtml5, color: 'orange'},
        {icon: FaCss3, color: 'blue'},
        {icon: FaJsSquare, color: '#CC9900'},
        {icon: FaReact, color: '#11b5eb'},
        {icon: FaNodeJs, color: 'green'}
    ];
    return ( 
        <SkillsContainer imgSrc={desktop_image}>
            {skills.map((skill, index) => {
                return (
                    <BubbleSkill key={`BubbleSkill-${index}`} index={index}>
                        {<skill.icon color={skill.color} />}
                    </BubbleSkill>
                );
            })}
        </SkillsContainer>
    );
}

export default Skills;