import { Award} from 'lucide-react';
import Section from './Section'
import List from './List'
const Extracurricular = () => {
   const items= ["Volunteer at local coding bootcamp for underprivileged youth" , "Organizer of city-wide hackathon event","Member of the University Chess Club"
  ];
  return (
  <Section icon={<Award/>}
   sectionTitle="Extracurricular Activities">
    <List items={items} />
    </Section>
  );
};
export default Extracurricular;