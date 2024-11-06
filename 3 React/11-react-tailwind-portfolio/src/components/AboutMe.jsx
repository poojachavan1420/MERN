import { User} from 'lucide-react';
import Section from './Section'

const AboutMe = () => {
   return <Section icon={<User/>} sectionTitle="About Me">
       <p>I'm passionate about building web application.
          i love creating efficient,scalable and user-friendly solutions to complex problems.
       </p>
    </Section>
    
}
export default AboutMe;