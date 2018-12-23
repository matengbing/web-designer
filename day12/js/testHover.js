import {setDIvStyle} from "../js/hover.js";
let style1={
	"background-color":"red",
	"left":"10px",
	"bottom":"10px"
};
let style2={
	"background-color":"#c3f",
	"right":"10px",
	"top":"10px"
};
let style3={
	"background-color":"gray",
	"right":"10px",
	"bottom":"10px"
};
setDIvStyle($('.pro_style').eq(0),style1,'热销');
setDIvStyle($('.pro_style').eq(1),style2,'热销');
setDIvStyle($('.pro_style').eq(2),style3,'热销');
