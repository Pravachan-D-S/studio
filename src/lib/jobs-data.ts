
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
          {"company": "TCS", "package": "5-10 LPA", "website": "https://careers.tcs.com"},
          {"company": "Infosys", "package": "5-10 LPA", "website": "https://www.infosys.com/careers.html"},
          {"company": "Wipro", "package": "5-10 LPA", "website": "https://careers.wipro.com"},
          {"company": "Capgemini", "package": "5-10 LPA", "website": "https://www.capgemini.com/careers"},
          {"company": "Tech Mahindra", "package": "5-10 LPA", "website": "https://careers.techmahindra.com"},
          {"company": "Amazon", "package": "20+ LPA", "website": "https://amazon.jobs"},
          {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
          {"company": "Flipkart", "package": "20+ LPA", "website": "https://www.flipkartcareers.com"},
          {"company": "Walmart Labs", "package": "20+ LPA", "website": "https://walmartglobaltech.com/careers"},
          {"company": "Fractal Analytics", "package": "10-20 LPA", "website": "https://fractal.ai/careers/"},
          {"company": "Mu Sigma", "package": "10-20 LPA", "website": "https://www.mu-sigma.com/careers/"},
          {"company": "Publicis Sapient", "package": "10-20 LPA", "website": "https://www.publicissapient.com/careers"},
          {"company": "LatentView Analytics", "package": "10-20 LPA", "website": "https://www.latentview.com/careers"},
          {"company": "Tredence", "package": "10-20 LPA", "website": "https://www.tredence.com/careers"}
        ]
      },
      {
        "role": "Software Developer",
        "companies": [
          {"company": "Infosys", "package": "<5 LPA", "website": "https://careers.infosys.com"},
          {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com/"},
          {"company": "Cognizant", "package": "<5 LPA", "website": "https://careers.cognizant.com"},
          {"company": "Hexaware", "package": "<5 LPA", "website": "https://hexaware.com/careers/"},
          {"company": "UST Global", "package": "<5 LPA", "website": "https://www.ust.com/en/careers"},
          {"company": "Accenture", "package": "5-10 LPA", "website": "https://www.accenture.com/in-en/careers"},
          {"company": "Zoho", "package": "5-10 LPA", "website": "https://www.zoho.com/careers/"},
          {"company": "Mindtree", "package": "5-10 LPA", "website": "https://www.ltimindtree.com/careers/"},
          {"company": "Cisco", "package": "5-10 LPA", "website": "https://www.cisco.com/c/en/us/about/careers.html"},
          {"company": "SAP Labs", "package": "5-10 LPA", "website": "https://www.sap.com/india/about/careers.html"},
          {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
          {"company": "Adobe", "package": "20+ LPA", "website": "https://www.adobe.com/careers.html"},
          {"company": "Salesforce", "package": "20+ LPA", "website": "https://www.salesforce.com/company/careers/"},
          {"company": "Intuit", "package": "20+ LPA", "website": "https://www.intuit.com/careers/"},
          {"company": "Atlassian", "package": "20+ LPA", "website": "https://www.atlassian.com/company/careers"},
          {"company": "Oracle", "package": "10-20 LPA", "website": "https://www.oracle.com/careers/"},
          {"company": "VMware", "package": "10-20 LPA", "website": "https://careers.vmware.com/"},
          {"company": "Paypal", "package": "10-20 LPA", "website": "https://careers.pypl.com/home/"},
          {"company": "Dell", "package": "10-20 LPA", "website": "https://jobs.dell.com/"},
          {"company": "J.P. Morgan Chase", "package": "10-20 LPA", "website": "https://careers.jpmorgan.com/global/en/home"}
        ]
      },
      {
        "role": "AI Engineer",
        "companies": [
          {"company": "Capgemini", "package": "5-10 LPA", "website": "https://www.capgemini.com/careers/"},
          {"company": "LTIMindtree", "package": "5-10 LPA", "website": "https://www.ltimindtree.com/careers/"},
          {"company": "Persistent Systems", "package": "5-10 LPA", "website": "https://www.persistent.com/careers/"},
          {"company": "Happiest Minds", "package": "5-10 LPA", "website": "https://www.happiestminds.com/careers/"},
          {"company": "Cyient", "package": "5-10 LPA", "website": "https://www.cyient.com/careers"},
          {"company": "NVIDIA", "package": "20+ LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
          {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "OpenAI", "package": "20+ LPA", "website": "https://openai.com/careers/"},
          {"company": "DeepMind", "package": "20+ LPA", "website": "https://www.deepmind.com/careers"},
          {"company": "Tesla", "package": "20+ LPA", "website": "https://www.tesla.com/careers"},
          {"company": "Intel", "package": "10-20 LPA", "website": "https://jobs.intel.com"},
          {"company": "IBM", "package": "10-20 LPA", "website": "https://www.ibm.com/careers/in-en/"},
          {"company": "Samsung R&D", "package": "10-20 LPA", "website": "https://research.samsung.com/careers"},
          {"company": "Mercedes-Benz R&D", "package": "10-20 LPA", "website": "https://www.mercedes-benz.com/en/career/"},
          {"company": "Bosch Global", "package": "10-20 LPA", "website": "https://careers.bosch.com/"}
        ]
      },
      {
        "role": "Web Developer",
        "companies": [
            {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
            {"company": "Cognizant", "package": "<5 LPA", "website": "https://careers.cognizant.com"},
            {"company": "DXC Technology", "package": "<5 LPA", "website": "https://careers.dxc.com/"},
            {"company": "Mphasis", "package": "<5 LPA", "website": "https://careers.mphasis.com/"},
            {"company": "Virtusa", "package": "<5 LPA", "website": "https://www.virtusa.com/careers"},
            {"company": "Accenture", "package": "5-10 LPA", "website": "https://www.accenture.com/in-en/careers"},
            {"company": "Capgemini", "package": "5-10 LPA", "website": "https://www.capgemini.com/careers/"},
            {"company": "Publicis Sapient", "package": "5-10 LPA", "website": "https://www.publicissapient.com/careers"},
            {"company": "ThoughtWorks", "package": "5-10 LPA", "website": "https://www.thoughtworks.com/careers"},
            {"company": "Razorpay", "package": "5-10 LPA", "website": "https://razorpay.com/careers/"}
        ]
      },
      {
          "role": "Cloud Engineer",
          "companies": [
              {"company": "Wipro", "package": "5-10 LPA", "website": "https://careers.wipro.com"},
              {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
              {"company": "HCL", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
              {"company": "Oracle", "package": "5-10 LPA", "website": "https://www.oracle.com/careers/"},
              {"company": "Rackspace", "package": "5-10 LPA", "website": "https://www.rackspace.com/careers"},
              {"company": "AWS", "package": "20+ LPA", "website": "https://www.amazon.jobs/en/teams/aws"},
              {"company": "Google Cloud", "package": "20+ LPA", "website": "https://careers.google.com/teams/cloud/"},
              {"company": "Microsoft Azure", "package": "20+ LPA", "website": "https://careers.microsoft.com/v2/global/en/search.html?q=azure"},
              {"company": "DigitalOcean", "package": "20+ LPA", "website": "https://www.digitalocean.com/company/careers/"},
              {"company": "Snowflake", "package": "20+ LPA", "website": "https://careers.snowflake.com/"},
              {"company": "Red Hat", "package": "10-20 LPA", "website": "https://www.redhat.com/en/jobs"},
              {"company": "Equinix", "package": "10-20 LPA", "website": "https://careers.equinix.com/"},
              {"company": "NetApp", "package": "10-20 LPA", "website": "https://www.netapp.com/company/careers/"},
              {"company": "F5 Networks", "package": "10-20 LPA", "website": "https://www.f5.com/company/careers"},
              {"company": "Citrix", "package": "10-20 LPA", "website": "https://jobs.citrix.com/"}
          ]
      },
      {
          "role": "Cybersecurity Analyst",
          "companies": [
              {"company": "PwC", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
              {"company": "EY", "package": "5-10 LPA", "website": "https://www.ey.com/en_in/careers"},
              {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com/"},
              {"company": "Infosys", "package": "5-10 LPA", "website": "https://www.infosys.com/careers.html"},
              {"company": "HCL Tech", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
              {"company": "KPMG", "package": "10-20 LPA", "website": "https://kpmg.com/in/en/home/careers.html"},
              {"company": "FireEye", "package": "10-20 LPA", "website": "https://www.fireeye.com/company/careers.html"},
              {"company": "CrowdStrike", "package": "10-20 LPA", "website": "https://www.crowdstrike.com/careers/"},
              {"company": "McAfee", "package": "10-20 LPA", "website": "https://careers.mcafee.com/"},
              {"company": "Symantec", "package": "10-20 LPA", "website": "https://www.broadcom.com/company/careers/"},
              {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
              {"company": "Palo Alto Networks", "package": "20+ LPA", "website": "https://www.paloaltonetworks.com/company/careers"},
              {"company": "Fortinet", "package": "20+ LPA", "website": "https://www.fortinet.com/corporate/careers"},
              {"company": "Check Point", "package": "20+ LPA", "website": "https://www.checkpoint.com/company/careers/"},
              {"company": "Cisco Security", "package": "20+ LPA", "website": "https://www.cisco.com/c/en/us/about/careers/we-are-cisco/security.html"}
          ]
      }
    ],
    "ECE": [
      {
        "role": "Embedded Systems Engineer",
        "companies": [
          {"company": "Bosch", "package": "<5 LPA", "website": "https://careers.bosch.com"},
          {"company": "Tata Elxsi", "package": "<5 LPA", "website": "https://www.tataelxsi.com/careers"},
          {"company": "KPIT Technologies", "package": "<5 LPA", "website": "https://www.kpit.com/careers/"},
          {"company": "Visteon", "package": "<5 LPA", "website": "https://www.visteon.com/careers/"},
          {"company": "L&T Technology Services", "package": "<5 LPA", "website": "https://www.ltts.com/careers"},
          {"company": "Continental", "package": "5-10 LPA", "website": "https://www.continental-jobs.com/"},
          {"company": "Samsung R&D", "package": "5-10 LPA", "website": "https://research.samsung.com/careers"},
          {"company": "Harman", "package": "5-10 LPA", "website": "https://www.harman.com/careers"},
          {"company": "Delphi", "package": "5-10 LPA", "website": "https://www.borgwarner.com/careers"},
          {"company": "DENSO", "package": "5-10 LPA", "website": "https://www.denso.com/global/en/careers/"},
          {"company": "Qualcomm", "package": "10-20 LPA", "website": "https://www.qualcomm.com/company/careers"},
          {"company": "Intel", "package": "10-20 LPA", "website": "https://jobs.intel.com"},
          {"company": "NXP Semiconductors", "package": "10-20 LPA", "website": "https://www.nxp.com/company/about-nxp/careers:CAREERS"},
          {"company": "Microchip Technology", "package": "10-20 LPA", "website": "https://www.microchip.com/en-us/about/careers"},
          {"company": "Cypress Semiconductor", "package": "10-20 LPA", "website": "https://www.infineon.com/cms/en/careers/"}
        ]
      },
      {
        "role": "VLSI Engineer",
        "companies": [
          {"company": "Synopsys", "package": "5-10 LPA", "website": "https://www.synopsys.com/careers.html"},
          {"company": "Cadence", "package": "5-10 LPA", "website": "https://www.cadence.com/en_US/home/company/careers.html"},
          {"company": "Mentor Graphics", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "Sankalp Semiconductor", "package": "5-10 LPA", "website": "https://www.sankalpsemi.com/careers/"},
          {"company": "Wipro VLSI", "package": "5-10 LPA", "website": "https://careers.wipro.com/"},
          {"company": "Texas Instruments", "package": "10-20 LPA", "website": "https://careers.ti.com/"},
          {"company": "Intel", "package": "10-20 LPA", "website": "https://jobs.intel.com"},
          {"company": "AMD", "package": "10-20 LPA", "website": "https://careers.amd.com/"},
          {"company": "Broadcom", "package": "10-20 LPA", "website": "https://www.broadcom.com/company/careers/"},
          {"company": "Marvell", "package": "10-20 LPA", "website": "https://www.marvell.com/careers.html"},
          {"company": "NVIDIA", "package": "20+ LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
          {"company": "Apple", "package": "20+ LPA", "website": "https://www.apple.com/careers/in/"},
          {"company": "Google (Pixel Team)", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "Qualcomm", "package": "20+ LPA", "website": "https://www.qualcomm.com/company/careers"},
          {"company": "MediaTek", "package": "20+ LPA", "website": "https://corp.mediatek.com/careers"}
        ]
      },
       {
        "role": "IoT Developer",
        "companies": [
          {"company": "HCL Technologies", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
          {"company": "Continental Automotive", "package": "5-10 LPA", "website": "https://www.continental-jobs.com/"},
          {"company": "Siemens", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "Robert Bosch", "package": "5-10 LPA", "website": "https://careers.bosch.com/"},
          {"company": "Tata Communications", "package": "5-10 LPA", "website": "https://www.tatacommunications.com/careers/"}
        ]
      }
    ],
    "EEE": [
      {
        "role": "Power Systems Engineer",
        "companies": [
          {"company": "Siemens", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "ABB", "package": "5-10 LPA", "website": "https://global.abb/group/en/careers"},
          {"company": "GE Power", "package": "5-10 LPA", "website": "https://jobs.gecareers.com/power"},
          {"company": "Schneider Electric", "package": "5-10 LPA", "website": "https://www.se.com/in/en/about-us/careers/overview.jsp"},
          {"company": "Larsen & Toubro", "package": "5-10 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"}
        ]
      },
      {
        "role": "Electrical Engineer",
        "companies": [
          {"company": "Schneider Electric", "package": "<5 LPA", "website": "https://www.se.com/in/en/about-us/careers/overview.jsp"},
          {"company": "Bajaj Electricals", "package": "<5 LPA", "website": "https://www.bajajelectricals.com/careers/"},
          {"company": "Havells", "package": "<5 LPA", "website": "https://www.havells.com/en/discover-havells/career.html"},
          {"company": "Crompton Greaves", "package": "<5 LPA", "website": "https://www.cgglobal.com/careers"},
          {"company": "Polycab", "package": "<5 LPA", "website": "https://polycab.com/careers/"},
          {"company": "L&T", "package": "5-10 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Honeywell", "package": "5-10 LPA", "website": "https://careers.honeywell.com/us/en"},
          {"company": "Eaton", "package": "5-10 LPA", "website": "https://www.eaton.com/in/en-gb/company/careers.html"},
          {"company": "Emerson", "package": "5-10 LPA", "website": "https://www.emerson.com/en-in/careers"},
          {"company": "Legrand", "package": "5-10 LPA", "website": "https://www.legrand.co.in/en/careers"}
        ]
      }
    ],
    "Mechanical": [
      {
        "role": "Design Engineer (CAD/CAM)",
        "companies": [
          {"company": "Tata Motors", "package": "<5 LPA", "website": "https://careers.tatamotors.com"},
          {"company": "Ashok Leyland", "package": "<5 LPA", "website": "https://www.ashokleyland.com/careers"},
          {"company": "Hero MotoCorp", "package": "<5 LPA", "website": "https://www.heromotocorp.com/en-in/careers/"},
          {"company": "TVS Motor", "package": "<5 LPA", "website": "https://www.tvsmotor.com/careers"},
          {"company": "Force Motors", "package": "<5 LPA", "website": "https://www.forcemotors.com/careers/"},
          {"company": "Mahindra", "package": "5-10 LPA", "website": "https://careers.mahindra.com"},
          {"company": "Dassault Systèmes", "package": "5-10 LPA", "website": "https://www.3ds.com/careers"},
          {"company": "Autodesk", "package": "5-10 LPA", "website": "https://www.autodesk.com/careers"},
          {"company": "ANSYS", "package": "5-10 LPA", "website": "https://www.ansys.com/en-in/careers"},
          {"company": "Siemens PLM", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"}
        ]
      },
       {
        "role": "Automobile Engineer",
        "companies": [
          {"company": "Ashok Leyland", "package": "<5 LPA", "website": "https://www.ashokleyland.com/careers"},
          {"company": "TVS Motors", "package": "<5 LPA", "website": "https://www.tvsmotor.com/careers"},
          {"company": "Royal Enfield", "package": "<5 LPA", "website": "https://www.royalenfield.com/in/en/careers/"},
          {"company": "Force Motors", "package": "<5 LPA", "website": "https://www.forcemotors.com/careers/"},
          {"company": "SML Isuzu", "package": "<5 LPA", "website": "https://www.smlisuzu.com/career.php"},
          {"company": "Bosch", "package": "5-10 LPA", "website": "https://careers.bosch.com"},
          {"company": "Larsen & Toubro (L&T)", "package": "5-10 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Maruti Suzuki", "package": "5-10 LPA", "website": "https://www.marutisuzuki.com/corporate/careers"},
          {"company": "Hyundai", "package": "5-10 LPA", "website": "https://www.hyundai.com/in/en/hyundai-story/career"},
          {"company": "Kia Motors", "package": "5-10 LPA", "website": "https://www.kia.com/in/our-story/careers.html"}
        ]
       },
       {
        "role": "Robotics Engineer",
        "companies": [
            {"company": "Tata Motors", "package": "5-10 LPA", "website": "https://careers.tatamotors.com"},
            {"company": "KUKA Robotics", "package": "5-10 LPA", "website": "https://www.kuka.com/en-in/career/jobs"},
            {"company": "ABB Robotics", "package": "5-10 LPA", "website": "https://global.abb/group/en/careers/opportunities/robotics-and-discrete-automation"},
            {"company": "Fanuc India", "package": "5-10 LPA", "website": "https://www.fanucindia.com/careers"},
            {"company": "Yaskawa India", "package": "5-10 LPA", "website": "https://www.yaskawaindia.in/career"}
        ]
       }
    ],
    "Civil": [
      {
        "role": "Structural Engineer",
        "companies": [
          {"company": "L&T Construction", "package": "<5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Shapoorji Pallonji", "package": "<5 LPA", "website": "https://www.shapoorjipallonji.com/careers"},
          {"company": "Tata Projects", "package": "<5 LPA", "website": "https://www.tataprojects.com/our-dna/careers/"},
          {"company": "Afcons Infrastructure", "package": "<5 LPA", "website": "https://www.afcons.com/careers"},
          {"company": "NCC Limited", "package": "<5 LPA", "website": "https://www.ncclimited.com/careers/"},
          {"company": "GMR Infra", "package": "5-10 LPA", "website": "https://www.gmrgroup.in/careers"},
          {"company": "AFCONS Infrastructure", "package": "5-10 LPA", "website": "https://www.afcons.com/careers"},
          {"company": "Jacobs", "package": "5-10 LPA", "website": "https://www.jacobs.com/careers"},
          {"company": "Aecom", "package": "5-10 LPA", "website": "https://aecom.com/careers/"},
          {"company": "Arup", "package": "5-10 LPA", "website": "https://www.arup.com/careers"}
        ]
      },
      {
        "role": "Site Supervisor",
        "companies": [
            {"company": "Larsen & Toubro (L&T)", "package": "<5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
            {"company": "DLF", "package": "<5 LPA", "website": "https://www.dlf.in/careers/"},
            {"company": "Sobha Ltd", "package": "<5 LPA", "website": "https://www.sobha.com/careers/"},
            {"company": "Prestige Group", "package": "<5 LPA", "website": "https://www.prestigeconstructions.com/careers/"},
            {"company": "Godrej Properties", "package": "<5 LPA", "website": "https://www.godrejproperties.com/careers"}
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
          {"company": "ICICI Bank", "package": "5-10 LPA", "website": "https://www.icicicareers.com/"},
          {"company": "EY", "package": "5-10 LPA", "website": "https://www.ey.com/en_in/careers"},
          {"company": "CRISIL", "package": "5-10 LPA", "website": "https://www.crisil.com/en/home/careers.html"},
          {"company": "Axis Bank", "package": "5-10 LPA", "website": "https://www.axisbank.com/careers"},
          {"company": "KPMG", "package": "10-20 LPA", "website": "https://kpmg.com/in/en/home/careers.html"},
          {"company": "Deloitte", "package": "10-20 LPA", "website": "https://careers.deloitte.com"},
          {"company": "Goldman Sachs", "package": "10-20 LPA", "website": "https://www.goldmansachs.com/careers/"},
          {"company": "American Express", "package": "10-20 LPA", "website": "https://www.americanexpress.com/en-us/careers/"},
          {"company": "Mastercard", "package": "10-20 LPA", "website": "https://www.mastercard.us/en-us/vision/who-we-are/careers.html"}
        ]
      },
      {
        "role": "Investment Banker",
        "companies": [
          {"company": "Goldman Sachs", "package": "20+ LPA", "website": "https://www.goldmansachs.com/careers/"},
          {"company": "JP Morgan", "package": "20+ LPA", "website": "https://careers.jpmorgan.com/global/en/home"},
          {"company": "Morgan Stanley", "package": "20+ LPA", "website": "https://www.morganstanley.com/careers"},
          {"company": "Bank of America", "package": "20+ LPA", "website": "https://careers.bankofamerica.com/"},
          {"company": "Citigroup", "package": "20+ LPA", "website": "https://careers.citi.com/"},
          {"company": "Barclays", "package": "10-20 LPA", "website": "https://home.barclays/careers/"},
          {"company": "Deutsche Bank", "package": "10-20 LPA", "website": "https://careers.db.com/"},
          {"company": "Credit Suisse", "package": "10-20 LPA", "website": "https://www.credit-suisse.com/careers/en.html"},
          {"company": "HSBC", "package": "10-20 LPA", "website": "https://www.hsbc.com/careers"},
          {"company": "Nomura", "package": "10-20 LPA", "website": "https://www.nomura.com/careers/"}
        ]
      }
    ],
    "Marketing": [
      {
        "role": "Digital Marketing Manager",
        "companies": [
          {"company": "Hindustan Unilever", "package": "5-10 LPA", "website": "https://www.hul.co.in/careers/"},
          {"company": "L'Oréal", "package": "5-10 LPA", "website": "https://careers.loreal.com/"},
          {"company": "Marico", "package": "5-10 LPA", "website": "https://marico.com/india/careers"},
          {"company": "Reckitt", "package": "5-10 LPA", "website": "https://www.reckitt.com/careers/"},
          {"company": "ITC", "package": "5-10 LPA", "website": "https://www.itcportal.com/careers/"},
          {"company": "P&G", "package": "10-20 LPA", "website": "https://www.pgcareers.com/"},
          {"company": "Flipkart", "package": "10-20 LPA", "website": "https://www.flipkartcareers.com/"},
          {"company": "Myntra", "package": "10-20 LPA", "website": "https://careers.myntra.com/"},
          {"company": "Amazon", "package": "10-20 LPA", "website": "https://amazon.jobs"},
          {"company": "Google India", "package": "10-20 LPA", "website": "https://careers.google.com/"}
        ]
      },
      {
        "role": "Brand Manager",
        "companies": [
          {"company": "Swiggy", "package": "5-10 LPA", "website": "https://careers.swiggy.com/"},
          {"company": "Zomato", "package": "5-10 LPA", "website": "https://www.zomato.com/careers"},
          {"company": "Oyo Rooms", "package": "5-10 LPA", "website": "https://www.oyorooms.com/careers/"},
          {"company": "Cure.fit", "package": "5-10 LPA", "website": "https://www.cult.fit/careers"},
          {"company": "BYJU'S", "package": "5-10 LPA", "website": "https://byjus.com/careers-at-byjus/"},
          {"company": "Amazon", "package": "10-20 LPA", "website": "https://amazon.jobs"},
          {"company": "Nestle", "package": "10-20 LPA", "website": "https://www.nestle.in/jobs"},
          {"company": "Pepsico", "package": "10-20 LPA", "website": "https://www.pepsicojobs.com/main/"},
          {"company": "Coca-Cola", "package": "10-20 LPA", "website": "https://www.coca-colacompany.com/careers"},
          {"company": "Mondelez", "package": "10-20 LPA", "website": "https://www.mondelezinternational.com/careers"}
        ]
      }
    ],
     "HR": [
       {
         "role": "HR Manager",
         "companies": [
           {"company": "Infosys", "package": "5-10 LPA", "website": "https://www.infosys.com/careers.html"},
           {"company": "Wipro", "package": "5-10 LPA", "website": "https://careers.wipro.com/"},
           {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
           {"company": "Reliance Jio", "package": "5-10 LPA", "website": "https://careers.jio.com"},
           {"company": "Mahindra Group", "package": "5-10 LPA", "website": "https://www.mahindra.com/careers"}
         ]
       }
     ],
     "Analytics": [
        {
            "role": "Data Analytics Manager",
            "companies": [
                {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
                {"company": "PwC (PricewaterhouseCoopers)", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
                {"company": "Kantar", "package": "5-10 LPA", "website": "https://www.kantar.com/careers"},
                {"company": "NielsenIQ", "package": "5-10 LPA", "website": "https://nielseniq.com/global/en/careers/"},
                {"company": "Genpact", "package": "5-10 LPA", "website": "https://www.genpact.com/careers"},
                {"company": "Cognizant", "package": "10-20 LPA", "website": "https://careers.cognizant.com"},
                {"company": "American Express", "package": "10-20 LPA", "website": "https://www.americanexpress.com/en-us/careers/"},
                {"company": "Barclays", "package": "10-20 LPA", "website": "https://home.barclays/careers/"},
                {"company": "HSBC", "package": "10-20 LPA", "website": "https://www.hsbc.com/careers"},
                {"company": "Citibank", "package": "10-20 LPA", "website": "https://careers.citi.com/"}
            ]
        },
        {
            "role": "Business Analyst",
            "companies": [
                {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
                {"company": "PwC (PricewaterhouseCoopers)", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
                {"company": "Epsilon", "package": "5-10 LPA", "website": "https://www.epsilon.com/us/about-us/careers"},
                {"company": "EXL Service", "package": "5-10 LPA", "website": "https://www.exlservice.com/careers"},
                {"company": "WNS Global", "package": "5-10 LPA", "website": "https://www.wns.com/careers"},
                {"company": "Accenture Strategy", "package": "10-20 LPA", "website": "https://www.accenture.com/in-en/careers/jobsearch?jk=&sb=1&vw=0&is_rj=0&pg=1&display=25"},
                {"company": "Bain & Company", "package": "20+ LPA", "website": "https://www.bain.com/careers/"},
                {"company": "McKinsey & Company", "package": "20+ LPA", "website": "https://www.mckinsey.com/careers/home"},
                {"company": "Boston Consulting Group (BCG)", "package": "20+ LPA", "website": "https://careers.bcg.com/"},
                {"company": "A.T. Kearney", "package": "20+ LPA", "website": "https://www.kearney.com/careers"}
            ]
        }
     ]
  },
  "MCA": {
    "Software Development": [
      {
        "role": "Full Stack Developer",
        "companies": [
          {"company": "Capgemini", "package": "<5 LPA", "website": "https://www.capgemini.com/careers/"},
          {"company": "CGI", "package": "<5 LPA", "website": "https://www.cgi.com/en/careers"},
          {"company": "Infogain", "package": "<5 LPA", "website": "https://www.infogain.com/careers/"},
          {"company": "Amdocs", "package": "<5 LPA", "website": "https://www.amdocs.com/careers"},
          {"company": "Hexaware", "package": "<5 LPA", "website": "https://hexaware.com/careers/"},
          {"company": "Cognizant", "package": "5-10 LPA", "website": "https://careers.cognizant.com"},
          {"company": "IBM", "package": "5-10 LPA", "website": "https://www.ibm.com/careers/in-en/"},
          {"company": "ThoughtWorks", "package": "5-10 LPA", "website": "https://www.thoughtworks.com/careers"},
          {"company": "Paytm", "package": "5-10 LPA", "website": "https://paytm.com/careers/"},
          {"company": "Freshworks", "package": "5-10 LPA", "website": "https://www.freshworks.com/company/careers/"},
          {"company": "Oracle", "package": "10-20 LPA", "website": "https://www.oracle.com/careers/"},
          {"company": "SAP", "package": "10-20 LPA", "website": "https://www.sap.com/india/about/careers.html"},
          {"company": "Intuit", "package": "10-20 LPA", "website": "https://www.intuit.com/careers/"},
          {"company": "Walmart Global Tech", "package": "10-20 LPA", "website": "https://walmartglobaltech.com/careers"},
          {"company": "Target", "package": "10-20 LPA", "website": "https://corporate.target.com/careers"}
        ]
      }
    ],
     "Data Science": [
        {
            "role": "Data Analyst",
            "companies": [
                {"company": "Infosys", "package": "5-10 LPA", "website": "https://careers.infosys.com"},
                {"company": "HCL Technologies", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
                {"company": "Cognizant", "package": "5-10 LPA", "website": "https://careers.cognizant.com"},
                {"company": "LTIMindtree", "package": "5-10 LPA", "website": "https://www.ltimindtree.com/careers/"},
                {"company": "TCS", "package": "5-10 LPA", "website": "https://careers.tcs.com"}
            ]
        }
    ],
    "Cybersecurity": [
        {
            "role": "Cybersecurity Analyst",
            "companies": [
                {"company": "FireEye", "package": "10-20 LPA", "website": "https://www.fireeye.com/company/careers.html"},
                {"company": "Rapid7", "package": "10-20 LPA", "website": "https://www.rapid7.com/careers/"},
                {"company": "Qualys", "package": "10-20 LPA", "website": "https://www.qualys.com/company/careers/"},
                {"company": "Tenable", "package": "10-20 LPA", "website": "https://www.tenable.com/careers"},
                {"company": "Zscaler", "package": "10-20 LPA", "website": "https://www.zscaler.com/careers"},
                {"company": "Microsoft India", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
                {"company": "CrowdStrike", "package": "20+ LPA", "website": "https://www.crowdstrike.com/careers/"},
                {"company": "Okta", "package": "20+ LPA", "website": "https://www.okta.com/company/careers/"},
                {"company": "Splunk", "package": "20+ LPA", "website": "https://www.splunk.com/en_us/careers.html"},
                {"company": "Proofpoint", "package": "20+ LPA", "website": "https://www.proofpoint.com/us/company/careers"}
            ]
        }
    ]
  },
  "Diploma": {
    "Computer Science": [
        {
            "role": "Junior Web Developer",
            "companies": [
                {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Infosys", "package": "<5 LPA", "website": "https://careers.infosys.com"},
                {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com/"},
                {"company": "HCL Tech", "package": "<5 LPA", "website": "https://www.hcltech.com/careers"},
                {"company": "LTIMindtree", "package": "<5 LPA", "website": "https://www.ltimindtree.com/careers/"}
            ]
        },
        {
            "role": "IT Support Specialist",
            "companies": [
                {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Reliance Jio", "package": "<5 LPA", "website": "https://careers.jio.com"},
                {"company": "HCL Technologies", "package": "<5 LPA", "website": "https://www.hcltech.com/careers"},
                {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com"},
                {"company": "Accenture", "package": "<5 LPA", "website": "https://www.accenture.com/in-en/careers"}
            ]
        }
     ],
     "Electronics": [
        {
            "role": "Electronics Technician",
            "companies": [
                {"company": "Bosch", "package": "<5 LPA", "website": "https://careers.bosch.com"},
                {"company": "Samsung", "package": "<5 LPA", "website": "https://careers.samsung.com"},
                {"company": "Havells", "package": "<5 LPA", "website": "https://www.havells.com/en/discover-havells/career.html"},
                {"company": "LG Electronics", "package": "<5 LPA", "website": "https://www.lg.com/in/about-lg/careers"},
                {"company": "Voltas", "package": "<5 LPA", "website": "https://www.voltas.com/careers"}
            ]
        }
     ],
    "Mechanical": [
      {
        "role": "CAD Designer",
        "companies": [
          {"company": "TVS Motors", "package": "<5 LPA", "website": "https://www.tvsmotor.com/careers"},
          {"company": "Ashok Leyland", "package": "<5 LPA", "website": "https://www.ashokleyland.com/careers"},
          {"company": "Tata Motors", "package": "<5 LPA", "website": "https://careers.tatamotors.com"},
          {"company": "Royal Enfield", "package": "<5 LPA", "website": "https://www.royalenfield.com/in/en/careers/"},
          {"company": "Mahindra & Mahindra", "package": "<5 LPA", "website": "https://careers.mahindra.com"}
        ]
      }
    ],
    "Civil": [
        {
            "role": "Site Supervisor",
            "companies": [
                {"company": "L&T Construction", "package": "<5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
                {"company": "Sobha Developers", "package": "<5 LPA", "website": "https://www.sobha.com/careers/"},
                {"company": "Brigade Group", "package": "<5 LPA", "website": "https://www.brigadegroup.com/careers"},
                {"company": "Prestige Group", "package": "<5 LPA", "website": "https://www.prestigeconstructions.com/careers/"},
                {"company": "DLF", "package": "<5 LPA", "website": "https://www.dlf.in/careers/"}
            ]
        }
     ]
  }
}
