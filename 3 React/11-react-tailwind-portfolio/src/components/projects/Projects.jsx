import { Briefcase} from 'lucide-react';
import Section from '../Section'

const Projects = () => {

   const projectList =[
      {title:"E-commerce Platform" ,desc:"Developed a fully-functional e-commerce platform with user aunthentication ,product management and payment integration." ,techUsed:["React","Node.js","MongoDB","Stripe"]},
      {title:"Amazon Clone" ,desc:"created Amazon Website " ,techUsed:["HTML","CSS","Javascript"]}
   ]

   return <Section icon={<Briefcase/>} sectionTitle="Projects">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aperiam!</p>
   </Section>
}
export default Projects;