import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body').append('svg');
svg.attr('width', width);
svg.attr('height', height);

 const n = 100;
/* const marks = [];
for (let i = 0; i < n; i++) {
    marks.push({
        y: i * 20,
        width: width,
        height: 10,
        mask: 'url(#circle-mask',
    });
}  */

svg
.selectAll('rect')
.data(d3.range(n))
.join('rect')
.attr('y', (d) => d * 20)
.attr('width', width)
.attr('height', 10)
.attr('mask', 'url(#circle-mask)');

const mask = svg.append('mask').attr('id', 'circle-mask');

mask.append('rect').attr('width', width).attr('height', height).attr('fill', 'black');

mask.append('circle').attr('cx', width / 2)
.attr('cy', height / 2).attr('r', 200).attr('fill', 'white');

const mask2 = svg.append('mask').attr('id', 'circle-mask-2');

mask2.append('rect').attr('width', width).attr('height', height).attr('fill', 'white');

mask2.append('circle').attr('cx', width / 2)
.attr('cy', height / 2).attr('r', 200).attr('fill', 'black');