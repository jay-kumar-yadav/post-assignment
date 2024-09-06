import alertTriangle from '../assets/alertTriangle.svg'
import information from '../assets/information.svg'
const MainContainer = () => {
    return (
        <div className='py-12 px-10 min-h[40vh] w-full bg-pink-50 bg-opacity-50 flex flex-col gap-10'>
            <h1 className='text-3xl font-semibold'>Welcome, John Mathew!!</h1>
            <div className='w-fit h-fit flex gap-5 flex-wrap flex-shrink-0'>
                {/* Order container */}
                <div className='h-[200px] w-[400px] p-5 flex flex-col border-2 rounded-xl bg-white gap-7 justify-between'>
                    <div className='f-fit w-fit flex flex-col gap-3'>
                        <p className='text-lg font-medium'>Order Sync Successful!</p>
                        <p>Your order details from the last 30 days have been successfully synced. Check them out now!</p>
                    </div>
                    <div className='w-fit h-fit'>
                        <button className='text-white text-sm bg-black bg-opacity-75 font-medium border-2 border-black  py-2 px-3 rounded-xl'>Explore your Orders</button>
                    </div>
                </div>

                {/* Customize container */}
                <div className='h-[200px] w-[400px] p-5 flex flex-col border-2 rounded-xl bg-amber-200 text-amber-700 gap-7 justify-between'>
                    <div className='f-fit w-fit flex flex-col gap-3'>
                        <div className='h-fit w-fit flex gap-2'>
                            <img src={alertTriangle} alt='*' />
                            <p className='text-lg font-medium'>Customize Customer Notification</p>
                        </div>
                        <p>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
                    </div>
                    <div className='w-fit h-fit'>
                        <button className='text-white text-sm bg-black bg-opacity-75 font-medium border-2 border-black  py-2 px-3 rounded-xl'>Configure Notifications</button>
                    </div>
                </div>

                {/* Information container */}
                <div className='h-[200px] w-[400px] p-5 flex flex-col border-2 rounded-xl bg-blue-50  gap-7 justify-between'>
                    <div className='f-fit w-fit flex flex-col gap-3'>
                        <div className='h-fit w-fit flex gap-2'>
                            <img src={information} alt='*' />
                            <p className='text-lg font-medium'>Your Tracking Link has been generated</p>
                        </div>
                        <p>Include the <a href='#' className='underline text-blue-600 '>Link</a> to Your Store's Navigation Menu.</p>
                    </div>
                    <div className='w-fit h-fit flex gap-5'>
                        <button className='text-sm border-2 border-gray-300 py-2 px-3 font-medium rounded-xl'>Copy Link</button>
                        <button className='text-white text-sm bg-black bg-opacity-75 font-medium border-2 border-black  py-2 px-3 rounded-xl'>Go To Navigation Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContainer