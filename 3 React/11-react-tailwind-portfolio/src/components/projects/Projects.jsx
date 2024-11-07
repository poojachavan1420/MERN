import { Briefcase} from 'lucide-react';
import Section from '../Section'
import Project from './Project';

const Projects = () => {

   const projectList =[
      {title:"E-commerce Platform" ,desc:"Developed a fully-functional e-commerce platform with user aunthentication ,product management and payment integration." ,techUsed:["React","Node.js","MongoDB","Stripe"]},
      {title:"Amazon Clone" ,desc:"created Amazon Website " ,techUsed:["HTML","CSS","Javascript"]}
   ]

   return <Section icon={<Briefcase/>} sectionTitle="Projects">
    {projectList.map (project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
   </Section>
}
export default Projects;