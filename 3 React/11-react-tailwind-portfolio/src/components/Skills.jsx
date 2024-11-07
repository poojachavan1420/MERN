import { Code} from 'lucide-react';
import Section from './Section'
import Pill from './Pill'

const Skills = () => {
   const skillTitles = ["JavaScript","React","Node.js", "Python" ,"HTML","CSS" ,"Git" ,"MongoDB"];
   return <Section icon={<Code/>} sectionTitle="Skills">
      {skillTitles.map(title => <Pill key={title} title ={title}/>)}
    <Pill title={'JavaScript'}></Pill>
   </Section>
}
export default Skills;