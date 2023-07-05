import Jack from '../assets/images/Jack.jpg';
import GlassPour from '../assets/images/Glasspour.jpg';
import Glass from '../assets/images/Glass.jpg';
import Knob from '../assets/images/Knob.jpg';
import Carolus from '../assets/images/Carolus.jpg';
import Bottle from '../assets/images/Bottle.jpg';


function Collection() {
  return (
    <div className="bg-white">
        <h1 className="text-black text-center text-4xl font-serif p-4" >
            Whiskey Collection
        </h1>
        <div className="grid grid-cols-3  p-12 ml-16">
            <div className="mb-4 w-75 h-65">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img src={Jack} alt="Jack Daniels" className="w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
                        </div>  
                </div>     
            </div>
            <div className="mb-4 w-75 h-65">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img src={GlassPour} alt="Jack Daniels" className="w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-purple-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
                        </div>  
                </div>     
            </div>
            <div className="mb-4 w-75 h-65">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img src={Glass} alt="Jack Daniels" className="w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-green-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
                        </div>  
                </div>     
            </div>
        </div> 
        <div className="grid grid-cols-3 p-12 ml-16">
            <div className="mb-4 w-75 h-65">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img src={Knob} alt="Jack Daniels" className="w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
                        </div>  
                </div>     
            </div>
            <div className="mb-4 w-75 h-65">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img src={Carolus} alt="Jack Daniels" className="w-full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
                        </div>  
                </div>     
            </div>
            <div className="mb-4 w-75 h-65">
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                        <img src={Bottle} alt="Jack Daniels" className=" full h-full" />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
                        </div>  
                </div>     
            </div>
        </div>                 
    </div>
    
  )
}

export default Collection