import calendar from '../assets/calendar.svg'
import orderIcon from '../assets/orderIcon.svg'
import viewIcon from '../assets/viewIcon.svg'
import Chart from "./Chart";
const PermformanceMetrics = () => {
    return (
        <div className="p-10 flex flex-col gap-10 bg-[#FFF7EE]">
            <h2 className='text-3xl font-semibold'>Instant Dive into Your Performance Metrics</h2>
            <div className="flex gap-5 font-medium">
                <button className="py-2 px-3 bg-purple-50 rounded-md border-2 hover:border-purple-500">Lifetime</button>
                <button className="py-2 px-3 bg-white rounded-md border-2 hover:border-purple-500">Last Week</button>
                <button className="py-2 px-3 bg-white rounded-md border-2 hover:border-purple-500">Last Month</button>
                <button className="py-2 px-3 bg-white rounded-md border-2 hover:border-purple-500">Last Year</button>
                <div className='flex gap-2 py-2 px-3 bg-white rounded-md border-2 hover:border-purple-500 cursor-pointer'>
                    <p>Customize Time Line</p>
                    <img src={calendar} alt="*" />
                </div>
            </div>
            <div className='w-fit h-fit flex gap-5 flex-wrap flex-shrink-0 '>
                {/* Shipment update */}
                <div className='h-[420px] w-[500px] p-5 flex flex-col border-2 rounded-xl bg-white justify-between overflow-hidden flex-shrink-0 font-medium'>
                    <div className='flex w-full h-fit justify-between'>
                        <h2 className='text-xl font-semibold'>Shipment Updates</h2>
                        <p className='font-normal'>Total Orders : 394</p>
                    </div>
                    <div className="flex shrink-0 h-fit w-full gap-3 overflow-auto">
                        <button className="py-2 px-3 bg-[#FFF7EE] rounded-md border-2 hover:border-amber-400 flex-shrink-0">Delivered</button>
                        <button className="py-2 px-3 bg-gray-100 rounded-md border-2 hover:border-amber-400 flex-shrink-0">Out for delivery</button>
                        <button className="py-2 px-3 bg-gray-100 rounded-md border-2 hover:border-amber-400 flex-shrink-0">Intransit</button>
                        <button className="py-2 px-3 bg-gray-100 rounded-md border-2 hover:border-amber-400 flex-shrink-0">Pending</button>
                        <button className="py-2 px-3 bg-gray-100 rounded-md border-2 hover:border-amber-400 flex-shrink-0">Exception</button>
                    </div>
                    <div className='h-fit w-full'>
                        <Chart />
                    </div>
                    <div className='flex gap-5 flex-wrap font-normal'>
                        <div className='flex gap-3 items-center'>
                            <span className='h-3 w-7 bg-[#5E4200] rounded-full'></span>
                            <p>Exception</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span className='h-3 w-7 bg-[#956F00] rounded-full'></span>
                            <p>Intransit</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span className='h-3 w-7 bg-[#E5A500] rounded-full'></span>
                            <p>Pending</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span className='h-3 w-7 bg-[#FFC879] rounded-full'></span>
                            <p>Delivered</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span className='h-3 w-7 bg-[#FFDDB6] rounded-full'></span>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>
                {/* Fact about you products */}
                <div className='h-[420px] w-[300px] p-5 pr-16 flex flex-col border-2 rounded-xl bg-[#956F00] justify-between flex-shrink-0 text-white'>
                    <h2 className='text-xl font-semibold'>Star Facts about your orders!!!</h2>
                    <p className=''>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
                    <div className='relative w-fit h-fit flex flex-col gap-7'>
                        <p className=''>There are 5 shipments in exception right now.</p>
                        <p className=''>The maximum chargebacks are from Miami.</p>
                        <span className='absolute top-0 -right-12 h-20 w-20 rounded-full blur-sm bg-opacity-40 bg-[#efb538]'></span>
                    </div>
                    <button className='w-fit font-semibold text-sm border-2 text-black bg-white border-gray-300 py-2 px-3 rounded-xl'>Check Orders Page</button>
                </div>
                {/* Tracking Page Views Vs Orders */}
                <div className='h-[420px] w-[500px] p-5 flex flex-col gap-7 justify-between border-2 rounded-xl bg-white overflow-hidden flex-shrink-0'>
                    <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-semibold'>Tracking Page Views Vs Orders</h2>
                        <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
                    </div>
                    <div className='flex w-full h-fit p-5 pr-14 gap-5 text-[#4A4A4A] bg-[#FFEBD5] rounded-xl items-center'>
                        <div className='w-full flex flex-col h-fit'>
                            <p className='font-medium'>Orders</p>
                            <p className='text-5xl font-bold'>80</p>
                        </div>
                        <img className='scale-125' src={orderIcon}  alt='orders'/>
                    </div>
                    <div className='flex w-full h-fit p-5 pr-14 gap-5 text-[#4A4A4A] bg-[#FFC879] rounded-xl items-center'>
                        <div className='w-full flex flex-col h-fit'>
                            <p className='font-medium'>Tracking Page Views</p>
                            <p className='text-5xl font-bold'>44</p>
                        </div>
                        <img className='scale-125' src={viewIcon}  alt='orders'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PermformanceMetrics