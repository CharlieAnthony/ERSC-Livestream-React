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

	const [isTopTen, setIsTopTen] = useState<boolean>(false);

	useEffect(() => {
		if (sheet) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsTopTen(getCell(sheet, "BC3") == "Top 10");
		}
	}, [sheet]);

	if (!sheet) {
		return;
	}



	return (
		<>
			<Image
				src="/rscast/standings/franchise.png"
				alt="glacies"
				className={styles.back}
				width={1920}
				height={1080}
			/>
			<Image
				src="/rscast/standings/back.png"
				alt="Static bits"
				className={styles.back}
				width={1920}
				height={1080}
			/>
			<Image src="/rscast/Sponsors.png" alt="RSCast Logo" className={styles.sponsors} width={558} height={61} />
			<span className={styles.title}>{getCell(sheet, "AG2").toUpperCase()}</span>

			{Array.from({ length: 10 }, (_, i) => (
				<Row sheet={sheet} index={i} key={"res" + i.toString()} isTopTen={isTopTen} />
			))}
		</>
	);
}

type RowProps = {
	sheet: string[][];
	index: number;
	isTopTen: boolean;
}

const Row = ({ sheet, index, isTopTen }: RowProps) => {

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
			<span className={styles.posText}>{index + 1 + (isTopTen ? 0 : 10)}</span>
			<div className={styles.logoContainer}>
				<Image src={getCell(sheet, "AR" + row)} alt="Team logo" width={120} height={120} />
			</div>
			<span className={styles.teamName}>{getCell(sheet, "AQ" + row).toUpperCase()}</span>
			<span className={styles.played}>{getCell(sheet, "AS" + row)}</span>
			<span className={styles.winPercent}>{getCell(sheet, "AT" + row)}%</span>
			<span className={styles.goalsFor}>{getCell(sheet, "AU" + row)}</span>
			<span className={styles.goalsAgainst}>{getCell(sheet, "AV" + row)}</span>
			<span className={styles.goalDiff}>{getCell(sheet, "AW" + row)}</span>
			<span className={styles.winLoss}>{getCell(sheet, "AX" + row)}</span>
			{/*<Image src={posSrc} width={1892} height={150} alt="fixture back" className={styles.rowBack} />*/}
		</div>
	);
}



