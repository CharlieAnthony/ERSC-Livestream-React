"use client";

import * as styles from "./page.css";
import { SHEETS_CONFIG } from "@/lib/sheets";
import { getCell } from "@/lib/callHelpers";
import Image from "next/image";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useState, useEffect } from "react";
import { goalDiff, goalsAgainst, winLoss, winPercent } from "./page.css";
import React from "react";

export default function CasterOverlay() {
	const sheet = useGoogleSheet(SHEETS_CONFIG);
	const [isCrossConference, setIsCrossConference] = useState<boolean>(false);

	useEffect(() => {
		if (sheet) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsCrossConference(getCell(sheet, "T3") == "TRUE");
		}
	}, [sheet]);

	if (!sheet) {
		return;
	}

	const isGlacies = getCell(sheet, "AH2") == "Glacies";

	return (
		<>
			{isGlacies ? (
				<Image
					src="/rscast/standings/glacies.png"
					alt="glacies"
					className={styles.back}
					width={1920}
					height={1080}
				/>
			) : (
				<Image
					src="/rscast/standings/ignis.png"
					alt="ignis"
					className={styles.back}
					width={1920}
					height={1080}
				/>
			)}
			<Image
				src="/rscast/standings/back.png"
				alt="Static bits"
				className={styles.back}
				width={1920}
				height={1080}
			/>
			<Image src={getCell(sheet, "AF2")} alt="Conf logo" className={styles.confLogo} width={256} height={256} />
			<Image src="/rscast/Sponsors.png" alt="RSCast Logo" className={styles.sponsors} width={558} height={61} />
			<span className={styles.title}>{getCell(sheet, "AG2").toUpperCase()}</span>

			{Array.from({ length: 10 }, (_, i) => (
				<Row sheet={sheet} index={i} key={"res" + i.toString()} />
			))}
		</>
	);
}

type RowProps = {
	sheet: string[][];
	index: number;
}

const Row = ({ sheet, index }: RowProps) => {

	const row = (index + 2).toString();

	const pos = getCell(sheet, "AD"+row);

	let posSrc = ""
	if(pos == "up") {
		posSrc = "/rscast/standings/up.png";
	}else if (pos == "below") {
		posSrc = "/rscast/standings/down.png";
	}else{
		posSrc = "/rscast/standings/same.png";
	}

	const lastSix = getCell(sheet, "AC"+row);

	return (
		<div
			className={styles.rowContainer}
			style={
				{
					"--dynamic-top": `${183 + index * 75}px`,
				} as React.CSSProperties
			}
		>
			<Image
				src="/rscast/standings/fixtureBack.png"
				width={1892}
				height={150}
				alt={"fixture back"}
				className={styles.rowBack}
			/>
			<Image
				src="/rscast/standings/fixtureTop.png"
				width={1892}
				height={150}
				alt={"fixture back"}
				className={styles.rowTop}
			/>
			<span className={styles.posText}>{index + 1}</span>
			<div className={styles.logoContainer}>
				<Image src={getCell(sheet, "AE" + row)} alt="Team logo" width={120} height={120} />
			</div>
			<span className={styles.teamName}>{getCell(sheet, "V" + row).toUpperCase()}</span>
			<span className={styles.played}>{getCell(sheet, "W" + row)}</span>
			<span className={styles.winPercent}>{getCell(sheet, "X" + row)}%</span>
			<span className={styles.goalsFor}>{getCell(sheet, "Y" + row)}</span>
			<span className={styles.goalsAgainst}>{getCell(sheet, "Z" + row)}</span>
			<span className={styles.goalDiff}>{getCell(sheet, "AA" + row)}</span>
			<span className={styles.winLoss}>{getCell(sheet, "AB" + row)}</span>
			<LastSix lastSix={lastSix} />
			<Image src={posSrc} width={1892} height={150} alt="fixture back" className={styles.rowBack} />
		</div>
	);
}

type LastSixProps = {
	lastSix: string;
};

const imageMap = {
	W: {
		left: "/rscast/standings/leftWin.png",
		right: "/rscast/standings/rightWin.png",
		alt: "Win",
	},
	D: {
		left: "/rscast/standings/leftDraw.png",
		right: "/rscast/standings/rightDraw.png",
		alt: "Draw",
	},
	L: {
		left: "/rscast/standings/leftLoss.png",
		right: "/rscast/standings/rightLoss.png",
		alt: "Loss",
	},
} as const;

const classNames = [
	styles.lastSixA,
	styles.lastSixA,
	styles.lastSixB,
	styles.lastSixB,
	styles.lastSixC,
	styles.lastSixC,
];

const LastSix = ({ lastSix }: LastSixProps) => {
	return (
		<>
			{lastSix.split("").map((result, index) => {
				const images = imageMap[result as keyof typeof imageMap];

				if (!images) {
					return null;
				}

				const left = index % 2 == 0

				return (
					<React.Fragment key={index}>
						{left ? (
							<Image
								src={images.left}
								alt={`${images.alt} left`}
								width={17}
								height={55}
								className={classNames[index]}
							/>
						) : (
							<Image
								src={images.right}
								alt={`${images.alt} right`}
								width={17}
								height={55}
								className={classNames[index]}
							/>
						)}
					</React.Fragment>
				);
			})}
		</>
	);
};


