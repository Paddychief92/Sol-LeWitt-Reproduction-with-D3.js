import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('body').append('svg');
svg.attr('width', width);
svg.attr('height', height);