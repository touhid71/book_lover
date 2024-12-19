import profile from '../../assets/images/profile.png';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 max-w-4xl mx-auto border-b-2 header'>
            <h1>
                <img 
                    src={logo}
                    alt="Logo" 
                    className="h-16 w-16" // Adjust logo size to 4rem (64px)
                />
            </h1>
            <img 
                src={profile} 
                alt="Profile" 
                className="h-16 w-16 rounded-full" // Adjust profile image size to 4rem (64px)
            />
        </div>
    );
};

export default Header;
