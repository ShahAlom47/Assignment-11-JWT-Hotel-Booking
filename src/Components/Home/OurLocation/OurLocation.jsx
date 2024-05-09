
import { Map, Marker } from "pigeon-maps"
const OurLocation = () => {
    const location = 'https://www.google.com/maps/place/Rose+View+Hotel/@24.8856001,91.8800723,15.32z/data=!4m9!3m8!1s0x3751ab31f9e7402d:0x696fd9e265716114!5m2!4m1!1i2!8m2!3d24.8861942!4d91.8812515!16s%2Fg%2F1tf46hs4?entry=ttu'
    return (
        <section className="px-5 bg-center bg-no-repeat bg-cover" style={{ 
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,4,4,20)), url('https://i.ibb.co/Bt2XcRn/sara-dubler-Koei-7-Yt-Io-unsplash-1-1.jpg')" 
        }}>
        
          <div className="flex gap-4 lg:flex-row md:flex-row flex-col   max-w  border-gray-600  rounded-md p-0">
             <Map  height={300} defaultCenter={[24.8862, 91.8813]} defaultZoom={11}>
                <Marker width={100} anchor={[24.8862, 91.8813]} />
            </Map>
            
            <div className=" p-4 text-gray-100 col-span-1">
                <p className="text-2xl my-4 font-semibold border-b-2 border-gray-100">Our Location</p>
                <p><span className="font-medium text-lg">Address: </span> KingLion Complex, Bishwa Rd, Sylhet 3100, Bangladesh</p>
                <p><span className="font-medium text-lg">Phone : </span> +880175463354</p>
                <p><span className="font-medium text-lg">Located In : </span><a className="btn btn-link" href={location} target="blank">King Lion</a></p>

                
            </div>

        </div>
      </section>
    );
};

export default OurLocation;