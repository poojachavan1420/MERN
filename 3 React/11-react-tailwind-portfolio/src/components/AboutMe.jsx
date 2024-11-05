import { User} from 'lucide-react';

const AboutMe = () => {
    return <div className='my-5 mx-5'>
        <div className='flex my-3 items-center'>
        <User />
        <h1 className='font-bold text-2xl mx-2'>About Me</h1>
        </div>
        <p>I'm passionate about building web applications .i love creating efficient,scalable and user-friendly solution to complex problem</p>
    </div>
}
export default AboutMe;