import { Globe} from 'lucide-react';
import Section from './Section'
import { Linkedin } from 'lucide-react'
import Socialmedia from './SocialMedia';

const Contact = () => {

   const SocialLinks = [
      {icon:<Linkedin /> , title:"Linkedin"  , url: ".linkedin.com/in/pooja-chavan-1b2267www2ab"},

      {icon:<Linkedin /> , title:"Linkedin"  , url: ".linkedin.com/in/pooja-chavan-1b2267www2ab"}, 

      {icon:<Linkedin /> , title:"Linkedin"  , url: ".linkedin.com/in/pooja-chavan-1b2267www2ab"} ];



   return <div className='pb-6'>
   <Section icon={<Globe/>} sectionTitle="Contact & social Media">
    <p className="text-sm text-gray-700 mb-4">
      Email: poojachavan515864@gmail.com <br/>
      Phone: 7350515864
   </p>
   {socialLinks.map()}
   <Socialmedia icon={<Linkedin />} title="Linkedin" url=".linkedin.com/in/pooja-chavan-1b2267www2ab"/>
   </Section>
   </div>
}
export default Contact;