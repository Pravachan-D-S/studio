
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
     "CSE / ISE": [
       {
         "role": "Data Scientist",
         "companies": [
           {"company": "TCS", "package": "4-6 LPA", "website": "https://www.tcs.com/careers"},
           {"company": "Infosys", "package": "5-7 LPA", "website": "https://www.infosys.com/careers.html"},
           {"company": "Amazon", "package": "12-18 LPA", "website": "https://www.amazon.jobs/"},
           {"company": "Google", "package": "18-25 LPA", "website": "https://careers.google.com/"}
         ]
       },
       {
         "role": "Software Developer",
         "companies": [
           {"company": "Wipro", "package": "3-5 LPA", "website": "https://careers.wipro.com/"},
           {"company": "Accenture", "package": "5-8 LPA", "website": "https://www.accenture.com/in-en/careers"},
           {"company": "Microsoft", "package": "12-20 LPA", "website": "https://careers.microsoft.com/"},
           {"company": "Adobe", "package": "15-22 LPA", "website": "https://www.adobe.com/careers.html"}
         ]
       },
       {
         "role": "AI/ML Engineer",
         "companies": [
           {"company": "Capgemini", "package": "5-8 LPA", "website": "https://www.capgemini.com/careers/"},
           {"company": "Cognizant", "package": "6-9 LPA", "website": "https://careers.cognizant.com/"},
           {"company": "NVIDIA", "package": "15-22 LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
           {"company": "Google DeepMind", "package": "20-28 LPA", "website": "https://deepmind.google/careers/"}
         ]
       }
     ],
     "ECE": [
       {
         "role": "Embedded Systems Engineer",
         "companies": [
           {"company": "Bosch", "package": "4-6 LPA", "website": "https://www.bosch.in/careers/"},
           {"company": "Continental", "package": "6-9 LPA", "website": "https://www.continental-jobs.com/"},
           {"company": "Qualcomm", "package": "12-16 LPA", "website": "https://www.qualcomm.com/company/careers"},
           {"company": "Intel", "package": "15-20 LPA", "website": "https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html"}
         ]
       },
       {
         "role": "VLSI Engineer",
         "companies": [
           {"company": "Synopsys", "package": "5-8 LPA", "website": "https://www.synopsys.com/careers.html"},
           {"company": "Texas Instruments", "package": "10-14 LPA", "website": "https://careers.ti.com/"},
           {"company": "NVIDIA", "package": "14-20 LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"}
         ]
       },
       {
         "role": "Telecommunications Engineer",
         "companies": [
           {"company": "Ericsson", "package": "4-7 LPA", "website": "https://www.ericsson.com/en/careers"},
           {"company": "Nokia Networks", "package": "6-9 LPA", "website": "https://www.nokia.com/about-us/careers/"},
           {"company": "Samsung Networks", "package": "10-14 LPA", "website": "https://www.samsung.com/us/careers/"}
         ]
       }
     ],
     "EEE": [
       {
         "role": "Power Systems Engineer",
         "companies": [
           {"company": "Siemens", "package": "5-8 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
           {"company": "ABB", "package": "6-9 LPA", "website": "https://global.abb/group/en/careers"},
           {"company": "GE Power", "package": "8-12 LPA", "website": "https://jobs.gecareers.com/power"}
         ]
       },
       {
         "role": "Electrical Engineer",
         "companies": [
           {"company": "Schneider Electric", "package": "4-6 LPA", "website": "https://www.se.com/in/en/about-us/careers/overview.jsp"},
           {"company": "L&T", "package": "5-7 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
           {"company": "Honeywell", "package": "7-10 LPA", "website": "https://careers.honeywell.com/"}
         ]
       }
     ],
     "Mechanical": [
       {
         "role": "Automobile Engineer",
         "companies": [
           {"company": "Ashok Leyland", "package": "3-5 LPA", "website": "https://www.ashokleyland.com/en/careers"},
           {"company": "TVS Motors", "package": "3-5 LPA", "website": "https://www.tvsmotor.com/careers"},
           {"company": "Tata Motors", "package": "4-6 LPA", "website": "https://www.tatamotors.com/careers/"},
           {"company": "Ford India", "package": "6-9 LPA", "website": "https://www.india.ford.com/about-ford/careers/"}
         ]
       },
       {
         "role": "Robotics Engineer",
         "companies": [
           {"company": "Bosch", "package": "4-6 LPA", "website": "https://www.bosch.in/careers/"},
           {"company": "Hyundai", "package": "5-7 LPA", "website": "https://www.hyundai.com/worldwide/en/company/careers"},
           {"company": "Maruti Suzuki", "package": "6-9 LPA", "website": "https://www.marutisuzuki.com/corporate/careers"}
         ]
       }
     ],
     "Civil": [
       {
         "role": "Structural Engineer",
         "companies": [
           {"company": "L&T Construction", "package": "3-5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
           {"company": "Shapoorji Pallonji", "package": "4-6 LPA", "website": "https://www.shapoorjipallonji.com/careers"},
           {"company": "GMR Infra", "package": "5-7 LPA", "website": "https://www.gmrgroup.in/careers"}
         ]
       },
       {
         "role": "Urban Planner",
         "companies": [
           {"company": "AECOM", "package": "5-8 LPA", "website": "https://aecom.com/careers/"},
           {"company": "Tata Projects", "package": "6-9 LPA", "website": "https://www.tataprojects.com/our-dna/work-with-us/"},
           {"company": "Jacobs Engineering", "package": "8-12 LPA", "website": "https://www.jacobs.com/careers"}
         ]
       }
     ]
   },
   "MBA": {
     "Finance": [
       {
         "role": "Financial Analyst",
         "companies": [
           {"company": "HDFC Bank", "package": "5-7 LPA", "website": "https://www.hdfcbank.com/careers"},
           {"company": "ICICI Bank", "package": "6-8 LPA", "website": "https://www.icicicareers.com/"},
           {"company": "KPMG", "package": "9-12 LPA", "website": "https://kpmg.com/xx/en/home/careers.html"},
           {"company": "Deloitte", "package": "10-15 LPA", "website": "https://www2.deloitte.com/us/en/careers/students.html"}
         ]
       },
       {
         "role": "Investment Banker",
         "companies": [
           {"company": "Goldman Sachs", "package": "15-20 LPA", "website": "https://www.goldmansachs.com/careers/"},
           {"company": "JP Morgan", "package": "18-25 LPA", "website": "https://careers.jpmorgan.com/us/en/students"},
           {"company": "Morgan Stanley", "package": "20-28 LPA", "website": "https://www.morganstanley.com/careers"}
         ]
       }
     ],
     "Marketing": [
       {
         "role": "Digital Marketing Manager",
         "companies": [
           {"company": "Hindustan Unilever", "package": "8-12 LPA", "website": "https://www.hul.co.in/careers/"},
           {"company": "P&G", "package": "10-14 LPA", "website": "https://www.pgcareers.com/"},
           {"company": "Flipkart", "package": "12-16 LPA", "website": "https://www.flipkartcareers.com/"}
         ]
       },
       {
         "role": "Brand Manager",
         "companies": [
           {"company": "Amazon", "package": "12-18 LPA", "website": "https://www.amazon.jobs/"},
           {"company": "Swiggy", "package": "10-14 LPA", "website": "https://careers.swiggy.com/"},
           {"company": "Zomato", "package": "9-13 LPA", "website": "https://www.zomato.com/careers"}
         ]
       }
     ],
     "HR": [
       {
         "role": "HR Manager",
         "companies": [
           {"company": "Infosys", "package": "6-9 LPA", "website": "https://www.infosys.com/careers.html"},
           {"company": "Wipro", "package": "5-8 LPA", "website": "https://careers.wipro.com/"},
           {"company": "Deloitte", "package": "9-12 LPA", "website": "https://www2.deloitte.com/us/en/careers/students.html"}
         ]
       }
     ]
   },
   "MCA": {
     "Software Development": [
       {
         "role": "Full Stack Developer",
         "companies": [
           {"company": "Cognizant", "package": "3-5 LPA", "website": "https://careers.cognizant.com/"},
           {"company": "Capgemini", "package": "4-6 LPA", "website": "https://www.capgemini.com/careers/"},
           {"company": "IBM", "package": "7-10 LPA", "website": "https://www.ibm.com/careers/"},
           {"company": "Oracle", "package": "12-16 LPA", "website": "https://www.oracle.com/careers/"}
         ]
       },
       {
         "role": "Database Administrator",
         "companies": [
           {"company": "HCL", "package": "3-5 LPA", "website": "https://www.hcltech.com/careers"},
           {"company": "Accenture", "package": "5-8 LPA", "website": "https://www.accenture.com/in-en/careers"},
           {"company": "Microsoft", "package": "12-18 LPA", "website": "https://careers.microsoft.com/"}
         ]
       }
     ]
   },
   "Diploma": {
     "Computer Science": [
       {
         "role": "Junior Web Developer",
         "companies": [
           {"company": "Infosys", "package": "2.5-3.5 LPA", "website": "https://www.infosys.com/careers.html"},
           {"company": "TCS", "package": "3-4 LPA", "website": "https://www.tcs.com/careers"},
           {"company": "Wipro", "package": "3-4 LPA", "website": "https://careers.wipro.com/"}
         ]
       }
     ],
     "Electronics": [
        {
          "role": "Technician / IoT Developer",
          "companies": [
             {"company": "BHEL", "package": "2.5-3.5 LPA", "website": "https://www.bhel.com/career-gateway"},
             {"company": "L&T", "package": "3-4 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
             {"company": "Siemens", "package": "3.5-5 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"}
          ]
        }
     ],
     "Mechanical": [
       {
         "role": "Technician",
         "companies": [
           {"company": "TVS Motors", "package": "2-3 LPA", "website": "https://www.tvsmotor.com/careers"},
           {"company": "Ashok Leyland", "package": "2.5-3.5 LPA", "website": "https://www.ashokleyland.com/en/careers"},
           {"company": "Tata Motors", "package": "3-4 LPA", "website": "https://www.tatamotors.com/careers/"}
         ]
       }
     ],
     "Civil": [
       {
         "role": "Site Supervisor",
         "companies": [
           {"company": "L&T Construction", "package": "2.5-3.5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
           {"company": "Sobha Developers", "package": "3-4 LPA", "website": "https://www.sobha.com/careers/"},
           {"company": "Brigade Group", "package": "3-4 LPA", "website": "https://www.brigadegroup.com/careers"}
         ]
       }
     ]
   }
}
