import { style } from "@vanilla-extract/css";

export const flexContainer = style({
	color: "red",
	backgroundColor: "green",
});

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

export const casterName = style({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	fontSize: "16px",
	fontWeight: "bold",
	color: "white",
	textAlign: "center",
});
