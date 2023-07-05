import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <i className="fa-solid fa-whiskey-glass"></i>
                <Link to='/' className='font-sans  text-xl tracking-tight'>Whiskey Collection</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-white  hover:text-white'>
                <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow'>
                    <div className="text-sm lg:flex-grow ">
                        <Button className='p-3 m-5 bg-yellow-400  justify-center'>
                            <div>
                                <Link to='/' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-yellow-400 justify-center'>
                            <div>
                                <Link to='/gallery' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4'>
                                    Gallery
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-yellow-400 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ? 
                            <Button className='p-3 m-5 bg-yellow-400 justify-center'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-yellow-400 justify-center'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-black hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Navbar;
