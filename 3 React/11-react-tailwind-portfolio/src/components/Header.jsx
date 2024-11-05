import passportPhoto from "../assets/passport.jpeg"

const Header = () => {
    
    return <header className="bg-blue-600 text-white p-5 rounded-t-xl flex justify-between items-center">
        <div>
        <div className="font-bold text-3xl">Pooja chavan</div>

        <div className=" text-xl">fullstack developer</div>
        </div>
       <img className="rounded-full w-24" src={passportPhoto} alt="" />
        </header> 
}
export default Header;