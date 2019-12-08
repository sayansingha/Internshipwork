import React, { Component } from 'react'
import * as d3 from 'd3'
import data from './heatmap_data.csv'
class BarChart extends Component {
  componentDidMount () {
    this.drawHeatMapChart()
  }

  

  drawHeatMapChart () {
    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 30, left: 100 }

    var width = 1050

    var height = 300

    // append the svg object to the body of the page
    var svg = d3
      .select('#container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Labels of row and columns
    //  var myVars = ['John Doe', 'Mark Doe', 'Perry Doe', 'Denver Doe', 'Oliver Doe', 'Berry Doe', 'Arthur Doe', 'Drake Doe', 'Mike Doe','Harvey Doe']
    //  var myGroups = ['9 AM', '9:30 AM', '10 AM', '10:30 AM', '11 AM', '11:30 AM', '12 PM', '12:30 PM', '1 PM','1:30 PM']
    var myGroups = ["9 AM", "9:30 AM", "10 AM", "10:30 AM", "11 AM", "11:30 AM", "12 PM", "12:30 PM", "1 PM", "1:30 PM"]
    var myVars = ["Harvey Doe", "Mike Doe", "Drake Doe", "Arthur Doe", "Berry Doe", "Oliver Doe", "Denver Doe", "Perry Doe", "Mark Doe", "John Doe"]
    // Build X scales and axis:
    var x = d3
      .scaleBand()
      .range([0, width])
      .domain(myGroups)
      .padding(0.01)
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    // Build X scales and axis:
    var y = d3
      .scaleBand()
      .range([height, 0])
      .domain(myVars)
      .padding(0.01)
    svg.append('g').call(d3.axisLeft(y))

    // Build color scale
    var myColor = d3
      .scaleLinear()
      .range(['white', '#0e3939'])
      .domain([1, 100])

    // Read the data
    d3.csv(
      data,
      function (data) {
        svg
          .selectAll()
          .data(data, function (d) {
            return d.group + ':' + d.variable
          })
          .enter()
          .append('rect')
          .attr('x', function (d) {
            return x(d.group)
          })
          .attr('y', function (d) {
            return y(d.variable)
          })
          .attr('width', x.bandwidth())
          .attr('height', y.bandwidth())
          .style('fill', function (d) {
            return myColor(d.value)
          })
      }
    )
  }

  render () {
    return <div id="container" />
  }
}

export default BarChart
