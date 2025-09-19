
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
        "role": "Data Scientist",
        "companies": [
          {"company": "TCS", "package": "6-8 LPA", "website": "https://careers.tcs.com"},
          {"company": "Infosys", "package": "5-7 LPA", "website": "https://www.infosys.com/careers.html"},
          {"company": "Amazon", "package": "15-20 LPA", "website": "https://amazon.jobs"},
          {"company": "Google", "package": "18-25 LPA", "website": "https://careers.google.com/"},
          {"company": "Fractal Analytics", "package": "12-18 LPA", "website": "https://fractal.ai/careers/"},
          {"company": "Mu Sigma", "package": "10-15 LPA", "website": "https://www.mu-sigma.com/careers/"}
        ]
      },
      {
        "role": "Software Developer",
        "companies": [
          {"company": "Infosys", "package": "3-5 LPA", "website": "https://careers.infosys.com"},
          {"company": "Wipro", "package": "5-7 LPA", "website": "https://careers.wipro.com/"},
          {"company": "Accenture", "package": "5-8 LPA", "website": "https://www.accenture.com/in-en/careers"},
          {"company": "Microsoft", "package": "15-20 LPA", "website": "https://careers.microsoft.com"},
          {"company": "Adobe", "package": "15-22 LPA", "website": "https://www.adobe.com/careers.html"},
          {"company": "Zoho", "package": "6-12 LPA", "website": "https://www.zoho.com/careers/"}
        ]
      },
      {
        "role": "AI Engineer",
        "companies": [
          {"company": "Capgemini", "package": "5-8 LPA", "website": "https://www.capgemini.com/careers/"},
          {"company": "NVIDIA", "package": "15-22 LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
          {"company": "Google", "package": "20-28 LPA", "website": "https://careers.google.com/"},
          {"company": "Intel", "package": "14-20 LPA", "website": "https://jobs.intel.com"},
          {"company": "IBM", "package": "10-15 LPA", "website": "https://www.ibm.com/careers/in-en/"}
        ]
      },
      {
          "role": "Web Developer",
          "companies": [
              {"company": "TCS", "package": "3.5-5.5 LPA", "website": "https://careers.tcs.com"},
              {"company": "Accenture", "package": "5-8 LPA", "website": "https://www.accenture.com/in-en/careers"},
              {"company": "Capgemini", "package": "4-7 LPA", "website": "https://www.capgemini.com/careers/"},
              {"company": "Cognizant", "package": "4-6 LPA", "website": "https://careers.cognizant.com"}
          ]
      },
      {
          "role": "Cloud Engineer",
          "companies": [
              {"company": "Wipro", "package": "5-7 LPA", "website": "https://careers.wipro.com"},
              {"company": "Deloitte", "package": "7-10 LPA", "website": "https://careers.deloitte.com"},
              {"company": "HCL", "package": "6-9 LPA", "website": "https://www.hcltech.com/careers"},
              {"company": "Oracle", "package": "8-12 LPA", "website": "https://www.oracle.com/careers/"}
          ]
      },
      {
          "role": "Cybersecurity Analyst",
          "companies": [
              {"company": "PwC", "package": "6-10 LPA", "website": "https://www.pwc.in/careers.html"},
              {"company": "KPMG", "package": "7-11 LPA", "website": "https://kpmg.com/in/en/home/careers.html"},
              {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
              {"company": "Palo Alto Networks", "package": "15-25 LPA", "website": "https://www.paloaltonetworks.com/company/careers"}
          ]
      }
    ],
    "ECE": [
      {
        "role": "Embedded Systems Engineer",
        "companies": [
          {"company": "Bosch", "package": "4-6 LPA", "website": "https://careers.bosch.com"},
          {"company": "Continental", "package": "6-9 LPA", "website": "https://www.continental-jobs.com/"},
          {"company": "Qualcomm", "package": "12-16 LPA", "website": "https://www.qualcomm.com/company/careers"},
          {"company": "Intel", "package": "15-20 LPA", "website": "https://jobs.intel.com"},
          {"company": "Samsung R&D", "package": "10-15 LPA", "website": "https://research.samsung.com/careers"}
        ]
      },
      {
        "role": "VLSI Engineer",
        "companies": [
          {"company": "Synopsys", "package": "5-8 LPA", "website": "https://www.synopsys.com/careers.html"},
          {"company": "Texas Instruments", "package": "10-14 LPA", "website": "https://careers.ti.com/"},
          {"company": "NVIDIA", "package": "14-20 LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
          {"company": "Intel", "package": "12-18 LPA", "website": "https://jobs.intel.com"},
          {"company": "AMD", "package": "12-18 LPA", "website": "https://careers.amd.com/"}
        ]
      },
       {
        "role": "IoT Developer",
        "companies": [
          {"company": "HCL Technologies", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
          {"company": "Continental Automotive", "package": "5-10 LPA", "website": "https://www.continental-jobs.com/"},
          {"company": "Siemens", "package": "6-11 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"}
        ]
      }
    ],
    "EEE": [
      {
        "role": "Power Systems Engineer",
        "companies": [
          {"company": "Siemens", "package": "5-8 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "ABB", "package": "6-9 LPA", "website": "https://global.abb/group/en/careers"},
          {"company": "GE Power", "package": "8-12 LPA", "website": "https://jobs.gecareers.com/power"},
          {"company": "Schneider Electric", "package": "6-10 LPA", "website": "https://www.se.com/in/en/about-us/careers/overview.jsp"}
        ]
      },
      {
        "role": "Electrical Engineer",
        "companies": [
          {"company": "Schneider Electric", "package": "4-6 LPA", "website": "https://www.se.com/in/en/about-us/careers/overview.jsp"},
          {"company": "L&T", "package": "5-7 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Honeywell", "package": "7-10 LPA", "website": "https://careers.honeywell.com/us/en"},
          {"company": "Bajaj Electricals", "package": "4-7 LPA", "website": "https://www.bajajelectricals.com/careers/"}
        ]
      }
    ],
    "Mechanical": [
      {
        "role": "Design Engineer (CAD/CAM)",
        "companies": [
          {"company": "Tata Motors", "package": "4-6 LPA", "website": "https://careers.tatamotors.com"},
          {"company": "Mahindra", "package": "6-8 LPA", "website": "https://careers.mahindra.com"},
          {"company": "Ashok Leyland", "package": "3-5 LPA", "website": "https://www.ashokleyland.com/careers"},
          {"company": "Dassault Systèmes", "package": "7-12 LPA", "website": "https://www.3ds.com/careers"}
        ]
      },
       {
        "role": "Automobile Engineer",
        "companies": [
          {"company": "Ashok Leyland", "package": "3-5 LPA", "website": "https://www.ashokleyland.com/careers"},
          {"company": "TVS Motors", "package": "3-5 LPA", "website": "https://www.tvsmotor.com/careers"},
          {"company": "Bosch", "package": "5-7 LPA", "website": "https://careers.bosch.com"},
          {"company": "Larsen & Toubro (L&T)", "package": "5-10 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Maruti Suzuki", "package": "6-9 LPA", "website": "https://www.marutisuzuki.com/corporate/careers"}
        ]
       },
       {
        "role": "Robotics Engineer",
        "companies": [
            {"company": "Tata Motors", "package": "5-10 LPA", "website": "https://careers.tatamotors.com"},
            {"company": "KUKA Robotics", "package": "6-12 LPA", "website": "https://www.kuka.com/en-in/career/jobs"},
            {"company": "ABB Robotics", "package": "7-14 LPA", "website": "https://global.abb/group/en/careers/opportunities/robotics-and-discrete-automation"}
        ]
       }
    ],
    "Civil": [
      {
        "role": "Structural Engineer",
        "companies": [
          {"company": "L&T Construction", "package": "3-5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Shapoorji Pallonji", "package": "4-6 LPA", "website": "https://www.shapoorjipallonji.com/careers"},
          {"company": "GMR Infra", "package": "5-7 LPA", "website": "https://www.gmrgroup.in/careers"},
          {"company": "AFCONS Infrastructure", "package": "5-8 LPA", "website": "https://www.afcons.com/careers"}
        ]
      },
      {
        "role": "Site Supervisor",
        "companies": [
            {"company": "Larsen & Toubro (L&T)", "package": "<5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
            {"company": "DLF", "package": "4-6 LPA", "website": "https://www.dlf.in/careers/"}
        ]
      }
    ]
  },
  "MBA": {
    "Finance": [
      {
        "role": "Financial Analyst",
        "companies": [
          {"company": "HDFC Bank", "package": "5-10 LPA", "website": "https://www.hdfcbank.com/careers"},
          {"company": "ICICI Bank", "package": "6-8 LPA", "website": "https://www.icicicareers.com/"},
          {"company": "KPMG", "package": "9-12 LPA", "website": "https://kpmg.com/in/en/home/careers.html"},
          {"company": "Deloitte", "package": "10-20 LPA", "website": "https://careers.deloitte.com"},
          {"company": "EY", "package": "8-14 LPA", "website": "https://www.ey.com/en_in/careers"}
        ]
      },
      {
        "role": "Investment Banker",
        "companies": [
          {"company": "Goldman Sachs", "package": "15-20 LPA", "website": "https://www.goldmansachs.com/careers/"},
          {"company": "JP Morgan", "package": "18-25 LPA", "website": "https://careers.jpmorgan.com/global/en/home"},
          {"company": "Morgan Stanley", "package": "20-28 LPA", "website": "https://www.morganstanley.com/careers"},
          {"company": "Barclays", "package": "14-22 LPA", "website": "https://home.barclays/careers/"}
        ]
      }
    ],
    "Marketing": [
      {
        "role": "Digital Marketing Manager",
        "companies": [
          {"company": "Hindustan Unilever", "package": "8-12 LPA", "website": "https://www.hul.co.in/careers/"},
          {"company": "P&G", "package": "10-14 LPA", "website": "https://www.pgcareers.com/"},
          {"company": "Flipkart", "package": "12-16 LPA", "website": "https://www.flipkartcareers.com/"},
          {"company": "Myntra", "package": "10-15 LPA", "website": "https://careers.myntra.com/"}
        ]
      },
      {
        "role": "Brand Manager",
        "companies": [
          {"company": "Amazon", "package": "12-18 LPA", "website": "https://amazon.jobs"},
          {"company": "Swiggy", "package": "10-14 LPA", "website": "https://careers.swiggy.com/"},
          {"company": "Zomato", "package": "9-13 LPA", "website": "https://www.zomato.com/careers"},
          {"company": "Nestle", "package": "12-18 LPA", "website": "https://www.nestle.in/jobs"}
        ]
      }
    ],
     "HR": [
       {
         "role": "HR Manager",
         "companies": [
           {"company": "Infosys", "package": "6-9 LPA", "website": "https://www.infosys.com/careers.html"},
           {"company": "Wipro", "package": "5-8 LPA", "website": "https://careers.wipro.com/"},
           {"company": "Deloitte", "package": "9-12 LPA", "website": "https://careers.deloitte.com"},
            {"company": "Reliance Jio", "package": "5-10 LPA", "website": "https://careers.jio.com"},
            {"company": "Mahindra Group", "package": "7-11 LPA", "website": "https://www.mahindra.com/careers"}
         ]
       }
     ],
     "Analytics": [
        {
            "role": "Data Analytics Manager",
            "companies": [
                {"company": "Cognizant", "package": "10-20 LPA", "website": "https://careers.cognizant.com"},
                {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
                {"company": "PwC (PricewaterhouseCoopers)", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
                {"company": "American Express", "package": "12-18 LPA", "website": "https://www.americanexpress.com/en-us/careers/"}
            ]
        },
        {
            "role": "Business Analyst",
            "companies": [
                {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
                 {"company": "PwC (PricewaterhouseCoopers)", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
                 {"company": "Accenture Strategy", "package": "8-15 LPA", "website": "https://www.accenture.com/in-en/careers/jobsearch?jk=&sb=1&vw=0&is_rj=0&pg=1&display=25"}
            ]
        }
     ]
  },
  "MCA": {
    "Software Development": [
      {
        "role": "Full Stack Developer",
        "companies": [
          {"company": "Cognizant", "package": "6-8 LPA", "website": "https://careers.cognizant.com"},
          {"company": "Capgemini", "package": "4-6 LPA", "website": "https://www.capgemini.com/careers/"},
          {"company": "IBM", "package": "7-10 LPA", "website": "https://www.ibm.com/careers/in-en/"},
          {"company": "Oracle", "package": "12-16 LPA", "website": "https://www.oracle.com/careers/"},
          {"company": "ThoughtWorks", "package": "8-14 LPA", "website": "https://www.thoughtworks.com/careers"}
        ]
      }
    ],
     "Data Science": [
        {
            "role": "Data Analyst",
            "companies": [
                {"company": "Infosys", "package": "5-7 LPA", "website": "https://careers.infosys.com"},
                {"company": "HCL Technologies", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
                {"company": "Cognizant", "package": "5-10 LPA", "website": "https://careers.cognizant.com"},
                {"company": "LTIMindtree", "package": "6-9 LPA", "website": "https://www.ltimindtree.com/careers/"}
            ]
        }
    ],
    "Cybersecurity": [
        {
            "role": "Cybersecurity Analyst",
            "companies": [
                {"company": "Microsoft India", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
                {"company": "CrowdStrike", "package": "15-25 LPA", "website": "https://www.crowdstrike.com/careers/"},
                {"company": "FireEye", "package": "12-20 LPA", "website": "https://www.fireeye.com/company/careers.html"}
            ]
        }
    ]
  },
  "Diploma": {
    "Computer Science": [
        {
            "role": "Junior Web Developer",
            "companies": [
                {"company": "Tata Consultancy Services (TCS)", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Infosys", "package": "2.5-3.5 LPA", "website": "https://careers.infosys.com"},
                {"company": "Wipro", "package": "2.5-3.5 LPA", "website": "https://careers.wipro.com/"}
            ]
        },
        {
            "role": "IT Support Specialist",
            "companies": [
                {"company": "Tata Consultancy Services (TCS)", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Reliance Jio", "package": "<5 LPA", "website": "https://careers.jio.com"},
                {"company": "HCL Technologies", "package": "2.5-4 LPA", "website": "https://www.hcltech.com/careers"}
            ]
        }
     ],
     "Electronics": [
        {
            "role": "Electronics Technician",
            "companies": [
                {"company": "Bosch", "package": "2-4 LPA", "website": "https://careers.bosch.com"},
                {"company": "Samsung", "package": "2.5-4.5 LPA", "website": "https://careers.samsung.com"},
                {"company": "Havells", "package": "2-3.5 LPA", "website": "https://www.havells.com/en/discover-havells/career.html"}
            ]
        }
     ],
    "Mechanical": [
      {
        "role": "CAD Designer",
        "companies": [
          {"company": "TVS Motors", "package": "2-3 LPA", "website": "https://www.tvsmotor.com/careers"},
          {"company": "Ashok Leyland", "package": "2.5-3.5 LPA", "website": "https://www.ashokleyland.com/careers"},
          {"company": "Tata Motors", "package": "3-4 LPA", "website": "https://careers.tatamotors.com"}
        ]
      }
    ],
    "Civil": [
        {
            "role": "Site Supervisor",
            "companies": [
                {"company": "L&T Construction", "package": "2.5-3.5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
                {"company": "Sobha Developers", "package": "3-4 LPA", "website": "https://www.sobha.com/careers/"},
                {"company": "Brigade Group", "package": "3-4 LPA", "website": "https://www.brigadegroup.com/careers"},
                {"company": "Prestige Group", "package": "3-4.5 LPA", "website": "https://www.prestigeconstructions.com/careers/"}
            ]
        }
     ]
  }
}
