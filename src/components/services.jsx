import React from "react";
import { Image } from "./image";

export const Services = (props) => {
  const consulting = [
    {
      title: "Managed IT Services",
      desc: "When it comes to managed IT services for your New York City company, chances are you already wear multiple hats. That’s generally how it is for business leaders. First, there is your official list of responsibilities, and then, everything else. How about making that list a little shorter? An IT support provider like Intelligent can take care of the day-to-day maintenance of your organization. Including, but not limited to, systems monitoring, updates, cloud, security, data backup, on call break-fix, and a whole lot more.",
      largeImage: "img/portfolio/01-large.jpg",
      smallImage: "img/portfolio/01-small.jpg",
    },
    {
      title: "CONTRACT STAFFING & DIRECT HIRE RECRUITMENT SERVICES",
      desc: "Whether you are looking to augment your current staff with temporary/contract personnel, or you are in need of recruiting experts to help you attract qualified talent, the team at I.T. Staffing can work with you to source the right candidate for your needs.We place a wide range of IT experts including Software Developers, Network / Infrastructure Engineers, Database Administrators, IT Security experts, Business Analysts, Technical Writers and Executives / mid-level managers.Additionally we recruit Accounting/Finance, Supply Chain / Procurement , Administrative/ Clerical and Management professionals.We handle the sourcing, screening, paperwork, initial interviews and background screening services and present you with only well qualified candidates.We work on a contingency basis (“No Win, No Fee!”), no fee is due to us until we find you the right candidate.",
      largeImage: "img/portfolio/01-large.jpg",
      smallImage: "img/portfolio/01-small.jpg",
    },
    {
      title: "CLOUD COMPUTING BUSINESS SOLUTIONS",
      desc: "Intelligent IT’s cloud services offer New York City SMBs to enterprises a robust set of computing solutions, while taking into account their unique challenges. Every craft requires the right tools. Carpenters need hammers. Writers need pen and paper. Business professionals need the right technology. Few of the recent advances in business technology stand out in comparison. Companies now have the option to tap into the best tools available from an IT company, even on a limited budget. Those tools can be customized to match your needs exactly. There are so many options out there, the challenge is finding the perfect set of tools for your company. That’s where Intelligent IT shines.",
      largeImage: "img/portfolio/02-large.jpg",
      smallImage: "img/portfolio/02-small.jpg",
    },
  ];
  const productSales = [
    {
      title: "Value Focused",
      desc: "Evaluate the short-term ROI and long-term scalability of all resources spent to drive growth.",
      largeImage: "img/portfolio/01-large.jpg",
      smallImage: "img/portfolio/01-small.jpg",
    },
    {
      title: "Problem Solver",
      desc: "Tackle problems strategically and apply critical thinking to create solutions that drive value for the company and the customer.",
      largeImage: "img/portfolio/02-large.jpg",
      smallImage: "img/portfolio/02-small.jpg",
    },
    {
      title: "Customer First",
      desc: "Approach all aspects of the business with an eye toward driving lasting value and satisfaction for the customer.",
      largeImage: "img/portfolio/03-large.jpg",
      smallImage: "img/portfolio/03-small.jpg",
    },
  ];
  const services = [
    {
      icon: "fa fa-language",
      name: "Payrolling / Onboarding",
      text: "Companies sometimes engage pre-identified workers such as retirees, referrals, or former employees to supplement their workforce on a temporary basis. These resources who are known or referred to you are best managed through a payrolling service provider, We manage the payroll, onboarding, insurance and administration of such candidates . We are their employer of record and we maintain the necessary insurance to meet your criteria. Additionally, we can administer drug tests, and background checks as required.",
    },

    {
      icon: "fa fa-plane",
      name: "MSP /VMS Partnership",
      text: " With the popularity of Managed Service Providers (MSP) and Vendor Management Systems (VMS) we have worked to place ourselves at the forefront of this approach to staffing. We work closely with most major MSP’s to formulate strong relationships, built on trust and performance, which in turn benefits our clients.",
    },
    {
      icon: "fa fa-pie-chart",
      name: "Direct Hire",
      text: " We work closely with your Human Resources department or representative to initiate a search specific to your needs. We source, qualify and interview potential candidates for your unique requirements to ensure an ideal fit. Only a select few that meet your qualifications are presented to you for review.",
    },
  ];
  const criticalActions = [
    {
      key: "Evaluate",
      value:
        "Make strategic decisions based on key performance indicators to drive value and growth for the company. Ensure that all decisions are made based on data.",
      largeImage: "img/portfolio/01-large.jpg",
      smallImage: "img/portfolio/01-small.jpg",
    },
    {
      key: "Understand",
      value:
        "Seek to understand other perspectives by approaching all team and customer interactions from a place of openness and acceptance. Provide and receive candid, constructive feedback with the goal of increasing personal and team performance.",
      largeImage: "img/portfolio/02-large.jpg",
      smallImage: "img/portfolio/02-small.jpg",
    },
    {
      key: "Collaborate",
      value:
        "Take advantage of the diversity of the team through cross-functional collaboration to solve customer problems and scale the business. Espouse a “better together” mindset when approaching challenges and leverage the whole team to find more successful solutions.",
      largeImage: "img/portfolio/03-large.jpg",
      smallImage: "img/portfolio/03-small.jpg",
    },
    {
      key: "Adapt",
      value:
        "Embrace a fast-paced startup environment and be open to dealing with the ambiguity that comes with building a company. Ready to pivot to meet the needs of the business and the customer.",
      largeImage: "img/portfolio/04-large.jpg",
      smallImage: "img/portfolio/04-small.jpg",
    },
  ];
  const staffing = [
    {
      key: "MSP /VMS Partnership",
      value:
        "With the popularity of Managed Service Providers (MSP) and Vendor Management Systems (VMS) we have worked to place ourselves at the forefront of this approach to staffing. We work closely with most major MSP’s to formulate strong relationships, built on trust and performance, which in turn benefits our clients.",
      largeImage: "img/portfolio/01-large.jpg",
      smallImage: "img/portfolio/01-small.jpg",
    },
    {
      key: "Direct Hire",
      value:
        "We work closely with your Human Resources department or representative to initiate a search specific to your needs. We source, qualify and interview potential candidates for your unique requirements to ensure an ideal fit. Only a select few that meet your qualifications are presented to you for review.",
      largeImage: "img/portfolio/02-large.jpg",
      smallImage: "img/portfolio/02-small.jpg",
    },
    {
      key: "Temporary / Contract",
      value:
        "Contract personnel give you the flexibility to better manage your workflow. Often a specialized skillset is needed during the start of a project, periods of increased demand, special projects, system enhancements and upgrades or to fill a temporary vacancy. I.T. Staffing provides temporary staffing solutions to meet your specific needs without long terms commitments.",
      largeImage: "img/portfolio/03-large.jpg",
      smallImage: "img/portfolio/03-small.jpg",
    },
    {
      key: "Contract-to-Hire",
      value:
        "A proven method that allows you to evaluate and review a candidate’s performance before making an offer of employment. Contract-to hire arrangements gives you the opportunity to ensure a mutual fit in your working environment. A high percentage of such placements result in long term employment relationships.",
      largeImage: "img/portfolio/04-large.jpg",
      smallImage: "img/portfolio/04-small.jpg",
    },
    {
      key: "Payrolling / Onboarding",
      value:
        "Companies sometimes engage pre-identified workers such as retirees, referrals, or former employees to supplement their workforce on a temporary basis. These resources who are known or referred to you are best managed through a payrolling service provider, We manage the payroll, onboarding, insurance and administration of such candidates . We are their employer of record and we maintain the necessary insurance to meet your criteria. Additionally, we can administer drug tests, and background checks as required.",
      largeImage: "img/portfolio/04-large.jpg",
      smallImage: "img/portfolio/04-small.jpg",
    },
  ];
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer a variety of services related to information technology to
            help businesses meet their technology needs.
          </p>
        </div>
        <div className="product-sales">
          <h3>Product Sales - Key Characteristics of our Team Members</h3>
          <div className="row">
            <div className="portfolio-items">
              {productSales
                ? productSales.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <Image
                        title={d.title}
                        desc={d.desc}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
        <div className="product-sales">
          <h3>staffing Services.</h3>
          <div className="row">
            <div className="portfolio-items">
              {staffing
                ? staffing.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <Image
                        title={d.key}
                        desc={d.value}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
        <div className="product-sales">
          <h3>Consulting Services.</h3>
          <div className="row">
            <div className="portfolio-items">
              {consulting
                ? consulting.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <Image
                        title={d.title}
                        desc={d.desc}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
        <div className="product-sales">
          <h3>
            Road Map and strategy - Critical Actions our team is expected to
            embrace in their work every day.
          </h3>
          <div className="row">
            <div className="portfolio-items">
              {criticalActions
                ? criticalActions.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <Image
                        title={d.key}
                        desc={d.value}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
