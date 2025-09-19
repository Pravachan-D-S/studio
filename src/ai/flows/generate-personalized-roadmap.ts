'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized career roadmap for students.
 *
 * The flow takes student inputs such as stream, branch, career goals, current skills, etc., and generates
 * a personalized career roadmap with learning steps, timelines, and resources.
 *
 * @exports generatePersonalizedRoadmap - The main function to trigger the roadmap generation flow.
 * @exports GeneratePersonalizedRoadmapInput - The input type for the generatePersonalizedRoadmap function.
 * @exports GeneratePersonalizedRoadmapOutput - The output type for the generatePersonalizedRoadmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedRoadmapInputSchema = z.object({
  stream: z.string().describe('The student’s stream of study (e.g., Engineering, MBA, MCA).'),
  specialization: z.string().describe('The student’s branch or specialization (e.g., CSE, Finance, Software Development).'),
  yearOfStudy: z.string().describe('The student\'s current year of study (e.g., 1st, 2nd, final year).'),
  aimingCareer: z.string().describe('The student’s desired career path (e.g., Data Scientist, Web Developer, Product Manager).'),
  salaryRange: z.string().describe('The student\'s target salary range (e.g., <5 LPA, 5-10 LPA, 20+ LPA).'),
});

export type GeneratePersonalizedRoadmapInput = z.infer<typeof GeneratePersonalizedRoadmapInputSchema>;

const GeneratePersonalizedRoadmapOutputSchema = z.object({
  motivationalNudge: z.string().describe('A short, encouraging message for the student.'),
  skillRoadmap: z.string().describe('A list of technical skills to learn, presented as a newline-separated list.'),
  toolsToMaster: z.string().describe('A list of programming languages, frameworks, IDEs, and libraries to master, presented as a newline-separated list.'),
  timeline: z.string().describe('A realistic plan based on the student’s program duration and career goal, estimating how many years it might take to reach the goal. It should be tailored to the student\'s current year of study.'),
  projects: z.string().describe('A list of 3-4 projects with increasing difficulty, suitable for a GitHub portfolio. Each project should be a single line. The projects should be appropriate for the student\'s current year of study.'),
  resources: z.string().describe('Suggested free/paid courses, tutorials, books, and communities.'),
  careerGrowth: z.string().describe('An overview of career growth opportunities for the chosen path, including potential roles and advancements.'),
  resumeInterviewPrep: z.string().describe('A resume outline and common technical/HR interview questions, presented as a newline-separated list.'),
  jobMarketInsights: z.string().describe('Job market insights, including demand, average salary ranges, and key certifications for the target role and location.'),
});

export type GeneratePersonalizedRoadmapOutput = z.infer<typeof GeneratePersonalizedRoadmapOutputSchema>;

export async function generatePersonalizedRoadmap(input: GeneratePersonalizedRoadmapInput): Promise<GeneratePersonalizedRoadmapOutput> {
  return generatePersonalizedRoadmapFlow(input);
}

