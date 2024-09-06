import { Doughnut  } from 'react-chartjs-2';
import { Chart as ChartJS, ChartOptions, ArcElement, Title, Tooltip, Legend, } from 'chart.js';
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const data = {
    labels: ['Exception', 'Intransit', 'Pending', 'Delivered', 'Pending'],
    datasets: [
        {
            label: '# of Delivered',
            data: [10, 50, 20, 35, 40],
            backgroundColor: [
                'rgba(255, 221, 182, 1)',
                'rgba(94, 66, 0, 1)',
                'rgba(149, 111, 0, 1)',
                'rgba(229, 165, 0, 1)',  
                'rgba(255, 200, 121, 1)', 
            ],
            borderColor: [
                'rgba(255, 221, 182, 1)',
                'rgba(94, 66, 0, 1)',  
                'rgba(149, 111, 0, 1)',
                'rgba(229, 165, 0, 1)',  
                'rgba(255, 200, 121, 1)', 
            ],
            borderWidth: 1,
        },
    ],
};

const options: ChartOptions<'doughnut'> = {
    responsive: true,
    animation: {
        duration: 0,
    },
    hover: {
        mode: 'index',
    },
    plugins: {
        legend: {
            display:false,
        },
        title: {
            display: false,
        },
    },
};

const Chart = () => {
    return (
        <div className="w-full h-[160px] flex justify-center items-center">
            <Doughnut data={data} options={options} />
        </div>
    )
};

export default Chart;