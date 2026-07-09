import { style } from "@vanilla-extract/css";

export const logo = style({
	position: "fixed",
	left: "85px",
	top: "1005px",
});

export const sponsors = style({
	position: "fixed",
	left: "1290px",
	top: "1003px",
});

export const conferences = style({
	position: "fixed",
	left: "0px",
	top: "0px",
	width: "1920px",
	height: "1080px",
});

export const tier = style({
	position: "fixed",
	left: "920px",
	top: "23px",
});

export const rscLogo = style({
	position: "fixed",
	left: "856px",
	top: "436px",
});

export const result = style({
	position: "fixed",
	top: "var(--dynamic-top)",
	left: "var(--dynamic-left)",
	width: "781px",
	height: "174px",
});

export const title = style({
	position: "fixed",
	top: "100px",
	left: 0,
	width: "1920px",
	height: "40px",
	fontSize: "36px",
	color: "white",
	textAlign: "center",
	fontFamily: "Anta",
	zIndex: 2,
});

export const logoLeft = style({
	position: "absolute",
	top: "77px",
	left: "20px",
	width: "70px",
	height: "65px",
	maskImage: "url('/rscast/schedule/maskLeft.png')",
	maskSize: "contain",
	maskRepeat: "no-repeat",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const logoRight = style({
	position: "absolute",
	top: "77px",
	right: "20px",
	width: "70px",
	height: "65px",
	maskImage: "url('/rscast/schedule/maskRight.png')",
	maskSize: "contain",
	maskRepeat: "no-repeat",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const leftTeamName = style({
	position: "absolute",
	top: "90px",
	left: "100px",
	width: "225px",
	height: "40px",
	fontSize: "26px",
	color: "white",
	textAlign: "center",
	fontFamily: "Anta",
	zIndex: 2,
	textWrap: "nowrap",
	overflow: "hidden",
});

export const rightTeamName = style({
	position: "absolute",
	top: "90px",
	right: "100px",
	width: "225px",
	height: "40px",
	fontSize: "26px",
	color: "white",
	textAlign: "center",
	fontFamily: "Anta",
	zIndex: 2,
	textWrap: "nowrap",
	overflow: "hidden",
});

export const score = style({
	position: "absolute",
	top: "90px",
	left: "325px",
	width: "130px",
	height: "40px",
	fontSize: "30px",
	color: "white",
	textAlign: "center",
	fontFamily: "Anta",
	zIndex: 2,
});
