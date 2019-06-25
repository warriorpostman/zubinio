import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Link } from 'gatsby'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

// import _ from 'lodash';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Chart from '../components/Chart';
// import { compoundInterest } from '../lib/formula';
import { compoundInterestAnnualSeries } from '../lib/formula';

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
    <form>
        <InputLabel htmlFor="amount"># of Years</InputLabel>
        <TextField 
          id="years"
          type="text" 
          value={years} 
          onChange={(e) => setYears(e.target.value)}
        />
        <InputLabel htmlFor="principal">Principal</InputLabel>
        <TextField 
          id="principal"
          type="text" 
          value={principal} 
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <InputLabel htmlFor="rate-of-interest">Rate of Interest</InputLabel>
        <TextField 
          id="rate-of-interest"
          type="text" 
          value={rate} 
          onChange={(e) => setRateOfInterest(e.target.value)}
        />
      <Box color="text.primary">
        <Button onClick={(e)=> {
          e.preventDefault();
          console.log('Boom', principal, years);
          const newData = compoundInterestAnnualSeries(principal, rate, 12, years);
          setAnnualData(newData);
          }}
        >
          Calculate
        </Button> 
      </Box>
    </form>

    <Chart 
      data={annualData}
      size={[600, 300]}
    />
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
