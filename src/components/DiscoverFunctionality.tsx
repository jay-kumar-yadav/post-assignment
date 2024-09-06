import paypal from '../assets/paypal.svg'
import alibaba from '../assets/alibaba.svg'
import instagramFeed from '../assets/instagramFeed.svg'
import googleAnalysis from '../assets/googleAnalysis.svg'
import shofifyFlow from '../assets/shofifyFlow.svg'
const DiscoverFunctionality = () => {
    return (
        <div className='p-10 h h-fit w-full flex flex-col gap-10 bg-pink-50 bg-opacity-50 text-[#4A4A4A]'>
            <h2 className='text-3xl font-semibold'>Discover the Heart of Our Functionality</h2>
            {/* Elevate Your Brand Aesthetics with Custom Tracking Page Styles */}
            <div className="h-fit w-full flex gap-5">
                <div className='h-[500px] w-[400px] p-5 flex flex-col border-2 rounded-xl bg-white justify-between'>
                    <div className="flex flex-col h-fit w-full gap-2">
                        <h2 className="text-xl font-semibold">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h2>
                        <p className="">Immerse your customers in a branded experience by personalizing the colors on your tracking page. </p>
                    </div>
                    <div className="flex flex-col gap-1 text-black font-medium">
                        <p>Accent Color</p>
                        <div className="h-fit flex items-center w-full justify-between">
                            <span className="h-10 px-3 flex items-center w-2/3 border-2 rounded-lg">FF9898</span>
                            <span className="h-10 px-3 flex items-center w-1/4 border-2 bg-[#FF9898] border-[#FF9898] rounded-lg"></span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-black font-medium">
                        <p>Text Color</p>
                        <div className="h-fit flex items-center w-full justify-between">
                            <span className="h-10 px-3 flex items-center w-2/3 border-2 rounded-lg">571010</span>
                            <span className="h-10 px-3 flex items-center w-1/4 border-2 bg-[#571010] border-[#571010] rounded-lg"></span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-black font-medium">
                        <p>Background Color</p>
                        <div className="h-fit flex items-center w-full justify-between">
                            <span className="h-10 px-3 flex items-center w-2/3 border-2 rounded-lg">FFEAEA</span>
                            <span className="h-10 px-3 flex items-center w-1/4 border-2 bg-[#FFEAEA] border-[#FFEAEA] rounded-lg"></span>
                        </div>
                    </div>
                    <div className='w-fit h-fit flex gap-5 font-medium'>
                        <button className='text-sm border-2 border-gray-300 py-1 px-3 rounded-lg'>Preview</button>
                        <button className='text-white text-sm bg-black bg-opacity-75 border-2 border-black  py-1 px-3 rounded-lg'>Apply Colors</button>
                    </div>
                </div>
                {/* Exclusive Onboarding Support for High-Volume Brands */}
                <div className='h-[500px] w-[450px] flex flex-col gap-7 font-medium'>
                    <div className="h-fit w-full p-5 flex flex-col gap-7 border-2 rounded-xl bg-white">
                        <div className="flex flex-col gap-2">
                        <h1 className='text-xl font-semibold'>Exclusive Onboarding Support for High-Volume Brands</h1>
                            <p className="font-normal">Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
                        </div>
                        <button className='text-white w-fit h-fit text-sm bg-black bg-opacity-75 border-2 border-black  py-1 px-3 rounded-lg'>Schedule A Call</button>
                    </div>
                    <div className="h-fit w-full p-5 flex flex-col gap-6 border-2 rounded-xl bg-white">
                        <div className="flex flex-col gap-2">
                            <h1 className='text-xl font-semibold'>Explore Our Integrated Ecosystem</h1>
                            <p className="font-normal">Discover a variety of popular integrations tailored for your convenience.</p>
                        </div>
                        <div className='flex gap-7'>
                            <img src={paypal} alt='paypal' />
                            <img src={alibaba} alt='alibaba' />
                            <img src={instagramFeed} alt='instagramFeed' />
                            <img src={googleAnalysis} alt='googleAnalysis' />
                            <img src={shofifyFlow} alt='shofifyFlow' />
                        </div>
                        <button className='text-white w-fit h-fit text-sm bg-black bg-opacity-75 border-2 border-black  py-1 px-3 rounded-lg'>Explore Integrations</button>
                    </div>
                </div>
                {/* Seamlessly Integrate Custom HTML Elements */}
                <div className='h-[500px] w-[400px] p-5 flex flex-col border-2 rounded-xl bg-white justify-between'>
                    <div className="flex flex-col h-fit w-full gap-2">
                        <h2 className="text-xl font-semibold">Seamlessly Integrate Custom HTML Elements</h2>
                        <p className="">Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
                    </div>
                    <div className="flex flex-col gap-1 text-black font-medium">
                        <p>HTML Link</p>
                        <textarea className='rounded-lg border-2 outline-none px-3' placeholder='Value' rows={6} cols={1} />
                    </div>
                    <div className='w-fit h-fit flex gap-5 font-medium'>
                        <button className='text-sm border-2 border-gray-300 py-1 px-3 rounded-lg'>Preview</button>
                        <button className='text-white text-sm bg-black bg-opacity-75 border-2 border-black  py-1 px-3 rounded-lg'>Apply Colors</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverFunctionality