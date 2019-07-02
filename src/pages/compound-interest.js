import React, { useState } from 'react'

import styled from 'styled-components';
// import _ from 'lodash';

import Card from '../components/Card'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Chart from '../components/Chart';
import { compoundInterestAnnualSeries } from '../lib/formula';

export const ZButton = styled.button`
  background: #DD8436;
  font-family: Roboto;
  padding: .5rem 1rem .35rem 1rem;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 4px;

  @keyframes button-hover {
    from { 
      background: #DD8436; 
    }
    to {
      background-color: #1E3A55;
    }
  }

  &:hover {
    color: #1E3A55;
  }
  
  &:active {
    color: #EEEADC;
    background-color: #1E3A55;
    gradient: .5;
    opacity: .75;
    box-shadow: 3px;
    animation-name: button-hover;
    animation-duration: .5s;
    outline: none;
  }
  &:focus {
    outline: none;
  }

`;

export const ZInput = styled.input`
  width: 100%;
  background-color: #EEEADC;
  outline: none;
  padding-left: .25rem;
  margin: .25rem;
  border-style: solid;
  border-radius: 5px;
  border-color: gray;
  border-width: 2px;
`;

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState(1000);
  const [years, setYears] = useState(20);
  const [rate, setRateOfInterest] = useState(.05);
  // const [monthlyContribution, setMonthlyContribution] = useState(50);
  const defaultSeries = [ 100, 200, 400, 100, 50, 340 ];
  const [annualData, setAnnualData] = useState(defaultSeries);
  return (
  <Layout>
    <SEO title="Compound interest" keywords={[
      `compound interest`, 
      `saving`, 
      `finance`
      ]} />
    <p>
      Compound interest is sweet. It takes a little bit of stuff
      and turns it into a lot of stuff. The graphs below will help
      visualize the growth of money via the compound interest formula.
    </p>
    <form style={{ 
      display: 'flex',
      flexDirection: 'row'
      }}>

      <div style={{ flex: 1 }}>
        <label htmlFor="amount"># of Years</label>
        <ZInput 
          id="years"
          type="text" 
          value={years} 
          onChange={(e) => setYears(e.target.value)}
        />
      </div>
      <div style={{ flex: 1 }}>
        <label htmlFor="principal">Principal</label>
        <ZInput 
          id="principal"
          type="text" 
          value={principal} 
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div style={{ flex: 1 }}>
        <label htmlFor="rate-of-interest">Rate of Interest</label>
        <ZInput 
          id="rate-of-interest"
          type="text" 
          value={rate} 
          onChange={(e) => setRateOfInterest(e.target.value)}
        />
      </div>
        <ZButton onClick={(e)=> {
          e.preventDefault();
          console.log('Boom', principal, years);
          const newData = compoundInterestAnnualSeries(principal, rate, 12, years);
          setAnnualData(newData);
          }}
        >
          Calculate
        </ZButton> 
    </form>

    <Card>
      <Chart 
        data={annualData}
        size={[600, 500]}
      />
    </Card>
  </Layout>
  );
}  

// TODO: Later
// <label>Monthly Contribution</label>
// <input 
//   type="text" 
//   value={monthlyContribution}
//   onChange={(e) => setMonthlyContribution(e.target.value)}/>

export default CompoundInterest
