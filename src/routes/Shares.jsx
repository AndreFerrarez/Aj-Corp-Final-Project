import React, { useState }  from 'react';
import '../styles/Form.css';


const Shares = () => {

  // const [formData, setFormData] = useState({
  //   code: '',
  //   compName: '',
  //   price: '',
  //   description: '',
  //   riskLevel: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // You can perform further actions with the form data here
  // };
  
  
  

  // return (
  //   <div>
  //     <h2 style={{textAlign: 'center'}}>Stock analysis...</h2>
      
  //     <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="code">Code:</label>
  //       <div className='inputs'>
  //       <input
  //         type="text"
  //         id="code"
  //         name="code"
  //         value={formData.code}
  //         onChange={handleChange}
  //       />
  //       </div>
  //     </div>
  //     <div >
  //       <label htmlFor="compName">Company Name:</label>
  //       <div className='inputs'>
  //       <input
  //         type="text"
  //         id="compName"
  //         name="compName"
  //         value={formData.compName}
  //         onChange={handleChange}
  //       />
  //       </div>
  //     </div>
  //     <div>
  //       <label htmlFor="price">Price:</label>
  //       <div className='inputs'>
  //       <input
  //         type="number"
  //         id="price"
  //         name="price"
  //         value={formData.price}
  //         onChange={handleChange}
  //       />
  //       </div>
  //     </div>
  //     <div>
  //       <label htmlFor="description">Description:</label>
  //       <div className='inputs'>
  //       <textarea
  //         id="description"
  //         name="description"
  //         value={formData.description}
  //         onChange={handleChange}
  //       />
  //       </div>
  //     </div>
  //     <div>
  //       <label>Risk Level:<br/><br/></label>
  //       <div>
  //         <label className='radios' >{' '}
  //           Aggressive</label>
  //           <input
  //             type="radio"
  //             name="riskLevel"
  //             value="aggressive"
  //             checked={formData.riskLevel === 'aggressive'}
  //             onChange={handleChange}
  //           />
          
  //       </div>
  //       <div>
  //       <label className='radios'>
  //       {' '}
  //           Moderate</label>
  //           <input
  //             type="radio"
  //             name="riskLevel"
  //             value="moderate"
  //             checked={formData.riskLevel === 'moderate'}
  //             onChange={handleChange}
  //           />
          
  //       </div>
  //       <div>
  //       <label className='radios' >
  //       {' '}
  //           Conservative
  //         </label>
  //           <input
  //             type="radio"
  //             name="riskLevel"
  //             value="conservative"
  //             checked={formData.riskLevel === 'conservative'}
  //             onChange={handleChange}
  //           />
  //       </div>
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>


  //   </div>
  // )
  return (
    <div className='box'>
      <h2>"Key Considerations for Assessing Investment Opportunities in Companies"</h2>
      
      <ul>
        <li>Financial Statements: Review the company's financial statements, including the balance sheet, income statement, and cash flow statement. Analyze key financial ratios such as profitability, liquidity, solvency, and efficiency ratios to assess the company's financial health.</li><br/>
        <li>Management Team: Evaluate the experience, track record, and competence of the company's management team. Look for a management team with a solid background and a clear strategy for growth and value creation.</li><br/>
        <li>Business Model and Competitive Advantage: Understand the company's business model and assess its competitive advantage. Determine if the company has a unique selling proposition, a strong market position, or any distinctive capabilities that set it apart from competitors.</li><br/>
        <li>Industry Analysis: Conduct a comprehensive analysis of the industry in which the company operates. Assess factors such as market size, growth potential, competitive landscape, and regulatory environment. Identify any trends, opportunities, or threats that may impact the company's performance.</li><br/>
        <li>Risk Assessment: Identify and evaluate the risks associated with investing in the company. Consider factors such as market risk, industry risk, operational risk, regulatory risk, and financial risk. Assess the company's risk management practices and its ability to mitigate potential risks.</li><br/>
        <li>Growth Prospects: Analyze the company's growth prospects by examining its historical growth rate, market share, product pipeline, expansion plans, and any competitive advantages that may fuel future growth.</li><br/>
        <li>Valuation: Determine the company's valuation by using various valuation techniques such as discounted cash flow (DCF), price-to-earnings (P/E) ratio, and comparative analysis with industry peers. Compare the intrinsic value of the company to its market price to assess its investment potential.</li><br/>
        <li>Corporate Governance: Evaluate the company's corporate governance practices, including board composition, transparency, shareholder rights, and ethical standards. Look for a company with strong governance principles and alignment of interests between management and shareholders.</li><br/>
        <li>External Factors: Consider macroeconomic factors, geopolitical risks, and other external influences that may impact the company's performance. Stay updated on relevant news, industry trends, and regulatory changes that could affect the company's prospects.</li><br/>
        <li>Due Diligence: Perform comprehensive due diligence, which may include site visits, interviews with management, discussions with industry experts, and accessing reputable sources of information such as financial news, industry reports, and regulatory filings.</li><br/>
      </ul>
      
      <span><i>Remember, investing involves inherent risks, and there are no guarantees of success. It's essential to conduct thorough research and analysis while staying informed about the dynamic nature of the investment landscape. Consulting with professionals and experienced advisors can also provide valuable insights and help make well-informed decisions.</i></span>
    </div>
  )
}

export default Shares;




