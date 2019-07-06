(function (d3$1) {
    'use strict';

    const svg = d3$1.select('svg');

    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const render=data=>{

        //pleasantries
        const margin = { top: 80, right: 0, bottom: 48, left: 150 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;



        //now for the scales
        const xscale=d3$1.scaleBand()
            .domain(data.map(function(d){return d.name}))
            .range([0, innerWidth])
            .padding(0.35);
        const yscale=d3$1.scaleLinear()
            .domain([0, d3$1.max(data, d=>d.rank)])
            .range([innerHeight,0]);

        const g= svg.append('g')
            .attr('transform',`translate(${margin.left},${margin.top})`);

        const xAxis= g.append('g').call(d3$1.axisBottom(xscale))
            .attr('transform',`translate(0,${innerHeight})`);

        const yAxis= g.append('g').call(d3$1.axisLeft(yscale));

        //now to draw the data

        const rectGrp = svg
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        rectGrp
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("width", xscale.bandwidth())
            .attr("height", (d, i) => {
                return innerHeight - yscale(d.rank);
            })
            .attr("x", d => {
                return xscale(d.name);
            })
            .attr("y", function(d) {
                return yscale(d.rank);
            })
            .attr('fill','orange');

        const titleGraph="The Goals Of LaLiGa Players";

        const title=svg.append('g')
            .attr('class','title')
            .append('text')
            .attr('x',(innerWidth/2)-25)
            .attr('y',30)
            .text(titleGraph);

    };

    d3.json('../resources/player.json')
        .then(function(data){
            render(data);
            console.log(data);
        });

}(d3));

