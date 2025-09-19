
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
          {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
          {"company": "Infosys", "package": "<5 LPA", "website": "https://www.infosys.com/careers.html"},
          {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com"},
          {"company": "Capgemini", "package": "<5 LPA", "website": "https://www.capgemini.com/careers"},
          {"company": "Accenture", "package": "<5 LPA", "website": "https://www.accenture.com/in-en/careers"},
          {"company": "Fractal Analytics", "package": "5-10 LPA", "website": "https://fractal.ai/careers/"},
          {"company": "Mu Sigma", "package": "5-10 LPA", "website": "https://www.mu-sigma.com/careers/"},
          {"company": "Publicis Sapient", "package": "5-10 LPA", "website": "https://www.publicissapient.com/careers"},
          {"company": "LatentView Analytics", "package": "5-10 LPA", "website": "https://www.latentview.com/careers"},
          {"company": "Tredence", "package": "5-10 LPA", "website": "https://www.tredence.com/careers"},
          {"company": "Amazon", "package": "10-20 LPA", "website": "https://amazon.jobs"},
          {"company": "Flipkart", "package": "10-20 LPA", "website": "https://www.flipkartcareers.com"},
          {"company": "Walmart Labs", "package": "10-20 LPA", "website": "https://walmartglobaltech.com/careers"},
          {"company": "American Express", "package": "10-20 LPA", "website": "https://www.americanexpress.com/en-us/careers/"},
          {"company": "PayPal", "package": "10-20 LPA", "website": "https://careers.pypl.com/home/"},
          {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
          {"company": "Netflix", "package": "20+ LPA", "website": "https://jobs.netflix.com/"},
          {"company": "LinkedIn", "package": "20+ LPA", "website": "https://www.linkedin.com/company/linkedin/jobs/"},
          {"company": "Airbnb", "package": "20+ LPA", "website": "https://careers.airbnb.com/"}
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
          {"company": "Oracle", "package": "10-20 LPA", "website": "https://www.oracle.com/careers/"},
          {"company": "VMware", "package": "10-20 LPA", "website": "https://careers.vmware.com/"},
          {"company": "Paypal", "package": "10-20 LPA", "website": "https://careers.pypl.com/home/"},
          {"company": "Dell", "package": "10-20 LPA", "website": "https://jobs.dell.com/"},
          {"company": "J.P. Morgan Chase", "package": "10-20 LPA", "website": "https://careers.jpmorgan.com/global/en/home"},
          {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
          {"company": "Adobe", "package": "20+ LPA", "website": "https://www.adobe.com/careers.html"},
          {"company": "Salesforce", "package": "20+ LPA", "website": "https://www.salesforce.com/company/careers/"},
          {"company": "Intuit", "package": "20+ LPA", "website": "https://www.intuit.com/careers/"},
          {"company": "Atlassian", "package": "20+ LPA", "website": "https://www.atlassian.com/company/careers"}
        ]
      },
      {
        "role": "AI Engineer",
        "companies": [
           {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
           {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com"},
           {"company": "HCL Tech", "package": "<5 LPA", "website": "https://www.hcltech.com/careers"},
           {"company": "Tech Mahindra", "package": "<5 LPA", "website": "https://careers.techmahindra.com"},
           {"company": "Infosys", "package": "<5 LPA", "website": "https://www.infosys.com/careers.html"},
          {"company": "Capgemini", "package": "5-10 LPA", "website": "https://www.capgemini.com/careers/"},
          {"company": "LTIMindtree", "package": "5-10 LPA", "website": "https://www.ltimindtree.com/careers/"},
          {"company": "Persistent Systems", "package": "5-10 LPA", "website": "https://www.persistent.com/careers/"},
          {"company": "Happiest Minds", "package": "5-10 LPA", "website": "https://www.happiestminds.com/careers/"},
          {"company": "Cyient", "package": "5-10 LPA", "website": "https://www.cyient.com/careers"},
          {"company": "Intel", "package": "10-20 LPA", "website": "https://jobs.intel.com"},
          {"company": "IBM", "package": "10-20 LPA", "website": "https://www.ibm.com/careers/in-en/"},
          {"company": "Samsung R&D", "package": "10-20 LPA", "website": "https://research.samsung.com/careers"},
          {"company": "Mercedes-Benz R&D", "package": "10-20 LPA", "website": "https://www.mercedes-benz.com/en/career/"},
          {"company": "Bosch Global", "package": "10-20 LPA", "website": "https://careers.bosch.com/"},
          {"company": "NVIDIA", "package": "20+ LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
          {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "OpenAI", "package": "20+ LPA", "website": "https://openai.com/careers/"},
          {"company": "DeepMind", "package": "20+ LPA", "website": "https://www.deepmind.com/careers"},
          {"company": "Tesla", "package": "20+ LPA", "website": "https://www.tesla.com/careers"}
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
            {"company": "Razorpay", "package": "5-10 LPA", "website": "https://razorpay.com/careers/"},
            {"company": "Oracle", "package": "10-20 LPA", "website": "https://www.oracle.com/careers/"},
            {"company": "SAP", "package": "10-20 LPA", "website": "https://www.sap.com/india/about/careers.html"},
            {"company": "Intuit", "package": "10-20 LPA", "website": "https://www.intuit.com/careers/"},
            {"company": "Walmart Global Tech", "package": "10-20 LPA", "website": "https://walmartglobaltech.com/careers"},
            {"company": "Target", "package": "10-20 LPA", "website": "https://corporate.target.com/careers"},
            {"company": "Go-Jek", "package": "20+ LPA", "website": "https://www.gojek.io/careers"},
            {"company": "PhonePe", "package": "20+ LPA", "website": "https://www.phonepe.com/careers/"},
            {"company": "CRED", "package": "20+ LPA", "website": "https://cred.club/careers"},
            {"company": "Swiggy", "package": "20+ LPA", "website": "https://careers.swiggy.com/"},
            {"company": "Postman", "package": "20+ LPA", "website": "https://www.postman.com/company/careers/"}
        ]
      },
      {
          "role": "Cloud Engineer",
          "companies": [
              {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
              {"company": "Infosys", "package": "<5 LPA", "website": "https://www.infosys.com/careers.html"},
              {"company": "Capgemini", "package": "<5 LPA", "website": "https://www.capgemini.com/careers"},
              {"company": "Mphasis", "package": "<5 LPA", "website": "https://careers.mphasis.com/"},
              {"company": "Hexaware", "package": "<5 LPA", "website": "https://hexaware.com/careers/"},
              {"company": "Wipro", "package": "5-10 LPA", "website": "https://careers.wipro.com"},
              {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
              {"company": "HCL", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
              {"company": "Oracle", "package": "5-10 LPA", "website": "https://www.oracle.com/careers/"},
              {"company": "Rackspace", "package": "5-10 LPA", "website": "https://www.rackspace.com/careers"},
              {"company": "Red Hat", "package": "10-20 LPA", "website": "https://www.redhat.com/en/jobs"},
              {"company": "Equinix", "package": "10-20 LPA", "website": "https://careers.equinix.com/"},
              {"company": "NetApp", "package": "10-20 LPA", "website": "https://www.netapp.com/company/careers/"},
              {"company": "F5 Networks", "package": "10-20 LPA", "website": "https://www.f5.com/company/careers"},
              {"company": "Citrix", "package": "10-20 LPA", "website": "https://jobs.citrix.com/"},
              {"company": "AWS", "package": "20+ LPA", "website": "https://www.amazon.jobs/en/teams/aws"},
              {"company": "Google Cloud", "package": "20+ LPA", "website": "https://careers.google.com/teams/cloud/"},
              {"company": "Microsoft Azure", "package": "20+ LPA", "website": "https://careers.microsoft.com/v2/global/en/search.html?q=azure"},
              {"company": "DigitalOcean", "package": "20+ LPA", "website": "https://www.digitalocean.com/company/careers/"},
              {"company": "Snowflake", "package": "20+ LPA", "website": "https://careers.snowflake.com/"}
          ]
      },
      {
          "role": "Cybersecurity Analyst",
          "companies": [
              {"company": "SecureWorks", "package": "<5 LPA", "website": "https://www.secureworks.com/careers"},
              {"company": "Quick Heal", "package": "<5 LPA", "website": "https://www.quickheal.com/careers/"},
              {"company": "Sequretek", "package": "<5 LPA", "website": "https://sequretek.com/careers/"},
              {"company": "eScan", "package": "<5 LPA", "website": "https://www.escanav.com/en/about-us/career.asp"},
              {"company": "K7 Computing", "package": "<5 LPA", "website": "https://www.k7computing.com/in/careers"},
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
          {"company": "Cypress Semiconductor", "package": "10-20 LPA", "website": "https://www.infineon.com/cms/en/careers/"},
          {"company": "Apple", "package": "20+ LPA", "website": "https://www.apple.com/careers/in/"},
          {"company": "Tesla", "package": "20+ LPA", "website": "https://www.tesla.com/careers"},
          {"company": "NVIDIA", "package": "20+ LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
          {"company": "Waymo", "package": "20+ LPA", "website": "https://waymo.com/careers/"},
          {"company": "Boston Dynamics", "package": "20+ LPA", "website": "https://www.bostondynamics.com/careers"}
        ]
      },
      {
        "role": "VLSI Engineer",
        "companies": [
          {"company": "MosChip", "package": "<5 LPA", "website": "https://moschip.com/careers/"},
          {"company": "eInfochips", "package": "<5 LPA", "website": "https://www.einfochips.com/careers/"},
          {"company": "Tessolve", "package": "<5 LPA", "website": "https://tessolve.com/careers/"},
          {"company": "Sankalp Semiconductor", "package": "<5 LPA", "website": "https://www.sankalpsemi.com/careers/"},
          {"company": "Invecas", "package": "<5 LPA", "website": "https://www.invecas.com/careers/"},
          {"company": "Synopsys", "package": "5-10 LPA", "website": "https://www.synopsys.com/careers.html"},
          {"company": "Cadence", "package": "5-10 LPA", "website": "https://www.cadence.com/en_US/home/company/careers.html"},
          {"company": "Mentor Graphics", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "Wipro VLSI", "package": "5-10 LPA", "website": "https://careers.wipro.com/"},
          {"company": "HCL VLSI", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
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
          {"company": "Tata Elxsi", "package": "<5 LPA", "website": "https://www.tataelxsi.com/careers"},
          {"company": "KPIT Technologies", "package": "<5 LPA", "website": "https://www.kpit.com/careers/"},
          {"company": "Cyient", "package": "<5 LPA", "website": "https://www.cyient.com/careers"},
          {"company": "Happiest Minds", "package": "<5 LPA", "website": "https://www.happiestminds.com/careers/"},
          {"company": "L&T Technology Services", "package": "<5 LPA", "website": "https://www.ltts.com/careers"},
          {"company": "HCL Technologies", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
          {"company": "Continental Automotive", "package": "5-10 LPA", "website": "https://www.continental-jobs.com/"},
          {"company": "Siemens", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "Robert Bosch", "package": "5-10 LPA", "website": "https://careers.bosch.com/"},
          {"company": "Tata Communications", "package": "5-10 LPA", "website": "https://www.tatacommunications.com/careers/"},
          {"company": "Cisco", "package": "10-20 LPA", "website": "https://www.cisco.com/c/en/us/about/careers.html"},
          {"company": "Intel", "package": "10-20 LPA", "website": "https://jobs.intel.com"},
          {"company": "IBM", "package": "10-20 LPA", "website": "https://www.ibm.com/careers/in-en/"},
          {"company": "SAP", "package": "10-20 LPA", "website": "https://www.sap.com/india/about/careers.html"},
          {"company": "GE Digital", "package": "10-20 LPA", "website": "https://www.ge.com/digital/careers"},
          {"company": "Google (Nest)", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "Amazon (AWS IoT)", "package": "20+ LPA", "website": "https://www.amazon.jobs/en/teams/aws"},
          {"company": "Microsoft (Azure IoT)", "package": "20+ LPA", "website": "https://careers.microsoft.com/"},
          {"company": "Samsung (SmartThings)", "package": "20+ LPA", "website": "https://careers.smartthings.com/"},
          {"company": "Honeywell", "package": "20+ LPA", "website": "https://careers.honeywell.com/us/en"}
        ]
      }
    ],
    "EEE": [
      {
        "role": "Power Systems Engineer",
        "companies": [
          {"company": "NTPC", "package": "<5 LPA", "website": "https://www.ntpc.co.in/careers"},
          {"company": "Power Grid Corporation", "package": "<5 LPA", "website": "https://www.powergrid.in/careers"},
          {"company": "Tata Power", "package": "<5 LPA", "website": "https://www.tatapower.com/careers/"},
          {"company": "Adani Power", "package": "<5 LPA", "website": "https://www.adanipower.com/careers"},
          {"company": "JSW Energy", "package": "<5 LPA", "website": "https://www.jsw.in/energy/careers"},
          {"company": "Siemens", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "ABB", "package": "5-10 LPA", "website": "https://global.abb/group/en/careers"},
          {"company": "GE Power", "package": "5-10 LPA", "website": "https://jobs.gecareers.com/power"},
          {"company": "Schneider Electric", "package": "5-10 LPA", "website": "https://www.se.com/in/en/about-us/careers/overview.jsp"},
          {"company": "Larsen & Toubro", "package": "5-10 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Alstom", "package": "10-20 LPA", "website": "https://www.alstom.com/careers"},
          {"company": "Hitachi Energy", "package": "10-20 LPA", "website": "https://www.hitachienergy.com/careers"},
          {"company": "Mitsubishi Electric", "package": "10-20 LPA", "website": "https://www.mitsubishielectric.com/en/about/careers/index.html"},
          {"company": "Toshiba Energy", "package": "10-20 LPA", "website": "https://www.global.toshiba/ww/outline/career.html"},
          {"company": "Doosan Power Systems", "package": "10-20 LPA", "website": "https://www.doosanpowersystems.com/en/careers/"},
          {"company": "Tesla (Energy)", "package": "20+ LPA", "website": "https://www.tesla.com/careers"},
          {"company": "Ørsted", "package": "20+ LPA", "website": "https://orsted.com/en/careers"},
          {"company": "Vestas", "package": "20+ LPA", "website": "https://www.vestas.com/en/career"},
          {"company": "NextEra Energy", "package": "20+ LPA", "website": "https://jobs.nexteraenergy.com/"},
          {"company": "Siemens Gamesa", "package": "20+ LPA", "website": "https://www.siemensgamesa.com/en-int/explore/careers"}
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
          {"company": "Legrand", "package": "5-10 LPA", "website": "https://www.legrand.co.in/en/careers"},
          {"company": "Siemens", "package": "10-20 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "ABB", "package": "10-20 LPA", "website": "https://global.abb/group/en/careers"},
          {"company": "GE", "package": "10-20 LPA", "website": "https://jobs.gecareers.com/"},
          {"company": "Bosch", "package": "10-20 LPA", "website": "https://careers.bosch.com/"},
          {"company": "Philips", "package": "10-20 LPA", "website": "https://www.careers.philips.com/global/en"},
          {"company": "Apple", "package": "20+ LPA", "website": "https://www.apple.com/careers/in/"},
          {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "Intel", "package": "20+ LPA", "website": "https://jobs.intel.com"},
          {"company": "Qualcomm", "package": "20+ LPA", "website": "https://www.qualcomm.com/company/careers"},
          {"company": "Texas Instruments", "package": "20+ LPA", "website": "https://careers.ti.com/"}
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
          {"company": "Siemens PLM", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "L&T Technology Services", "package": "10-20 LPA", "website": "https://www.ltts.com/careers"},
          {"company": "Geometric", "package": "10-20 LPA", "website": "https://www.hcltech.com/careers"},
          {"company": "Honeywell", "package": "10-20 LPA", "website": "https://careers.honeywell.com/us/en"},
          {"company": "Boeing", "package": "10-20 LPA", "website": "https://jobs.boeing.com/"},
          {"company": "Airbus", "package": "10-20 LPA", "website": "https://www.airbus.com/en/careers"},
          {"company": "Mercedes-Benz R&D", "package": "20+ LPA", "website": "https://www.mercedes-benz.com/en/career/"},
          {"company": "Rolls-Royce", "package": "20+ LPA", "website": "https://careers.rolls-royce.com/india"},
          {"company": "GE Aviation", "package": "20+ LPA", "website": "https://jobs.gecareers.com/aviation"},
          {"company": "Tesla", "package": "20+ LPA", "website": "https://www.tesla.com/careers"},
          {"company": "Apple", "package": "20+ LPA", "website": "https://www.apple.com/careers/in/"}
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
          {"company": "Kia Motors", "package": "5-10 LPA", "website": "https://www.kia.com/in/our-story/careers.html"},
          {"company": "Mercedes-Benz", "package": "10-20 LPA", "website": "https://www.mercedes-benz.com/en/career/"},
          {"company": "BMW", "package": "10-20 LPA", "website": "https://www.bmwgroup.jobs/"},
          {"company": "Volkswagen", "package": "10-20 LPA", "website": "https://www.volkswagen-career.com/"},
          {"company": "Ford", "package": "10-20 LPA", "website": "https://corporate.ford.com/careers.html"},
          {"company": "General Motors", "package": "10-20 LPA", "website": "https://search-careers.gm.com/"},
          {"company": "Tesla", "package": "20+ LPA", "website": "https://www.tesla.com/careers"},
          {"company": "Rivian", "package": "20+ LPA", "website": "https://rivian.com/careers"},
          {"company": "Lucid Motors", "package": "20+ LPA", "website": "https://www.lucidmotors.com/careers"},
          {"company": "Ather Energy", "package": "20+ LPA", "website": "https://www.atherenergy.com/careers"},
          {"company": "Ola Electric", "package": "20+ LPA", "website": "https://olaelectric.com/careers"}
        ]
       },
       {
        "role": "Robotics Engineer",
        "companies": [
            {"company": "Addverb", "package": "<5 LPA", "website": "https://www.addverb.com/careers/"},
            {"company": "GreyOrange", "package": "<5 LPA", "website": "https://www.greyorange.com/careers/"},
            {"company": "Systemantics", "package": "<5 LPA", "website": "https://www.systemantics.com/careers/"},
            {"company": "Gridbots", "package": "<5 LPA", "website": "https://www.gridbots.com/careers"},
            {"company": "Asimov Robotics", "package": "<5 LPA", "website": "https://asimovrobotics.com/company/careers/"},
            {"company": "Tata Motors", "package": "5-10 LPA", "website": "https://careers.tatamotors.com"},
            {"company": "KUKA Robotics", "package": "5-10 LPA", "website": "https://www.kuka.com/en-in/career/jobs"},
            {"company": "ABB Robotics", "package": "5-10 LPA", "website": "https://global.abb/group/en/careers/opportunities/robotics-and-discrete-automation"},
            {"company": "Fanuc India", "package": "5-10 LPA", "website": "https://www.fanucindia.com/careers"},
            {"company": "Yaskawa India", "package": "5-10 LPA", "website": "https://www.yaskawaindia.in/career"},
            {"company": "Siemens", "package": "10-20 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
            {"company": "Honeywell", "package": "10-20 LPA", "website": "https://careers.honeywell.com/us/en"},
            {"company": "Bosch", "package": "10-20 LPA", "website": "https://careers.bosch.com/"},
            {"company": "Samsung", "package": "10-20 LPA", "website": "https://research.samsung.com/careers"},
            {"company": "L&T Technology Services", "package": "10-20 LPA", "website": "https://www.ltts.com/careers"},
            {"company": "Boston Dynamics", "package": "20+ LPA", "website": "https://www.bostondynamics.com/careers"},
            {"company": "Tesla", "package": "20+ LPA", "website": "https://www.tesla.com/careers"},
            {"company": "Amazon Robotics", "package": "20+ LPA", "website": "https://www.amazon.jobs/en/teams/robotics"},
            {"company": "Google (X)", "package": "20+ LPA", "website": "https://x.company/careers/"},
            {"company": "NVIDIA", "package": "20+ LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"}
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
          {"company": "Jacobs", "package": "5-10 LPA", "website": "https://www.jacobs.com/careers"},
          {"company": "Aecom", "package": "5-10 LPA", "website": "https://aecom.com/careers/"},
          {"company": "Arup", "package": "5-10 LPA", "website": "https://www.arup.com/careers"},
          {"company": "Ramboll", "package": "5-10 LPA", "website": "https://ramboll.com/careers"},
          {"company": "WSP", "package": "10-20 LPA", "website": "https://www.wsp.com/en-in/careers"},
          {"company": "Mott MacDonald", "package": "10-20 LPA", "website": "https://www.mottmac.com/careers"},
          {"company": "Meinhardt", "package": "10-20 LPA", "website": "https://meinhardtgroup.com/careers/"},
          {"company": "Schlumberger", "package": "10-20 LPA", "website": "https://careers.slb.com/"},
          {"company": "Bechtel", "package": "10-20 LPA", "website": "https://jobs.bechtel.com/"},
          {"company": "Skidmore, Owings & Merrill (SOM)", "package": "20+ LPA", "website": "https://www.som.com/about/careers/"},
          {"company": "Kohn Pedersen Fox (KPF)", "package": "20+ LPA", "website": "https://www.kpf.com/careers"},
          {"company": "Zaha Hadid Architects", "package": "20+ LPA", "website": "https://www.zaha-hadid.com/jobs/"},
          {"company": "Gensler", "package": "20+ LPA", "website": "https://www.gensler.com/careers"},
          {"company": "HOK", "package": "20+ LPA", "website": "https://www.hok.com/careers/"}
        ]
      },
      {
        "role": "Site Supervisor",
        "companies": [
            {"company": "Larsen & Toubro (L&T)", "package": "<5 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
            {"company": "DLF", "package": "<5 LPA", "website": "https://www.dlf.in/careers/"},
            {"company": "Sobha Ltd", "package": "<5 LPA", "website": "https://www.sobha.com/careers/"},
            {"company": "Prestige Group", "package": "<5 LPA", "website": "https://www.prestigeconstructions.com/careers/"},
            {"company": "Godrej Properties", "package": "<5 LPA", "website": "https://www.godrejproperties.com/careers"},
            {"company": "Tata Projects", "package": "5-10 LPA", "website": "https://www.tataprojects.com/our-dna/careers/"},
            {"company": "Shapoorji Pallonji", "package": "5-10 LPA", "website": "https://www.shapoorjipallonji.com/careers"},
            {"company": "JMC Projects", "package": "5-10 LPA", "website": "https://www.jmcprojects.com/careers/current-openings/"},
            {"company": "Ahluwalia Contracts", "package": "5-10 LPA", "website": "http://www.acilnet.com/careers.html"},
            {"company": "Hindustan Construction Company", "package": "5-10 LPA", "website": "https://www.hccindia.com/careers"},
            {"company": "CBRE", "package": "10-20 LPA", "website": "https://www.cbre.co.in/careers"},
            {"company": "JLL", "package": "10-20 LPA", "website": "https://www.us.jll.com/en/careers"},
            {"company": "Turner Construction", "package": "10-20 LPA", "website": "https://www.turnerconstruction.com/careers"},
            {"company": "KEC International", "package": "10-20 LPA", "website": "https://www.kecrpg.com/careers"},
            {"company": "IRB Infra", "package": "10-20 LPA", "website": "https://www.irb.co.in/careers/"},
            {"company": "Adani Group (Infra)", "package": "20+ LPA", "website": "https://www.adani.com/careers"},
            {"company": "Reliance Infrastructure", "package": "20+ LPA", "website": "https://www.rinfra.com/careers"},
            {"company": "AECOM", "package": "20+ LPA", "website": "https://aecom.com/careers/"},
            {"company": "Bechtel", "package": "20+ LPA", "website": "https://jobs.bechtel.com/"},
            {"company": "Fluor Corporation", "package": "20+ LPA", "website": "https://www.fluor.com/careers"}
        ]
      }
    ]
  },
  "MBA": {
    "Finance": [
      {
        "role": "Financial Analyst",
        "companies": [
          {"company": "Genpact", "package": "<5 LPA", "website": "https://www.genpact.com/careers"},
          {"company": "WNS Global", "package": "<5 LPA", "website": "https://www.wns.com/careers"},
          {"company": "EXL Service", "package": "<5 LPA", "website": "https://www.exlservice.com/careers"},
          {"company": "TCS BPS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
          {"company": "Infosys BPM", "package": "<5 LPA", "website": "https://www.infosysbpm.com/careers.html"},
          {"company": "HDFC Bank", "package": "5-10 LPA", "website": "https://www.hdfcbank.com/careers"},
          {"company": "ICICI Bank", "package": "5-10 LPA", "website": "https://www.icicicareers.com/"},
          {"company": "EY", "package": "5-10 LPA", "website": "https://www.ey.com/en_in/careers"},
          {"company": "CRISIL", "package": "5-10 LPA", "website": "https://www.crisil.com/en/home/careers.html"},
          {"company": "Axis Bank", "package": "5-10 LPA", "website": "https://www.axisbank.com/careers"},
          {"company": "KPMG", "package": "10-20 LPA", "website": "https://kpmg.com/in/en/home/careers.html"},
          {"company": "Deloitte", "package": "10-20 LPA", "website": "https://careers.deloitte.com"},
          {"company": "Goldman Sachs", "package": "10-20 LPA", "website": "https://www.goldmansachs.com/careers/"},
          {"company": "American Express", "package": "10-20 LPA", "website": "https://www.americanexpress.com/en-us/careers/"},
          {"company": "Mastercard", "package": "10-20 LPA", "website": "https://www.mastercard.us/en-us/vision/who-we-are/careers.html"},
          {"company": "J.P. Morgan Chase", "package": "20+ LPA", "website": "https://careers.jpmorgan.com/global/en/home"},
          {"company": "Morgan Stanley", "package": "20+ LPA", "website": "https://www.morganstanley.com/careers"},
          {"company": "BlackRock", "package": "20+ LPA", "website": "https://careers.blackrock.com/"},
          {"company": "The Blackstone Group", "package": "20+ LPA", "website": "https://www.blackstone.com/careers/"},
          {"company": "KKR", "package": "20+ LPA", "website": "https://www.kkr.com/careers"}
        ]
      },
      {
        "role": "Investment Banker",
        "companies": [
            {"company": "Boutique IB Firm (Entry)", "package": "<5 LPA", "website": "https://www.google.com/search?q=boutique+investment+banking+firms+india+careers"},
            {"company": "Kotak Mahindra Capital", "package": "<5 LPA", "website": "https://www.kotak.com/en/careers.html"},
            {"company": "Axis Capital", "package": "<5 LPA", "website": "https://www.axiscapital.co.in/"},
            {"company": "JM Financial", "package": "<5 LPA", "website": "https://www.jmfl.com/careers"},
            {"company": "Avendus Capital", "package": "<5 LPA", "website": "https://www.avendus.com/india/careers"},
            {"company": "ICICI Securities", "package": "5-10 LPA", "website": "https://www.icicisecurities.com/careers"},
            {"company": "SBI Capital Markets", "package": "5-10 LPA", "website": "https://www.sbicaps.com/careers"},
            {"company": "IDFC Securities", "package": "5-10 LPA", "website": "https://www.idfccapital.com/careers"},
            {"company": "IIFL Securities", "package": "5-10 LPA", "website": "https://www.iiflsecurities.com/careers"},
            {"company": "Motilal Oswal", "package": "5-10 LPA", "website": "https://www.motilaloswal.com/careers"},
            {"company": "Goldman Sachs", "package": "10-20 LPA", "website": "https://www.goldmansachs.com/careers/"},
            {"company": "Barclays", "package": "10-20 LPA", "website": "https://home.barclays/careers/"},
            {"company": "Deutsche Bank", "package": "10-20 LPA", "website": "https://careers.db.com/"},
            {"company": "Credit Suisse", "package": "10-20 LPA", "website": "https://www.credit-suisse.com/careers/en.html"},
            {"company": "HSBC", "package": "10-20 LPA", "website": "https://www.hsbc.com/careers"},
            {"company": "JP Morgan", "package": "20+ LPA", "website": "https://careers.jpmorgan.com/global/en/home"},
            {"company": "Morgan Stanley", "package": "20+ LPA", "website": "https://www.morganstanley.com/careers"},
            {"company": "Bank of America", "package": "20+ LPA", "website": "https://careers.bankofamerica.com/"},
            {"company": "Citigroup", "package": "20+ LPA", "website": "https://careers.citi.com/"},
            {"company": "Nomura", "package": "20+ LPA", "website": "https://www.nomura.com/careers/"}
        ]
      }
    ],
    "Marketing": [
      {
        "role": "Digital Marketing Manager",
        "companies": [
          {"company": "Startups & Agencies", "package": "<5 LPA", "website": "https://www.google.com/search?q=digital+marketing+agencies+india+careers"},
          {"company": "Social Beat", "package": "<5 LPA", "website": "https://www.socialbeat.in/careers/"},
          {"company": "Webchutney", "package": "<5 LPA", "website": "https://webchutney.com/careers"},
          {"company": "iProspect", "package": "<5 LPA", "website": "https://www.iprospect.com/en/in/careers/"},
          {"company": "Schbang", "package": "<5 LPA", "website": "https://schbang.com/careers"},
          {"company": "Hindustan Unilever", "package": "5-10 LPA", "website": "https://www.hul.co.in/careers/"},
          {"company": "L'Oréal", "package": "5-10 LPA", "website": "https://careers.loreal.com/"},
          {"company": "Marico", "package": "5-10 LPA", "website": "https://marico.com/india/careers"},
          {"company": "Reckitt", "package": "5-10 LPA", "website": "https://www.reckitt.com/careers/"},
          {"company": "ITC", "package": "5-10 LPA", "website": "https://www.itcportal.com/careers/"},
          {"company": "P&G", "package": "10-20 LPA", "website": "https://www.pgcareers.com/"},
          {"company": "Flipkart", "package": "10-20 LPA", "website": "https://www.flipkartcareers.com/"},
          {"company": "Myntra", "package": "10-20 LPA", "website": "https://careers.myntra.com/"},
          {"company": "Amazon", "package": "10-20 LPA", "website": "https://amazon.jobs"},
          {"company": "Google India", "package": "10-20 LPA", "website": "https://careers.google.com/"},
          {"company": "Meta (Facebook)", "package": "20+ LPA", "website": "https://www.metacareers.com/"},
          {"company": "LinkedIn", "package": "20+ LPA", "website": "https://www.linkedin.com/company/linkedin/jobs/"},
          {"company": "Adobe", "package": "20+ LPA", "website": "https://www.adobe.com/careers.html"},
          {"company": "HubSpot", "package": "20+ LPA", "website": "https://www.hubspot.com/careers"},
          {"company": "Salesforce", "package": "20+ LPA", "website": "https://www.salesforce.com/company/careers/"}
        ]
      },
      {
        "role": "Brand Manager",
        "companies": [
          {"company": "Local FMCG/Retail", "package": "<5 LPA", "website": "https://www.google.com/search?q=fmcg+companies+in+india+careers"},
          {"company": "Dabur", "package": "<5 LPA", "website": "https://www.dabur.com/in/en-us/careers"},
          {"company": "Patanjali", "package": "<5 LPA", "website": "https://www.patanjaliayurved.net/career"},
          {"company": "Britannia", "package": "<5 LPA", "website": "https://britannia.co.in/careers"},
          {"company": "Parle Agro", "package": "<5 LPA", "website": "https://www.parleagro.com/corp/careers"},
          {"company": "Swiggy", "package": "5-10 LPA", "website": "https://careers.swiggy.com/"},
          {"company": "Zomato", "package": "5-10 LPA", "website": "https://www.zomato.com/careers"},
          {"company": "Oyo Rooms", "package": "5-10 LPA", "website": "https://www.oyorooms.com/careers/"},
          {"company": "Cure.fit", "package": "5-10 LPA", "website": "https://www.cult.fit/careers"},
          {"company": "BYJU'S", "package": "5-10 LPA", "website": "https://byjus.com/careers-at-byjus/"},
          {"company": "Amazon", "package": "10-20 LPA", "website": "https://amazon.jobs"},
          {"company": "Nestle", "package": "10-20 LPA", "website": "https://www.nestle.in/jobs"},
          {"company": "Pepsico", "package": "10-20 LPA", "website": "https://www.pepsicojobs.com/main/"},
          {"company": "Coca-Cola", "package": "10-20 LPA", "website": "https://www.coca-colacompany.com/careers"},
          {"company": "Mondelez", "package": "10-20 LPA", "website": "https://www.mondelezinternational.com/careers"},
          {"company": "P&G", "package": "20+ LPA", "website": "https://www.pgcareers.com/"},
          {"company": "Unilever", "package": "20+ LPA", "website": "https://www.unilever.com/careers/"},
          {"company": "Colgate-Palmolive", "package": "20+ LPA", "website": "https://jobs.colgate.com/"},
          {"company": "Johnson & Johnson", "package": "20+ LPA", "website": "https://www.careers.jnj.com/"},
          {"company": "Reckitt", "package": "20+ LPA", "website": "https://www.reckitt.com/careers/"}
        ]
      }
    ],
     "HR": [
       {
         "role": "HR Manager",
         "companies": [
           {"company": "Local Staffing Firms", "package": "<5 LPA", "website": "https://www.google.com/search?q=local+staffing+firms+in+india+careers"},
           {"company": "Randstad", "package": "<5 LPA", "website": "https://www.randstad.in/careers/"},
           {"company": "TeamLease", "package": "<5 LPA", "website": "https://www.teamlease.com/careers"},
           {"company": "Adecco", "package": "<5 LPA", "website": "https://www.adecco.co.in/careers"},
           {"company": "ManpowerGroup", "package": "<5 LPA", "website": "https://www.manpowergroup.co.in/contact-us/career-opportunities"},
           {"company": "Infosys", "package": "5-10 LPA", "website": "https://www.infosys.com/careers.html"},
           {"company": "Wipro", "package": "5-10 LPA", "website": "https://careers.wipro.com/"},
           {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
           {"company": "Reliance Jio", "package": "5-10 LPA", "website": "https://careers.jio.com"},
           {"company": "Mahindra Group", "package": "5-10 LPA", "website": "https://www.mahindra.com/careers"},
           {"company": "Google", "package": "10-20 LPA", "website": "https://careers.google.com/"},
           {"company": "Amazon", "package": "10-20 LPA", "website": "https://amazon.jobs"},
           {"company": "Microsoft", "package": "10-20 LPA", "website": "https://careers.microsoft.com"},
           {"company": "Accenture", "package": "10-20 LPA", "website": "https://www.accenture.com/in-en/careers"},
           {"company": "KPMG", "package": "10-20 LPA", "website": "https://kpmg.com/in/en/home/careers.html"},
           {"company": "Mercer", "package": "20+ LPA", "website": "https://www.mercer.com/en-in/about/careers/"},
           {"company": "Aon Hewitt", "package": "20+ LPA", "website": "https://www.aon.com/home/careers.jsp"},
           {"company": "Korn Ferry", "package": "20+ LPA", "website": "https://www.kornferry.com/careers"},
           {"company": "McKinsey & Company", "package": "20+ LPA", "website": "https://www.mckinsey.com/careers/home"},
           {"company": "Bain & Company", "package": "20+ LPA", "website": "https://www.bain.com/careers/"}
         ]
       }
     ],
     "Analytics": [
        {
            "role": "Data Analytics Manager",
            "companies": [
                {"company": "Mu Sigma", "package": "<5 LPA", "website": "https://www.mu-sigma.com/careers/"},
                {"company": "Fractal Analytics", "package": "<5 LPA", "website": "https://fractal.ai/careers/"},
                {"company": "LatentView Analytics", "package": "<5 LPA", "website": "https://www.latentview.com/careers"},
                {"company": "Tredence", "package": "<5 LPA", "website": "https://www.tredence.com/careers"},
                {"company": "Absolutdata", "package": "<5 LPA", "website": "https://www.absolutdata.com/careers/"},
                {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
                {"company": "PwC (PricewaterhouseCoopers)", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
                {"company": "Kantar", "package": "5-10 LPA", "website": "https://www.kantar.com/careers"},
                {"company": "NielsenIQ", "package": "5-10 LPA", "website": "https://nielseniq.com/global/en/careers/"},
                {"company": "Genpact", "package": "5-10 LPA", "website": "https://www.genpact.com/careers"},
                {"company": "Cognizant", "package": "10-20 LPA", "website": "https://careers.cognizant.com"},
                {"company": "American Express", "package": "10-20 LPA", "website": "https://www.americanexpress.com/en-us/careers/"},
                {"company": "Barclays", "package": "10-20 LPA", "website": "https://home.barclays/careers/"},
                {"company": "HSBC", "package": "10-20 LPA", "website": "https://www.hsbc.com/careers"},
                {"company": "Citibank", "package": "10-20 LPA", "website": "https://careers.citi.com/"},
                {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
                {"company": "Amazon", "package": "20+ LPA", "website": "https://amazon.jobs"},
                {"company": "Walmart Labs", "package": "20+ LPA", "website": "https://walmartglobaltech.com/careers"},
                {"company": "Target", "package": "20+ LPA", "website": "https://corporate.target.com/careers"},
                {"company": "Netflix", "package": "20+ LPA", "website": "https://jobs.netflix.com/"}
            ]
        },
        {
            "role": "Business Analyst",
            "companies": [
                {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Infosys", "package": "<5 LPA", "website": "https://www.infosys.com/careers.html"},
                {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com"},
                {"company": "Capgemini", "package": "<5 LPA", "website": "https://www.capgemini.com/careers"},
                {"company": "Tech Mahindra", "package": "<5 LPA", "website": "https://careers.techmahindra.com"},
                {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com"},
                {"company": "PwC (PricewaterhouseCoopers)", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
                {"company": "Epsilon", "package": "5-10 LPA", "website": "https://www.epsilon.com/us/about-us/careers"},
                {"company": "EXL Service", "package": "5-10 LPA", "website": "https://www.exlservice.com/careers"},
                {"company": "WNS Global", "package": "5-10 LPA", "website": "https://www.wns.com/careers"},
                {"company": "Accenture Strategy", "package": "10-20 LPA", "website": "https://www.accenture.com/in-en/careers/jobsearch?jk=&sb=1&vw=0&is_rj=0&pg=1&display=25"},
                {"company": "IBM Consulting", "package": "10-20 LPA", "website": "https://www.ibm.com/careers/in-en/consulting/"},
                {"company": "Capgemini Invent", "package": "10-20 LPA", "website": "https://www.capgemini.com/careers/career-paths/consulting/"},
                {"company": "EY-Parthenon", "package": "10-20 LPA", "website": "https://www.ey.com/en_in/careers/ey-parthenon"},
                {"company": "KPMG Advisory", "package": "10-20 LPA", "website": "https://kpmg.com/in/en/home/careers.html"},
                {"company": "Bain & Company", "package": "20+ LPA", "website": "https://www.bain.com/careers/"},
                {"company": "McKinsey & Company", "package": "20+ LPA", "website": "https://www.mckinsey.com/careers/home"},
                {"company": "Boston Consulting Group (BCG)", "package": "20+ LPA", "website": "https://careers.bcg.com/"},
                {"company": "A.T. Kearney", "package": "20+ LPA", "website": "https://www.kearney.com/careers"},
                {"company": "Oliver Wyman", "package": "20+ LPA", "website": "https://www.oliverwyman.com/careers.html"}
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
          {"company": "Target", "package": "10-20 LPA", "website": "https://corporate.target.com/careers"},
          {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
          {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
          {"company": "Amazon", "package": "20+ LPA", "website": "https://amazon.jobs"},
          {"company": "Adobe", "package": "20+ LPA", "website": "https://www.adobe.com/careers.html"},
          {"company": "Salesforce", "package": "20+ LPA", "website": "https://www.salesforce.com/company/careers/"}
        ]
      }
    ],
     "Data Science": [
        {
            "role": "Data Analyst",
            "companies": [
                {"company": "Genpact", "package": "<5 LPA", "website": "https://www.genpact.com/careers"},
                {"company": "WNS Global", "package": "<5 LPA", "website": "https://www.wns.com/careers"},
                {"company": "EXL Service", "package": "<5 LPA", "website": "https://www.exlservice.com/careers"},
                {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Capgemini", "package": "<5 LPA", "website": "https://www.capgemini.com/careers/"},
                {"company": "Infosys", "package": "5-10 LPA", "website": "https://careers.infosys.com"},
                {"company": "HCL Technologies", "package": "5-10 LPA", "website": "https://www.hcltech.com/careers"},
                {"company": "Cognizant", "package": "5-10 LPA", "website": "https://careers.cognizant.com"},
                {"company": "LTIMindtree", "package": "5-10 LPA", "website": "https://www.ltimindtree.com/careers/"},
                {"company": "Accenture", "package": "5-10 LPA", "website": "https://www.accenture.com/in-en/careers"},
                {"company": "Deloitte", "package": "10-20 LPA", "website": "https://careers.deloitte.com"},
                {"company": "American Express", "package": "10-20 LPA", "website": "https://www.americanexpress.com/en-us/careers/"},
                {"company": "HSBC", "package": "10-20 LPA", "website": "https://www.hsbc.com/careers"},
                {"company": "Flipkart", "package": "10-20 LPA", "website": "https://www.flipkartcareers.com/"},
                {"company": "Walmart Labs", "package": "10-20 LPA", "website": "https://walmartglobaltech.com/careers"},
                {"company": "Google", "package": "20+ LPA", "website": "https://careers.google.com/"},
                {"company": "Amazon", "package": "20+ LPA", "website": "https://amazon.jobs"},
                {"company": "Microsoft", "package": "20+ LPA", "website": "https://careers.microsoft.com"},
                {"company": "Meta (Facebook)", "package": "20+ LPA", "website": "https://www.metacareers.com/"},
                {"company": "Uber", "package": "20+ LPA", "website": "https://www.uber.com/in/en/careers/"}
            ]
        }
    ],
    "Cybersecurity": [
        {
            "role": "Cybersecurity Analyst",
            "companies": [
                {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com"},
                {"company": "HCL Tech", "package": "<5 LPA", "website": "https://www.hcltech.com/careers"},
                {"company": "Tech Mahindra", "package": "<5 LPA", "website": "https://careers.techmahindra.com"},
                {"company": "Infosys", "package": "<5 LPA", "website": "https://www.infosys.com/careers.html"},
                {"company": "PwC", "package": "5-10 LPA", "website": "https://www.pwc.in/careers.html"},
                {"company": "EY", "package": "5-10 LPA", "website": "https://www.ey.com/en_in/careers"},
                {"company": "Deloitte", "package": "5-10 LPA", "website": "https://careers.deloitte.com/"},
                {"company": "Capgemini", "package": "5-10 LPA", "website": "https://www.capgemini.com/careers/"},
                {"company": "Accenture", "package": "5-10 LPA", "website": "https://www.accenture.com/in-en/careers"},
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
                {"company": "LTIMindtree", "package": "<5 LPA", "website": "https://www.ltimindtree.com/careers/"},
                {"company": "Accenture", "package": "5-10 LPA", "website": "https://www.accenture.com/in-en/careers"},
                {"company": "Capgemini", "package": "5-10 LPA", "website": "https://www.capgemini.com/careers/"},
                {"company": "Cognizant", "package": "5-10 LPA", "website": "https://careers.cognizant.com"},
                {"company": "Zoho", "package": "5-10 LPA", "website": "https://www.zoho.com/careers/"},
                {"company": "ThoughtWorks", "package": "5-10 LPA", "website": "https://www.thoughtworks.com/careers"},
                {"company": "Startups (Mid-level)", "package": "10-20 LPA", "website": "https://www.naukri.com/mid-level-web-developer-jobs"},
                {"company": "Product Companies (Mid)", "package": "10-20 LPA", "website": "https://www.linkedin.com/jobs/web-developer-jobs/"},
                {"company": "Razorpay", "package": "10-20 LPA", "website": "https://razorpay.com/careers/"},
                {"company": "Paytm", "package": "10-20 LPA", "website": "https://paytm.com/careers/"},
                {"company": "Freshworks", "package": "10-20 LPA", "website": "https://www.freshworks.com/company/careers/"},
                {"company": "Senior Roles at Startups", "package": "20+ LPA", "website": "https://angel.co/jobs"},
                {"company": "Lead Roles at Product Firms", "package": "20+ LPA", "website": "https://iimjobs.com/c/IT-Software-42"},
                {"company": "Go-Jek", "package": "20+ LPA", "website": "https://www.gojek.io/careers"},
                {"company": "PhonePe", "package": "20+ LPA", "website": "https://www.phonepe.com/careers/"},
                {"company": "CRED", "package": "20+ LPA", "website": "https://cred.club/careers"}
            ]
        },
        {
            "role": "IT Support Specialist",
            "companies": [
                {"company": "TCS", "package": "<5 LPA", "website": "https://careers.tcs.com"},
                {"company": "Reliance Jio", "package": "<5 LPA", "website": "https://careers.jio.com"},
                {"company": "HCL Technologies", "package": "<5 LPA", "website": "https://www.hcltech.com/careers"},
                {"company": "Wipro", "package": "<5 LPA", "website": "https://careers.wipro.com"},
                {"company": "Accenture", "package": "<5 LPA", "website": "https://www.accenture.com/in-en/careers"},
                {"company": "Dell", "package": "5-10 LPA", "website": "https://jobs.dell.com/"},
                {"company": "HP", "package": "5-10 LPA", "website": "https://jobs.hp.com/"},
                {"company": "IBM", "package": "5-10 LPA", "website": "https://www.ibm.com/careers/in-en/"},
                {"company": "Cisco", "package": "5-10 LPA", "website": "https://www.cisco.com/c/en/us/about/careers.html"},
                {"company": "Lenovo", "package": "5-10 LPA", "website": "https://careers.lenovo.com/"},
                {"company": "Microsoft", "package": "10-20 LPA", "website": "https://careers.microsoft.com"},
                {"company": "Google", "package": "10-20 LPA", "website": "https://careers.google.com/"},
                {"company": "Oracle", "package": "10-20 LPA", "website": "https://www.oracle.com/careers/"},
                {"company": "SAP", "package": "10-20 LPA", "website": "https://www.sap.com/india/about/careers.html"},
                {"company": "Intel", "package": "10-20 LPA", "website": "https://jobs.intel.com"},
                {"company": "Amazon", "package": "20+ LPA", "website": "https://amazon.jobs"},
                {"company": "Salesforce", "package": "20+ LPA", "website": "https://www.salesforce.com/company/careers/"},
                {"company": "ServiceNow", "package": "20+ LPA", "website": "https://www.servicenow.com/careers.html"},
                {"company": "VMware", "package": "20+ LPA", "website": "https://careers.vmware.com/"},
                {"company": "Atlassian", "package": "20+ LPA", "website": "https://www.atlassian.com/company/careers"}
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
                {"company": "Voltas", "package": "<5 LPA", "website": "https://www.voltas.com/careers"},
                {"company": "Siemens", "package": "5-10 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
                {"company": "Honeywell", "package": "5-10 LPA", "website": "https://careers.honeywell.com/us/en"},
                {"company": "Schneider Electric", "package": "5-10 LPA", "website": "https://www.se.com/in/en/about-us/careers/overview.jsp"},
                {"company": "L&T", "package": "5-10 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
                {"company": "Emerson", "package": "5-10 LPA", "website": "https://www.emerson.com/en-in/careers"},
                {"company": "Intel", "package": "10-20 LPA", "website": "https://jobs.intel.com"},
                {"company": "Texas Instruments", "package": "10-20 LPA", "website": "https://careers.ti.com/"},
                {"company": "Qualcomm", "package": "10-20 LPA", "website": "https://www.qualcomm.com/company/careers"},
                {"company": "NXP Semiconductors", "package": "10-20 LPA", "website": "https://www.nxp.com/company/about-nxp/careers:CAREERS"},
                {"company": "Analog Devices", "package": "10-20 LPA", "website": "https://www.analog.com/en/about-adi/careers.html"},
                {"company": "NVIDIA", "package": "20+ LPA", "website": "https://www.nvidia.com/en-us/about-nvidia/careers/"},
                {"company": "Apple", "package": "20+ LPA", "website": "https://www.apple.com/careers/in/"},
                {"company": "Samsung R&D", "package": "20+ LPA", "website": "https://research.samsung.com/careers"},
                {"company": "Micron Technology", "package": "20+ LPA", "website": "https://www.micron.com/careers"},
                {"company": "ARM", "package": "20+ LPA", "website": "https://careers.arm.com/"}
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
          {"company": "Mahindra & Mahindra", "package": "<5 LPA", "website": "https://careers.mahindra.com"},
          {"company": "L&T", "package": "5-10 LPA", "website": "https://www.larsentoubro.com/corporate/careers/"},
          {"company": "Hero MotoCorp", "package": "5-10 LPA", "website": "https://www.heromotocorp.com/en-in/careers/"},
          {"company": "Bajaj Auto", "package": "5-10 LPA", "website": "https://www.bajajauto.com/careers"},
          {"company": "Maruti Suzuki", "package": "5-10 LPA", "website": "https://www.marutisuzuki.com/corporate/careers"},
          {"company": "Bosch", "package": "5-10 LPA", "website": "https://careers.bosch.com"},
          {"company": "Dassault Systèmes", "package": "10-20 LPA", "website": "https://www.3ds.com/careers"},
          {"company": "Autodesk", "package": "10-20 LPA", "website": "https://www.autodesk.com/careers"},
          {"company": "Siemens PLM", "package": "10-20 LPA", "website": "https://www.siemens.com/global/en/company/jobs.html"},
          {"company": "ANSYS", "package": "10-20 LPA", "website": "https://www.ansys.com/en-in/careers"},
          {"company": "Honeywell", "package": "10-20 LPA", "website": "https://careers.honeywell.com/us/en"},
          {"company": "Mercedes-Benz R&D", "package": "20+ LPA", "website": "https://www.mercedes-benz.com/en/career/"},
          {"company": "Boeing", "package": "20+ LPA", "website": "https://jobs.boeing.com/"},
          {"company": "Airbus", "package": "20+ LPA", "website": "https://www.airbus.com/en/careers"},
          {"company": "GE Aviation", "package": "20+ LPA", "website": "https://jobs.gecareers.com/aviation"},
          {"company": "Tesla", "package": "20+ LPA", "website": "https://www.tesla.com/careers"}
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
                {"company": "DLF", "package": "<5 LPA", "website": "https://www.dlf.in/careers/"},
                {"company": "Shapoorji Pallonji", "package": "5-10 LPA", "website": "https://www.shapoorjipallonji.com/careers"},
                {"company": "Tata Projects", "package": "5-10 LPA", "website": "https://www.tataprojects.com/our-dna/careers/"},
                {"company": "Afcons Infrastructure", "package": "5-10 LPA", "website": "https://www.afcons.com/careers"},
                {"company": "GMR Infra", "package": "5-10 LPA", "website": "https://www.gmrgroup.in/careers"},
                {"company": "JMC Projects", "package": "5-10 LPA", "website": "https://www.jmcprojects.com/careers/current-openings/"},
                {"company": "CBRE", "package": "10-20 LPA", "website": "https://www.cbre.co.in/careers"},
                {"company": "JLL", "package": "10-20 LPA", "website": "https://www.us.jll.com/en/careers"},
                {"company": "Knight Frank", "package": "10-20 LPA", "website": "https://www.knightfrank.co.in/careers"},
                {"company": "Colliers International", "package": "10-20 LPA", "website": "https://www.colliers.com/en-in/careers"},
                {"company": "Cushman & Wakefield", "package": "10-20 LPA", "website": "https://www.cushmanwakefield.com/en/india/careers"},
                {"company": "Bechtel", "package": "20+ LPA", "website": "https://jobs.bechtel.com/"},
                {"company": "Fluor Corporation", "package": "20+ LPA", "website": "https://www.fluor.com/careers"},
                {"company": "Reliance Infrastructure", "package": "20+ LPA", "website": "https://www.rinfra.com/careers"},
                {"company": "Adani Group (Infra)", "package": "20+ LPA", "website": "https://www.adani.com/careers"},
                {"company": "AECOM", "package": "20+ LPA", "website": "https://aecom.com/careers/"}
            ]
        }
     ]
  }
}
