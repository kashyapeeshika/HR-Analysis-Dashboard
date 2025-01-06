// For Age Group Distribution Pie chart
export const ageGroupDistribution = {
    labels: ['18-25', '26-35', '36-45', '46-55', '55+'],
    datasets: [
      {
        label: 'Age Group Distribution',
        data: [123, 611, 471, 228, 47],
        backgroundColor: [
          '#C0D6DE',
          '#88b1c1',
          '#508CA4',
          '#365F70',
          '#1D323B',
        ],
        hoverOffset: 4,
      },
    ],
  };

//   For Attrition By Gender Pie Chart
export const attritionByGender = {
    labels : [
        'Male',
        'Female',
      ],
      datasets: [
        {
            label: 'Total Employees',
            data: [889, 591], 
            backgroundColor: '#C0d6de', 
            borderColor: '#C0d6de',
            borderWidth: 1,
          },
          {
            label: 'Attrition (Yes)',
            data: [130, 80], 
            backgroundColor: '#508ca4', 
            borderColor: '#508ca4',
            borderWidth: 1,
          },
          {
            label: 'Attrition (No)',
            data: [759, 511], 
            backgroundColor: '#1d323b', 
            borderColor: '#1d323b',
            borderWidth: 1,
          },    
   
    ],
    options :  {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            stacked: true, 
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            stacked: true, 
            max: 2000, 
            ticks: {
              stepSize: 200, 
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Attrition Rate By Department and Gender',
          },
        },
        barPercentage: 0.8, 
        categoryPercentage: 0.9, // Adjust spacing between categories
      },
    };

// Attrition Rate By Department Bar Chart 
export const attritonRateByDepartment = {
    labels : [
        'Research & Development',
        'Sales',
        'Human Resources'
    ],

    datasets: [
        {
          label: 'Total Employees',
          data: [967, 450, 63], 
          backgroundColor: '#C0d6de80',
          borderColor: '#C0d6de',
          borderWidth: 1,
        },
        {
          label: 'Attrition(Yes)',
          data: [133, 93, 12], 
          backgroundColor: '#508ca480',
          borderColor: '#508ca4',
          borderWidth: 1,
        },
        {
          label: 'Attrition(No)',
          data: [834, 357, 51], 
          backgroundColor: '#1d323b',
          borderColor: '#1d323b',
          borderWidth: 1,
        },
    ],

    options : {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 1200, 
            ticks: {
              stepSize: 200, 
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Attrition Rate By Department',
          },
        },
        barPercentage: 0.8, 
        categoryPercentage: 0.9, 
    },
};

// Average Salary By Department Bar Chart 
export const averageSalaryBydepartment = {
    labels : ['Sales', 'Human Resources', 'Research & Development'],

    datasets: [
        {
          label: 'Average Salary By Department',
          data: [450000, 520000, 700000],
          backgroundColor: [
            '#c0d6de80',
            '#508ca480',
            '#1d323b80'
          ],
          borderColor: [
            '#c0d6de',
            '#508ca4',
            '#1d323b'
          ],
          borderWidth: 1,
        },
    ],

    options : {
        responsive: true,
        indexAxis: 'y', 
        scales: {
          x: {
            beginAtZero: true,
            max: 900000, 
            ticks: {
              stepSize: 100000,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Average Salary By Department',
          },
        },
    },
};

// Average Working Years By Education Field 

// Business Travel Analysis Pie Chart 
export const businessAnalysis = {
    data : {
        labels: [
          'Travel Rarely',
          'Travel-Rarely',
          'Non Travel',
          'Travel Frequently'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [70.4, 0.5, 10.2, 18.9],
          backgroundColor: [
            '#C0D6DE',
            '#88b1c1',
            '#508CA4',
            '#365F70',
            '#1D323B'
          ],
          hoverOffset: 4
        }]
    },
};

