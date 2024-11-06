import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from 'lucide-react';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
    <Graduation title="Bachelor of Science in Physics" school="Savitribai Phule Pune University" year="2021-2024"/>

    <Graduation title="Full Stack Web Development " school="Complete coding" year="2024"/>
  </Section>
}

export default Education;