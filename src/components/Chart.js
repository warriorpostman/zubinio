import React, { Component } from 'react';
import _ from 'lodash';

import { scaleLinear } from 'd3-scale';
import { axisLeft, axis } from 'd3-axis';
import { max } from 'd3-array';
import { select } from 'd3-selection';

import './chart.css';

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
    const node = this.node
    const yearCount = this.props.data.length;
    const dataMax = max(this.props.data)
    const superMax = 1 * 1000 * 1000;
    const ratio = (dataMax/superMax) * this.props.size[1];
    console.log({ dataMax, ratio });
    const yScale = scaleLinear()
       .domain([0, dataMax + 10])
      .range([0, this.props.size[1]])
        // (dataMax/this.props.size[1])


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
      .style('fill', 'orange')
      .attr('x', (d,i) => i * 30)
      .attr('y', d => {
        const theSize = this.props.size[1];
        const theScale = yScale(d);
        // console.log('wut?', theSize, theScale, theSize - theScale);
        // console.log('size - scale', theSize - theScale);
        return (theSize - theScale);
      })
      .attr('height', d => yScale(d))
      .attr('width', 25);

    const yAxis = axisLeft(yScale).ticks(10);
    select(node)
      .append('g')
      .attr("transform", "translate(0," + this.props.size[1] + ")")
      .call(yAxis);

     // var yAxis = axis()
     //        .scale(yScale)
     //        .orient("left")
     //  .ticks(10, "%");

    // select(node).call(yAxis);

    // const axis = axisLeft(yScale)
    //     .tickValues(_.range(0, 20));
    // select(node).append(axis);
    // selectAll('rect')
    //       .append
  }

  render() {
    return (
      <div className="chart-wrapper">
        <svg 
          ref={node => this.node = node}
          width={this.props.size[0]} height={this.props.size[1]}>
        </svg>
    </div>
    );
  }

}

export default Chart;