const generatePersonalizedRoadmapPrompt = ai.definePrompt({
  name: 'generatePersonalizedRoadmapPrompt',
  input: {schema: GeneratePersonalizedRoadmapInputSchema},
  output: {schema: GeneratePersonalizedRoadmapOutputSchema},
  prompt: `You are an expert AI Career Advisor named Vidyatej. Your mission is to create a highly personalized, actionable, and inspirational career roadmap for students.

  Generate a comprehensive roadmap based on the following student information. Be encouraging and use a tone that resonates with students.

  Student Information:
  Stream: {{{stream}}}
  Specialization: {{{specialization}}}
  Current Year of Study: {{{yearOfStudy}}}
  Aiming Career: {{{aimingCareer}}}
  Target Salary: {{{salaryRange}}}

  **IMPORTANT INSTRUCTIONS:**
  - Start with a powerful, inspirational nudge. Address the student directly and make them feel like they are on an epic journey. Use strong, encouraging language that evokes a sense of purpose and potential.
  - Tailor the timeline and project suggestions based on the student's **current year of study**. For example, a first-year student should get foundational projects, while a final-year student should get more advanced, portfolio-ready projects.
  - Use the "Vidyatej Knowledge Map" below as your primary source of truth for generating the roadmap.
  - For any field that should be a list, provide a newline-separated string. For example:
    - Skill 1
    - Skill 2
    - Skill 3
  - Be specific and provide concrete examples.
  - The tone should be like a friendly and knowledgeable mentor.

  ---
  **Vidyatej Knowledge Map (Starter Version)**

  **Engineering**
  1.  **CSE / ISE / AIML**
      *   **Data Scientist**
          *   **Skills:** Python, Statistics, Machine Learning, Deep Learning, SQL
          *   **Tools:** TensorFlow, PyTorch, Scikit-learn, Jupyter
          *   **Resources:** Kaggle, Coursera (Andrew Ng), DataCamp
          *   **Projects:** Stock Price Prediction, Image Classifier, NLP Chatbot
          *   **Job Market:** Strong demand across IT, healthcare, finance, e-commerce. Tiered compensation: Services firms (<10 LPA), Product/Startups (10-20 LPA), Global Giants (20+ LPA).
          *   **Timeline:** 2–3 years
      *   **Web Developer**
          *   **Skills:** HTML, CSS, JavaScript, React, Node.js, MongoDB
          *   **Tools:** VS Code, GitHub, Firebase, Docker
          *   **Resources:** FreeCodeCamp, MDN Docs, The Odin Project
          *   **Projects:** Portfolio Website, E-commerce Platform, Blogging App
          *   **Job Market:** High demand in startups and enterprises. Entry-level (<5 LPA), Mid-level (5-15 LPA), Senior (15+ LPA).
          *   **Timeline:** 1–2 years
      *   **AI Engineer**
          *   **Skills:** Python, Data Structures, Algorithms, Linear Algebra, Probability, Machine Learning, Deep Learning
          *   **Tools:** PyTorch, TensorFlow, Keras, Scikit-learn, AWS SageMaker, GCP AI Platform
          *   **Resources:** fast.ai, Coursera AI for Everyone, DeepLearning.AI
          *   **Projects:** Generative Art with GANs, AI-powered Recommendation System, Automated Content Summarizer
          *   **Job Market:** Very high demand. Tiered structure: Startups/Services (10-20 LPA), Top tech (20+ LPA).
          *   **Timeline:** 2–3 years
      *   **Cloud Engineer**
          *   **Skills:** AWS/GCP/Azure, Docker, Kubernetes, Terraform, CI/CD
          *   **Tools:** Jenkins, Ansible, GitLab CI, Prometheus
          *   **Resources:** A Cloud Guru, AWS Certified Cloud Practitioner, KodeKloud
          *   **Projects:** Deploy a multi-service app on Kubernetes, Automate infrastructure with Terraform, CI/CD pipeline for a web app.
          *   **Job Market:** Extremely high demand across all industries. Mid-level (8-15 LPA), Senior (15-25+ LPA).
          *   **Timeline:** 1-2 years
      *   **Software Developer**
          *   **Skills:** Java/C++/Python, Data Structures, Algorithms, System Design
          *   **Tools:** Git, Docker, IntelliJ/VS Code, JUnit
          *   **Resources:** LeetCode, GeeksforGeeks, "Cracking the Coding Interview" book
          *   **Projects:** Library Management System, Online Chess Game, Scalable URL Shortener
          *   **Job Market:** Consistently high demand. Tiered: Services firms (<8 LPA), Product companies (10-20 LPA), Top MNCs (20+ LPA).
          *   **Timeline:** 1-2 years
      *   **Cybersecurity Analyst**
          *   **Skills:** Networking, Linux, Cryptography, Penetration Testing, SIEM
          *   **Tools:** Wireshark, Kali Linux, Metasploit, Splunk
          *   **Resources:** Cybrary, TryHackMe, CompTIA Security+
          *   **Projects:** Build a home lab for pentesting, Analyze network traffic for anomalies, Secure a vulnerable web application
          *   **Job Market:** Rapidly growing field. Mid-level (7-12 LPA), Senior (12-20+ LPA).
          *   **Timeline:** 2-3 years
  2.  **ECE**
      *   **Embedded Systems Engineer**
          *   **Skills:** C, C++, Microcontrollers, RTOS, Digital Electronics
          *   **Tools:** Arduino, Raspberry Pi, Keil, Proteus
          *   **Resources:** NPTEL Embedded Systems, FreeCodeCamp IoT, IEEE Journals
          *   **Projects:** IoT Smart Home, Autonomous Robot, Sensor Networks
          *   **Job Market:** High demand in IoT, automotive, robotics. Mid-level (6-12 LPA), Senior roles at top firms (15+ LPA).
          *   **Timeline:** 2–3 years
      *   **VLSI Engineer**
          *   **Skills:** Verilog, VHDL, ASIC Design, Semiconductor Physics
          *   **Tools:** Cadence, Synopsys, Xilinx Vivado
          *   **Resources:** Udemy VLSI Design, Coursera Chip Design
          *   **Projects:** FPGA-based Processor, Low Power Circuit Design
          *   **Job Market:** Extremely high value niche. Mid-level (10-20 LPA), Senior at top firms (25-80+ LPA).
          *   **Timeline:** 2–4 years
  3.  **Mechanical**
      *   **Automobile Engineer**
          *   **Skills:** CAD, Thermodynamics, Vehicle Dynamics
          *   **Tools:** AutoCAD, SolidWorks, Ansys
          *   **Resources:** SAE India, NPTEL, MIT OpenCourseWare
          *   **Projects:** Electric Vehicle Prototype, Engine Design, Solar Car Model
          *   **Job Market:** Strong in EV, manufacturing, R&D. Mid-level (5-10 LPA).
          *   **Timeline:** 3–4 years
      *   **Robotics Engineer**
          *   **Skills:** Control Systems, Mechatronics, Python, ROS
          *   **Tools:** MATLAB, Gazebo, Arduino, SolidWorks
          *   **Resources:** Coursera Robotics Specialization, ROS Tutorials
          *   **Projects:** Pick-and-Place Robot, Humanoid Robot, Automated Drone
          *   **Job Market:** Growing in automation, defense, AI industries. Mid-level (7-15 LPA).
          *   **Timeline:** 2–4 years
  4.  **Civil**
      *   **Structural Engineer**
          *   **Skills:** RCC Design, Structural Analysis, Construction Materials
          *   **Tools:** STAAD Pro, AutoCAD Civil 3D, ETABS
          *   **Resources:** NPTEL Civil, Bentley Learning, IS Codes
          *   **Projects:** Bridge Design, Earthquake-Resistant Building, Smart City Model
          *   **Job Market:** Demand in infrastructure, smart cities, government projects. Mid-level (5-10 LPA).
          *   **Timeline:** 3–4 years
      *   **Urban Planner**
          *   **Skills:** GIS, Town Planning, Environmental Studies
          *   **Tools:** ArcGIS, AutoCAD Map, SketchUp
          *   **Resources:** UN Habitat, MIT Urban Studies, Coursera GIS
          *   **Projects:** Smart Traffic Management, Sustainable City Design
          *   **Job Market:** Expanding with urban development. Mid-level (6-12 LPA).
          *   **Timeline:** 2–3 years

  **MBA**
  1.  **Finance**
      *   **Financial Analyst**
          *   **Skills:** Accounting, Financial Modeling, Risk Analysis, Excel
          *   **Tools:** Excel, Power BI, Tableau
          *   **Resources:** CFA Institute, Investopedia, Coursera Finance
          *   **Projects:** Budget Forecasting, Stock Market Analysis
          *   **Job Market:** Stable in banks, corporates, fintech. Tiered: Banks/Corporates (5-12 LPA), Top consulting/finance firms (12-20 LPA).
          *   **Timeline:** 2–3 years
      *   **Investment Banker**
          *   **Skills:** Valuation, Mergers & Acquisitions, Financial Modeling, Capital Markets
          *   **Tools:** Bloomberg Terminal, FactSet, Advanced Excel
          *   **Resources:** Wall Street Prep, Breaking into Wall Street
          *   **Projects:** M&A deal simulation, Leveraged Buyout (LBO) model
          *   **Job Market:** Highly competitive and lucrative. Analyst roles at top firms (15-30+ LPA).
          *   **Timeline:** 2-3 years.
  2.  **Marketing**
      *   **Digital Marketing Manager**
          *   **Skills:** SEO, SEM, Social Media, Analytics
          *   **Tools:** Google Analytics, HubSpot, Canva
          *   **Resources:** HubSpot Academy, Google Skillshop
          *   **Projects:** Brand Campaign, Social Media Strategy, E-commerce Ads
          *   **Job Market:** Strong in startups and retail. Mid-level (8-15 LPA).
          *   **Timeline:** 1–2 years
      *   **Brand Manager**
          *   **Skills:** Brand Strategy, Consumer Behavior, Market Research, Campaign Management
          *   **Tools:** Nielsen, SimilarWeb, SurveyMonkey
          *   **Resources:** "Positioning: The Battle for Your Mind" book, Kellogg School of Management resources
          *   **Projects:** Develop a brand launch strategy, Analyze competitor brand positioning
          *   **Job Market:** High demand in FMCG, retail. Senior roles (15-30+ LPA).
          *   **Timeline:** 2-4 years

  **MCA**
  1.  **Software Development**
      *   **Full Stack Developer**
          *   **Skills:** Java, Python, React, Node.js, SQL
          *   **Tools:** GitHub, VS Code, Docker
          *   **Resources:** FreeCodeCamp, Udemy Java Developer
          *   **Projects:** CRM System, Learning Management System
          *   **Job Market:** Strong across IT industry. Tiered: Services firms (<8 LPA), Product companies (8-15+ LPA).
          *   **Timeline:** 2–3 years
  2.  **Cybersecurity**
      *   **Security Analyst**
          *   **Skills:** Networking, Linux, Cryptography, Penetration Testing
          *   **Tools:** Wireshark, Kali Linux, Metasploit
          *   **Resources:** EC-Council CEH, Coursera Cybersecurity, Cybrary
          *   **Projects:** Secure Banking App, Penetration Testing Lab
          *   **Job Market:** Huge demand in IT, defense, finance. Mid-level (8-15 LPA), Senior (15-25+ LPA).
          *   **Timeline:** 2–3 years

  **Diploma**
  1.  **Computer Science**
      *   **Junior Web Developer**
          *   **Skills:** HTML, CSS, JavaScript, Bootstrap
          *   **Tools:** VS Code, GitHub Pages
          *   **Resources:** W3Schools, FreeCodeCamp
          *   **Projects:** Personal Portfolio, Small Business Website
          *   **Job Market:** Entry-level jobs in IT companies, typically <5 LPA.
          *   **Timeline:** 1–2 years
  2.  **Electronics**
      *   **Technician / IoT Developer**
          *   **Skills:** PCB Design, Microcontrollers, Sensors
          *   **Tools:** Arduino, Eagle, Proteus
          *   **Resources:** NPTEL IoT, Arduino Docs
          *   **Projects:** Smart Lighting System, Water Level Detector
          *   **Job Market:** Local industries, IoT startups. Entry-level <5 LPA.
          *   **Timeline:** 1–2 years
  ---

  **Roadmap Output:**

  1.  **Motivational Nudge:** A short, uplifting message to get the student excited.
  2.  **Skill Roadmap:** A list of essential technical skills based on the Knowledge Map.
  3.  **Tools to Master:** Specific programming languages, frameworks, and libraries from the Knowledge Map.
  4.  **Estimated Timeline:** An estimation of how many years it will take to achieve the career goal, based on the Knowledge Map and **considering their current year of study**.
  5.  **Project Ideas:** 3-4 project ideas with increasing difficulty from the Knowledge Map, **appropriate for their current year**.
  6.  **Learning Resources:** Suggest top free and paid courses, books, and communities from the Knowledge Map.
  7.  **Career Growth:** Describe potential career growth and future opportunities for the chosen path.
  8.  **Resume & Interview Prep:** A brief resume outline and 3-5 common interview questions. Do not include 'Technical Skills' or 'Soft Skills' in the resume outline.
  9.  **Job Market Insights:** Insights on demand and salary ranges from the Knowledge Map, reflecting the tiered compensation structure (services vs. product vs. startups).`,
});


const generatePersonalizedRoadmapFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedRoadmapFlow',
    inputSchema: GeneratePersonalizedRoadmapInputSchema,
    outputSchema: GeneratePersonalizedRoadmapOutputSchema,
  },
  async input => {
    const {output} = await generatePersonalizedRoadmapPrompt(input);
    return output!;
  }
);
