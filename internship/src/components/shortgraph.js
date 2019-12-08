import React, {
    Component
} from 'react'
import * as d3 from 'd3'
import data from './heatmap_data.csv'
class ShortGraph extends Component {
    componentDidMount() {
        this.drawHeatMapChart()
    }



    drawHeatMapChart() {
        // set the dimensions and margins of the graph
        var margin = {
                top: 30,
                right: 30,
                bottom: 30,
                left: 50
            },
            width = 350,
            height = 30;

        // append the svg object to the body of the page
        var svg = d3.select(`#${this.props.container}`)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // Labels of row and columns
        var myGroups = ["B", "C", "D", "E","F", "G", "H", "I", "J"]
        var myVars = [" "]

        // Build X scales and axis:
        var x = d3.scaleBand()
            .range([0, width])
            .domain(myGroups)
            .padding(0.01);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
        //.call(d3.axisBottom(x))

        // Build X scales and axis:
        var y = d3.scaleBand()
            .range([height, 0])
            .domain(myVars)
            .padding(0.01);
        svg.append("g")
        //.call(d3.axisLeft(y));

        // Build color scale
        var myColor = d3.scaleLinear()
            .range(["white", "#0e3939"])
            .domain([1, 100])

        //Read the data
        d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv", function (data) {

            svg.selectAll()
                .data(data, function (d) {
                    return d.group + ':' + d.variable;
                })
                .enter()
                .append("rect")
                .attr("x", function (d) {
                    return x(d.group)
                })
                .attr("y", function (d) {
                    return y(d.variable)
                })
                .attr("width", x.bandwidth())
                .attr("height", y.bandwidth())
                .style("fill", function (d) {
                    return myColor(d.value)
                })

        })
    }

    render() {
        console.log("ShortGraph:")
        console.log(this.props)
        return <div id={this.props.container} />
    }
}

export default ShortGraph