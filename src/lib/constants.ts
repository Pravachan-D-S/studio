export const streams = ['Engineering', 'MBA', 'MCA', 'Diploma'];

export const specializations: { [key: string]: string[] } = {
  Engineering: ['CSE / ISE', 'ECE', 'Mechanical', 'Civil', 'EEE'],
  MBA: ['Finance', 'Marketing', 'HR', 'Operations', 'Analytics'],
  MCA: ['Software Development', 'Data Science', 'Networking', 'Cybersecurity'],
  Diploma: ['Computer Science', 'Electronics', 'Mechanical', 'Civil'],
};

export const programDurations: { [key: string]: string } = {
  Engineering: '4',
  MBA: '2',
  MCA: '3',
  Diploma: '3',
};

export const salaryRanges = ['<5 LPA', '5-10 LPA', '10-20 LPA', '20+ LPA'];

export const aimingCareers: { [key: string]: { [key: string]: string[] } } = {
    Engineering: {
        'CSE / ISE': ['Data Scientist', 'Web Developer', 'AI Engineer', 'Cloud Engineer', 'Software Developer', 'Cybersecurity Analyst'],
        'ECE': ['Embedded Systems Engineer', 'VLSI Engineer', 'IoT Developer', 'Telecommunications Engineer', 'Signal Processing Engineer'],
        'Mechanical': ['Automobile Engineer', 'Robotics Engineer', 'Design Engineer (CAD/CAM)', 'Manufacturing Engineer', 'Thermal Systems Engineer'],
        'Civil': ['Structural Engineer', 'Urban Planner', 'Construction Manager', 'Environmental Engineer', 'Surveying & GIS Specialist'],
        'EEE': ['Electrical Engineer', 'Power Systems Engineer', 'Control Systems Engineer'], // Assuming EEE maps here
    },
    MBA: {
        'Finance': ['Financial Analyst', 'Investment Banker', 'Risk Manager', 'Corporate Finance Manager', 'Wealth Manager'],
        'Marketing': ['Digital Marketing Manager', 'Brand Manager', 'Market Research Analyst', 'Product Manager', 'Sales Strategist'],
        'HR': ['HR Manager', 'Talent Acquisition Specialist', 'Training & Development Manager', 'Employee Relations Manager', 'Compensation & Benefits Analyst'],
        'Operations': ['Operations Manager', 'Supply Chain Analyst', 'Logistics Manager', 'Quality Control Manager', 'Project Manager'],
        'Analytics': ['Business Analyst', 'Data Analytics Manager', 'Strategy Consultant', 'BI Specialist', 'Operations Research Analyst'],
    },
    MCA: {
        'Software Development': ['Full Stack Developer', 'Mobile App Developer', 'Backend Engineer', 'Cloud Solutions Architect', 'Game Developer'],
        'Data Science': ['Data Analyst', 'Data Scientist', 'Machine Learning Engineer', 'Business Intelligence Developer', 'AI Researcher'],
        'Networking': ['Network Administrator', 'Cloud Networking Engineer', 'Systems Engineer', 'DevOps Engineer', 'IT Infrastructure Manager'],
        'Cybersecurity': ['Security Analyst', 'Penetration Tester', 'Ethical Hacker', 'Security Architect', 'SOC Analyst'],
    },
    Diploma: {
        'Computer Science': ['Junior Web Developer', 'Software Tester', 'IT Support Specialist', 'Mobile App Developer', 'Database Assistant'],
        'Electronics': ['Electronics Technician', 'IoT Developer', 'PCB Design Assistant', 'Automation Technician', 'Embedded Systems Assistant'],
        'Mechanical': ['CAD Designer', 'Workshop Supervisor', 'Production Assistant', 'Maintenance Technician', 'CNC Operator'],
        'Civil': ['Site Supervisor', 'Draftsman (AutoCAD Civil)', 'Junior Surveyor', 'Construction Technician', 'Estimation Assistant'],
    },
};
