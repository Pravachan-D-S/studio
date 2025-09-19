
export interface Company {
    company: string;
    package: string;
    website?: string;
}

export interface Role {
    role: string;
    companies: Company[];
}

export interface JobsData {
    [stream: string]: {
        [specialization: string]: Role[];
    };
}

export const jobsData: JobsData = {
   "Engineering": {
     "CSE / ISE / AIML": [
        {
            "role": "AI Engineer",
            "companies": [
              {"company": "Amazon", "package": "15-20 LPA", "website": "https://amazon.jobs"},
              {"company": "NVIDIA", "package": "15-22 LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
              {"company": "Google", "package": "18-25 LPA", "website": "https://careers.google.com/"}
            ]
        },
        {
            "role": "Data Scientist",
            "companies": [
              {"company": "TCS", "package": "6-8 LPA", "website": "https://careers.tcs.com"},
              {"company": "Infosys", "package": "5-7 LPA", "website": "https://www.infosys.com/careers.html"},
              {"company": "Wipro", "package": "5-7 LPA", "website": "https://careers.wipro.com/"},
            ]
        },
        {
            "role": "Machine Learning Engineer",
            "companies": [
                {"company": "Microsoft", "package": "15-20 LPA", "website": "https://careers.microsoft.com"},
                {"company": "Adobe", "package": "15-22 LPA", "website": "https://www.adobe.com/careers.html"}
            ]
        }
     ],
     "ECE": [
       {
         "role": "Embedded Systems Engineer",
         "companies": [
           {"company": "Bosch", "package": "4-6 LPA", "website": "https://careers.bosch.com"},
           {"company": "Qualcomm", "package": "10-14 LPA", "website": "https://www.qualcomm.com/company/careers"},
           {"company": "Intel", "package": "12-18 LPA", "website": "https://jobs.intel.com"},
           {"company": "Samsung", "package": "8-12 LPA", "website": "https://careers.samsung.com"}
         ]
       },
       {
        "role": "VLSI Engineer",
        "companies": [
            {"company": "Qualcomm", "package": "10-14 LPA", "website": "https://www.qualcomm.com/company/careers"},
            {"company": "Intel", "package": "12-18 LPA", "website": "https://jobs.intel.com"},
        ]
       }
     ],
     "Mechanical": [
       {
         "role": "Design Engineer",
         "companies": [
           {"company": "Tata Motors", "package": "4-6 LPA", "website": "https://careers.tatamotors.com"},
           {"company": "Mahindra", "package": "6-8 LPA", "website": "https://careers.mahindra.com"}
         ]
       },
       {
        "role": "Production Engineer",
        "companies": [
            {"company": "Ashok Leyland", "package": "3-5 LPA", "website": "https://www.ashokleyland.com/careers"},
        ]
       },
       {
        "role": "Automobile Engineer",
        "companies": [
            {"company": "Bosch", "package": "5-7 LPA", "website": "https://careers.bosch.com"}
        ]
       }
     ],
     "Civil": [
        {
            "role": "Structural Engineer",
            "companies": [
                {"company": "L&T Construction", "package": "3-5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"}
            ]
        }
     ],
     "EEE": [
        {
            "role": "Electrical Engineer",
            "companies": [
                {"company": "Siemens", "package": "5-8 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"}
            ]
        }
     ]
   },
   "MBA": {
     "Finance": [
       {
         "role": "Financial Analyst",
         "companies": [
           {"company": "Deloitte", "package": "8-12 LPA", "website": "https://careers.deloitte.com"},
           {"company": "HDFC Bank", "package": "6-9 LPA", "website": "https://www.hdfcbank.com/careers"},
           {"company": "PwC", "package": "7-10 LPA", "website": "https://www.pwc.in/careers.html"},
           {"company": "EY", "package": "10-14 LPA", "website": "https://www.ey.com/en_in/careers"}
         ]
       }
     ],
     "Marketing": [
       {
         "role": "Brand Manager",
         "companies": [
           {"company": "Unilever", "package": "10-15 LPA", "website": "https://careers.unilever.com"},
           {"company": "ITC", "package": "7-10 LPA", "website": "https://www.itcportal.com/careers/index.aspx"},
           {"company": "HUL", "package": "8-11 LPA", "website": "https://www.hul.co.in/careers/"},
           {"company": "PepsiCo", "package": "9-13 LPA", "website": "https://www.pepsicojobs.com/main"}
         ]
       }
     ],
     "HR": [],
     "Operations": [],
     "Analytics": []
   },
   "MCA": {
    "Software Development": [
        {
            "role": "Software Engineer",
            "companies": [
                {"company": "TCS", "package": "3-5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Microsoft", "package": "15-20 LPA", "website": "https://careers.microsoft.com"}
            ]
        },
        {
            "role": "Full Stack Developer",
            "companies": [
                {"company": "Cognizant", "package": "6-8 LPA", "website": "https://careers.cognizant.com"}
            ]
        }
    ],
    "Data Science": [
        {
            "role": "Data Analyst",
            "companies": [
                {"company": "Infosys", "package": "5-7 LPA", "website": "https://careers.infosys.com"}
            ]
        }
    ],
    "Networking": [],
    "Cybersecurity": []
   },
   "Diploma": {
     "Computer Science": [
        {
            "role": "Technician",
            "companies": [
                {"company": "TVS", "package": "2-3 LPA", "website": "https://careers.tvsmotor.com"}
            ]
        }
     ],
     "Electronics": [
        {
            "role": "Service Engineer",
            "companies": [
                {"company": "Bosch", "package": "2-4 LPA", "website": "https://careers.bosch.com"}
            ]
        }
     ],
     "Mechanical": [
        {
            "role": "Junior Engineer",
            "companies": [
                {"company": "L&T", "package": "3-5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"}
            ]
        }
     ],
     "Civil": [
        {
            "role": "Operator",
            "companies": [
                {"company": "Tata Steel", "package": "2-4 LPA", "website": "https://www.tatasteel.com/careers/"}
            ]
        }
     ]
   }
}
