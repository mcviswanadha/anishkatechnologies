import React  from "react"; 

export const Services = ( props ) => {
  const   productSales= [
    {
      "key": "Value Focused",
      "value": "Evaluate the short-term ROI and long-term scalability of all resources spent to drive growth."
    },
    {
      "key": "Problem Solver",
      "value": "Tackle problems strategically and apply critical thinking to create solutions that drive value for the company and the customer."
    },
    {
      "key": "Customer First",
      "value": "Approach all aspects of the business with an eye toward driving lasting value and satisfaction for the customer."
    }
  ]
  const services = [
               {
              "icon": "fa fa-language",
              "name": "Payrolling / Onboarding",
              "text": "Companies sometimes engage pre-identified workers such as retirees, referrals, or former employees to supplement their workforce on a temporary basis. These resources who are known or referred to you are best managed through a payrolling service provider, We manage the payroll, onboarding, insurance and administration of such candidates . We are their employer of record and we maintain the necessary insurance to meet your criteria. Additionally, we can administer drug tests, and background checks as required."
            },

    {
      "icon": "fa fa-plane",
      "name": "MSP /VMS Partnership",
      "text": " With the popularity of Managed Service Providers (MSP) and Vendor Management Systems (VMS) we have worked to place ourselves at the forefront of this approach to staffing. We work closely with most major MSP’s to formulate strong relationships, built on trust and performance, which in turn benefits our clients."
    },
    {
      "icon": "fa fa-pie-chart",
      "name": "Direct Hire",
      "text": " We work closely with your Human Resources department or representative to initiate a search specific to your needs. We source, qualify and interview potential candidates for your unique requirements to ensure an ideal fit. Only a select few that meet your qualifications are presented to you for review."
    }
  ]
  const criticalActions = [
    {
      "key": "Evaluate",
      "value": "Make strategic decisions based on key performance indicators to drive value and growth for the company. Ensure that all decisions are made based on data."
    },
    {
      "key": "Understand",
      "value": "Seek to understand other perspectives by approaching all team and customer interactions from a place of openness and acceptance. Provide and receive candid, constructive feedback with the goal of increasing personal and team performance."
    },
    {
      "key": "Collaborate",
      "value": "Take advantage of the diversity of the team through cross-functional collaboration to solve customer problems and scale the business. Espouse a “better together” mindset when approaching challenges and leverage the whole team to find more successful solutions."
    },
    {
      "key": "Adapt",
      "value": "Embrace a fast-paced startup environment and be open to dealing with the ambiguity that comes with building a company. Ready to pivot to meet the needs of the business and the customer."
    }
  ]
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We offer a variety of services related to information technology to help businesses meet their technology needs. 
          </p>
        </div>
        <div className="product-sales">
          <h3>Product Sales - Key Characteristics of our Team Members</h3>
          <div className="products">
            {productSales
              ? productSales.map( ( d, i ) => (
                  <div key={`${d.name}-${i}`}>
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.key}</h3>
                      <p>{d.value}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
        <div className="product-sales">
          <h3>Critical Actions our team is expected to embrace in their work every day.</h3>
          <div className="products">
            {criticalActions
              ? criticalActions.map( ( d, i ) => (
                  <div key={`${d.name}-${i}`}>
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.key}</h3>
                      <p>{d.value}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
        <div className="row">
          {services
            ? services.map( ( d, i ) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="row">
          {props.data
            ? props.data.map( ( d, i ) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
