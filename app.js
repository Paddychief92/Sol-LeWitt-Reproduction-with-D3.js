import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body').append('svg');
svg.attr('width', width);
svg.attr('height', height);

const n = 100;
const marks = [];
for (let i = 0; i < n; i++) {
    marks.push({
        y: i * 20,
        width: width,
        height: 10,
        mask: 'url(#circle-mask',
    });
}

svg
.selectAll('rect')
.data(marks)
.join('rect')
.attr('y', (d) => d.y)
.attr('width', (d) => d.width)
.attr('height', (d) => d.height)
.attr('mask', (d) => d.mask)