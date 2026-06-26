import { style } from "@vanilla-extract/css";

export const titleBarContainer = style({
	position: "fixed",
	width: "1926px",
	height: "327px",
	top: "820px",
	left: "20px"
});

export const titleBarBottom = style({
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: 1,
});

export const titleBarTop = style({
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: 3,
});

export const titleBarTitle = style({
	position: "absolute",
	top: "90px",
	left: "50%",
	width: "90%",
	transform: "translate(-50%, -50%)",
	fontSize: "80px",
	color: "white",
	textAlign: "center",
	fontFamily: "Anta",
	zIndex: 2,
	textWrap: "nowrap",
	overflow: "hidden"
})

export const scrollingText = style({
	position: "relative",
	fontSize: "30px",
	color: "white",
	textAlign: "left",
	fontFamily: "Anta",
});

export const scrollingTextWrapper = style({
	position: "absolute",
	top: "180px",
	left: "50px",
	width: "1780px",
	overflow: "hidden",
	zIndex: 2
})

export const caster1 = style({
	position: "fixed",
	top: "740px",
	left: "182px",
})

export const caster2 = style({
	position: "fixed",
	top: "740px",
	left: "808px",
})

export const caster3 = style({
	position: "fixed",
	top: "740px",
	left: "1436px",
})

export const caster1Frame = style({
	position: "fixed",
	top: "22px",
	left: "50px",
});

export const caster2Frame = style({
	position: "fixed",
	top: "22px",
	left: "675px",
});

export const caster3Frame = style({
	position: "fixed",
	top: "22px",
	left: "1300px",
});


export const casterName = style({
	position: "absolute",
	top: "50%",
	left: "50%",
	width: "100%",
	transform: "translate(-50%, -50%)",
	fontSize: "28px",
	color: "white",
	textAlign: "center",
	fontFamily: "Anta",
});
