import React, { Component } from 'react';

import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    console.log('boom');
    const node = this.node
    const dataMax = max(this.props.data)
    const yScale = scaleLinear()
       .domain([0, dataMax])
       .range([0, this.props.size[1]])
     select(node)
        .selectAll('rect')
        .data(this.props.data)
        .enter()
        .append('rect')
     
     select(node)
        .selectAll('rect')
        .data(this.props.data)
        .exit()
        .remove()

     
     select(node)
        .selectAll('rect')
        .data(this.props.data)
        .style('fill', 'lightblue')
        .attr('x', (d,i) => i * 25)
        .attr('y', d => {
          const theSize = this.props.size[1];
          const theScale = yScale(d);
          // console.log('wut?', theSize, theScale, theSize - theScale);
          return (theSize - theScale);
        })
        .attr('height', d => yScale(d))
        .attr('width', 25)
  }
  render() {
    return (
      <svg 
        ref={node => this.node = node}
        width={500} height={500}>
      </svg>
    );
  }

}

export default Chart;
