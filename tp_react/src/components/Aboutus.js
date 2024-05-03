import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Aboutus.css';

function Aboutus() {
  return (
    <>
    <div className='aboutus-container'>
        <video className='about-video' src="videos/video-2.mp4" autoPlay loop muted/>
        <h1>THINK STAFFING THINK US</h1>
        <p>Your reliable IT Staffing partner</p>
        <div className='about-btns'>
            <Button
                className='btns'
                buttonSize='btn--outline'
                buttonStyle='btn--large'
            >
            GET STARTED
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}
            >
            WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
    <div className='aboutus-matter'>
      <h1>We are trusted by well-known companies.</h1>
      <h1>HRP is a one stop solution for all types of your hiring needs. Our model is customizable and scalable to support your talent acquisition team.</h1>
      <br/>
      <br/>
      <br/>
      <h2>ENTERPRISE DIGITALIZATION - TECHNOLOGY PARTNER</h2>
      <p> TechProjects drives the outcomes that keep our clients a step ahead. Our size gives us enough flexibility to pass on the cost benefits to our clients and employees. You get a personalized attention and best return on investment when you engage TechProjects for any of your IT solutions. These include Enterprise Digital Transformation, Data Intelligence &amp; Automation, IT Security, or Automation, etc. We place hard-to-fine skilled IT professionals on contract, contract- to-hire, and FTEs. </p>
    </div>
    <div className='aboutus-ourservices'>
      <h1>Our Services</h1>
      <ul className='ourservices'>
        <div className='box'>
        <h1>01.</h1>
        <h2>Software Development</h2>
        <p>We make our clients vision a reality. We build digital applications and solutions that scale and increase the bottom line. We specialize in building applications from ground up of and/or on the top of existing applications. We can help you with system integration, enterprise application development, and reporting.</p>
        </div>
        <div className='box'>
        <h1>02.</h1>
        <h2>IT Infrastructure & Cyber Security</h2>
        <p>We help our clients in optimizing their IT infrastructure. Assist them with cyber security needs by best in the business system engineering, architecture & engineering deployment and testing. We support our clients with Internet, datacenter technologies, services, end user support and network setups.</p>
        </div>
      </ul>
      <ul className='ourservices'>
        <div className='box'>
        <h1>03.</h1>
        <h2>Staff Augmentation</h2>
        <p>We specialize in addressing our clients all Human Resources needs by providing experienced, skilled, qualified and cost effective high quality resources for Full Time and Contractual onsite and remote positions. We can help in sourcing Project/Product Managers, Application Developers, Business/Systems Analysts, Scrum Masters, QAs, SMEs and Solution Engineers just to name few.</p>
        </div>
        <div className='box'>
        <h1>04.</h1>
        <h2>Software Implementations</h2>
        <p>We help our clients with the discovery and implementation of out of the box and top of the class cloud and on premises applications, tools and technologies. If you are evaluating enterprise applications and need a partner who can assist you with evaluation based on your specific needs and help you in end to end implementation, we will be your trusted partner.</p>
        </div>
      </ul>
    </div>
    <div className='ourleader-container'>
            <h1>Our Leadership</h1>

            <img className='leaders-image'  src ='https://techprojects.com/wp-content/uploads/2021/09/BIndu-300x300.png' ></img>
            <h2>Bindu Madhavi Madiraju, President </h2>
            <p>
            As a minority & women owned business leader, Bindu Madiraju got more than a decade experience  to create a culture where team members look forward to coming to work in the morning, Contribute, Stay, lead and implement the company’s business growth creativity, stability & leadership strategy. Bindu helped fuel business growth by rapidly expanding public sector services around New York City area. Her experience includes strengthening the company’s focus on commercial customer-centricity and building an employee-driven, open culture of innovation to foster talent.
            Prior to TechProjects, Bindu worked several years   with PKGLOBAL, LLC as HR, Finance & Customer relation leadership roles and dealt with multi billion dollars clients
            Hailing from Hyderabad, India, Bindu has a Master’s degree in Business Administration, and Master’s degree in English literature education from Universities in India.
            </p>
            <br></br>

            <img className='leaders-image'  src ='/images/Ram-copy.jpg' ></img>
            <h2>Ram Madiraju, Partner/COO </h2>
            <p>
            Ram Madiraju is a seasoned technology  leader with more than 25 years of extensive experience in cultivating successful IT consulting, product development teams around the globe. At Tech Projects, Ram is responsible for leading and implementing the company’s growth strategy. He is focused on scaling offerings in a fast-changing technological landscape, strengthening the company’s focus on customer-centricity and building an employee-driven, open culture of innovation to foster talent.
            As a founding partner and COO, Ram brings over 17 years of Sales and Operations experience in the consulting and recruiting industry to TechProjects, having specialized in selling IT staff augmentation services into Enterprise IT environments. He has designed and developed TechProjects’s proprietary, innovative, system-driven recruiting solution for a significant number of nationally recognized commercial and Public sector customers.
            Prior to Tech Projects, Ram held leading roles with technology teams at Oracle Corporation product development & consulting divisions.  At Oracle Corporation, Ram helped successfully scaled global product development, QA teams and established development centers in India to fuel business growth by rapidly expanding ERP-supply chain process etc. He Implemented Oracle ERP, CRM with prestigious public sector customers like Los Angeles Police department (LAPD) , City of Mobiles, and commercial clients like ING  financials, Cable Vision etc.,
            Hailing from Hyderabad, Ram is a Mechanical engineering graduate from Bangalore University and earned his Master’s degree in Machine Design from Visvesvaraya National Institute of Technology (VNIT Nagpur).
            </p>
            <br></br>

            <img className='leaders-image'  src ='/images/ChandraReddy.jpg' ></img>
            <h2>Chandra Reddy —  Partner </h2>
            <p>Chandra Reddy brings in 20+ years of leadership experience across all the strategic IT functions including Global delivery and Account Management. Chandra Reddy is responsible for building, leading global delivery teams, operations, managing the investments for the service delivery organization, enabling global delivery teams to provide best-in-class services to clients and ensuring client delight across all the operating geographies.</p>
            <br></br>
            <p>Chandra has a wide range of experience in delivering complex solutions to clients across USA through innovative models of offshore and onsite service delivery. He has previously worked with top financial, Telecom and retail companies.Chandra received his Bachelors, Masters in computer science and engineering from Bangalore University and is a certified PMP, six sigma.</p>
            <br></br>

            <img className='leaders-image'  src ='/images/Krishna-copy.jpg' ></img>
            <h2>Krishna Alavala – (Vice President -Finance & Sales)</h2>
            <p>
            Krishna Alavala is an accomplished IT professional and a leader with more than 20 years of progressive experience in enabling capabilities, agile project management, product development, leading strategic IT initiatives & full life cycle implementations, managing global teams to solve complex business problems in diverse industries. Krishna is also a problem solver involving predictive analytics and numbers.
            </p>
            <br></br>

            <img className='leaders-image'  src ='/images/Satich-copy.jpg' ></img>
            <h2>Satish Vallabhaneni : Technical Project Manager – ERP </h2>
            <p>
             Satish Vallabhaneni comes with 18 years of experience in Oracle Applications and Technology. A Mechanical Engineering graduate, Satish has a strong affinity towards technology. Having done the role of a Solution Architect for major technical projects, he has a thorough understanding of different business functions in an organization and Architecting Experience with ETL Tools – Informatica and SOA to integrate multiple OLTP and OLAP systems. He has a proven track record in leading successful implementations and partnering with our clients to successfully deliver solutions. As a hub of solutions for the technical workforce, Satish is always amidst action . He is very passionate to acquire new skills and remain abreast with advancement in Technology. He has played pivotal roles as Solution Architect, Project Management, Business Process Reengineering for multiple Oracle projects implementation successfully which includes fortune 500 companies as well.He has implementation experience in multiple industry verticals like HealthCare, Retail, Oil and Gas, Discrete Industries, Process Industries, Airlines sector etc.Managed and led multiple Oracle implementations (including deep expertise with Oracle applications), custom development and cross-enterprise integrated solutions with primary focus on Oracle Supply Chain Modules.He has Implemented Oracle ERP at multiple geographical locations across the world including United States, France, Spain, and Germany.He has Technical and functional expertise well augmented by excellent analytical, problem solving, communication, and interpersonal skills.
            </p>
            <br></br>

            <img className='leaders-image'  src ='/images/Sharath-copy.jpg' ></img>
            <h2>Sarath Makkapati, Head – Finance & Accounting</h2>
            <p>
             With over 25 years of experience in the US Financial Accounting systems, Sarath Makkapati heads and administers the general financial health of our organization. He forecasts, monitors company accounts, prepares financial reports, cash flow statements, budgeting, business activity reports, and ensure compliance with accounting policies and all other financial regulatory requirements. He also participates in strategic data analysis, research, and modeling for the company’s overall wellbeing.
            </p>
            <br></br>

            <img className='leaders-image'  src ='/images/Swetha-1-copy.jpg' ></img>
            <h2>Shweta Narang – Director of Operations</h2>
            <p>
            Shweta Narang joined TechProjects in December 2018. She comes with an experience of more than 12 years in Operations Management. Started her career as an Onboarding Specialist and excelled in her role taking new initiatives and getting into new verticals which led to her elevation to the position of Director of Operations in the company. At TechProjects Shweta is responsible to administer our IT projects/contracts with our government clients, perform budget/cost analysis, contract performance monitoring, audit compliances, manage financial liabilities, and identify risks. She plays a vital role in translating strategic business ideas into operational plans and direct overall management functions. Her key responsibilities further include, to structure and organize the performance of the ongoing projects ensuring the deliverables are met as per the approved terms & conditions, administer pre and post contract awards process, review project contract terms, proposing and negotiating alternative terms, prepare change requests for modifications, adjustments, and extensions. Ethical and trustworthy, with a tireless work ethic and deep commitment to growing people she has been leading with her active role in company’s business expansion initiatives and activities. She also designs and develops effective business strategies, HR practices and general policies with management.
            </p>
            <br></br>

            <img className='leaders-image'  src ='/images/Farheen-copy.jpg' ></img>
            <h2>Farheen – HR Specialist </h2>
            <p>
             Farheen is a motivated and determined HR Professional who has been associated with TechProjects since July 2014. Initially, she started her career from TechProjects India Pvt Ltd, Hyderabad, India handling the HR and Recruitment Operations of the company. She handles various activities within HR such as Talent Acquisition, Business Development, Employee’s payroll and Benefits, Negotiating contracts, onboarding and Legal Paperwork maintenance, etc., She Works and co-ordinates with the HR and Recruitment team to help implement the goals set by the leadership team. She also participates in the candidate screening/interviewing process to ensure the new hires align with the management’s goals.
            </p>
            <br></br>
            <p>
             Her committed, outstanding interpersonal, assessment, negotiation and listening skills, and efficient and successful contribution for the last many years, has earned her the reward of being able to come to US through TechProjects sponsored work Visa (H1B), and work directly and closely with the management of the company and handle the day-to-day HR and Talent Acquisition Operations of the company.
            </p>
    </div>
    </>
  )
}

export default Aboutus;