// Distance From Home Vs. Attrition Bar Chart
export const distanceHomeVsAttrition = {
    labels : ['0-10', '11-30', '31+', 'Total'],

    datasets: [
        {
          label: 'Attrition (Yes)',
          data: [166, 185, 19, 370],
          backgroundColor: '#C0d6de',
          borderColor: '#C0d6de',
          borderWidth: 1,
        },
        {
          label: 'Attrition (No)',
          data: [574, 259, 277, 1110],
          backgroundColor: '#508ca4',
          borderColor: '#508ca4',
          borderWidth: 1,
        },
        {
          label: 'Total',
          data: [740, 444, 296, 1480],
          backgroundColor: '#1d323b',
          borderColor: '#1d323b',
          borderWidth: 1,
        },
    ],

    options : {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            stacked: true,
            title: {
              display: true,
              text: 'Distance from Home',
            },
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            stacked: true,
            title: {
              display: true,
              text: 'Number of Employees',
            },
            ticks: {
              stepSize: 200,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Distance From Home Vs. Attrition',
          },
        },
        barPercentage: 0.8,
        categoryPercentage: 0.9,
    },
};

// Education Level Vs. Average Years Working At Company
export const educationLevelVsAverageYearsWorkingAtCompany = {
    // chartRef : useRef(null),

    labels : [
        "High School/Some College",
        "Associate's Degree",
        "Bachclor's Degree",
        "Master's Degree",
        'Doctoral Degree', 
    ],

    datasets: [
        {
          label: 'Total Years',
          data: [2.8, 3.5, 4.2, 5.1, 6.3],
          borderColor: '#508ca4',
          backgroundColor: '#508ca4' ,
          borderWidth: 2,
          tension: 0.4, 
          fill: false, 
        },
    ],

    options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 10.0, 
            ticks: {
              stepSize: 1.0, 
            },
          },
        },
        plugins: {
          legend: {
            position: 'top', 
          },
          title: {
            display: false,
            text: 'Work-Life Balance vs Attrition Rate', 
          },
        },
    }
};

// Gender Ratio Doughnut Chart
export const genderRatio = {
    labels: [
        'Male',
        'Female',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [889,591],
        backgroundColor: [
          '#a4c3d0',
          '#43768a',
        ],
        hoverOffset: 4
    }]
};

// New Hires card

// Open Position 

// Satisfaction Levels Comparison 
export const satisfactionLevelsComparison = {
    labels : ['Work-Life Balance', 'Job Satisfaction', 'Relationship Satisfaction'],

    datasets: [
        {
          label: 'Satisfaction Level Comparison',
          data: [3.8, 3.5, 4.1],
          backgroundColor: [
            '#c0d6de80',
            '#508ca480',
            '#1d323b80'
          ],
          borderColor: [
            '#c0d6de',
            '#508ca4',
            '#1d323b'
          ],
          borderWidth: 1,
        },
    ],

    options : {
        responsive: true,
        indexAxis: 'y', // This makes the bar chart horizontal
        scales: {
          x: {
            beginAtZero: true,
            max: 5, // Assuming satisfaction levels are out of 5
            ticks: {
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Satisfaction Levels Comparison',
          },
        },
    },
};

// Total Employees Card

// Training Hours

// Work Life Balance vs. Attrition 
export const workLifeBalanceVsAttrition = {
    // chartRef : useRef(null),

    labels : [
        '1 (Poor)',
        '2 (Fair)',
        '3 (Good)',
        '4 (Excellent)',
    ],

    datasets: [
        {
          label: 'Total Employees',
          data: [81, 346, 889, 154],
          borderColor: '#C0d6de', 
          backgroundColor: '#C0d6de', 
          borderWidth: 2,
          tension: 0.4, 
          fill: false, 
        },
        {
          label: 'Attrition (Yes)',
          data: [56, 288, 771, 127],
          borderColor: '#508ca4', // Line color for Attrition (Yes)
          backgroundColor: '#508ca4', // Fills the area under the line
          borderWidth: 2,
          tension: 0.4,
          fill: false, // Fill the area under the line
        },
        {
          label: 'Attrition (No)',
          data: [25, 58, 128, 27],
          borderColor: '#1d323b', // Line color for Attrition (No)
          backgroundColor: '#1d323b', // Fills the area under the line
          borderWidth: 2,
          tension: 0.4,
          fill: false, // Fill the area under the line
        },
    ],

    options : {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 1200, 
            ticks: {
              stepSize: 200, 
            },
          },
        },
        plugins: {
          legend: {
            position: 'top', 
          },
          title: {
            display: false,
            text: 'Work-Life Balance vs Attrition Rate', 
          },
        },
    },
}