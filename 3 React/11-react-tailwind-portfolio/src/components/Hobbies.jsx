import { Heart} from 'lucide-react';
import Section from './Section'
import List from './List'
const Hobbies = () => {
   const hobbies = ["Reading" , "Playing Batminton","Photography","Drawing",];
   return <Section icon={< Heart/>} sectionTitle="Hobbies & Intrests">
    <List items={hobbies}/>
   </Section>
}
export default Hobbies;