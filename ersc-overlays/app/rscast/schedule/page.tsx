"use client";

import * as styles from "./page.css";
import { SHEETS_CONFIG } from "@/lib/sheets";
import { getCell } from "@/lib/callHelpers";
import Image from "next/image";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useState, useEffect } from "react";

enum backgrounds {
	GLACES,
	IGNIS,
	CROSSCONFERENCE
}

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

	return (
		<>
			{!isCrossConference &&
				<Image src="/rscast/schedule/Conferences.png" alt="Conference Titles" className={styles.conferences}
					   width={1920} height={1080} />}
			<Image src="/rscast/RSCastLogo.png" alt="RSCast Logo" className={styles.logo} width={200} height={53} />
			<Image src="/rscast/Sponsors.png" alt="RSCast Logo" className={styles.sponsors} width={558} height={61} />
			<Image src={getCell(sheet, "T2")} alt="Tier Logo" className={styles.tier} width={80} height={92} />
			<Image src={"https://images.rsc-community.com/EU/Logo.png"} alt="RSC Logo" className={styles.rscLogo}
				   width={206} height={206} />
			<span className={styles.title}>{getCell(sheet, "U2").toUpperCase()}</span>

			{Array.from({ length: 10 }, (_, i) => (
				<Result key={"left" + i} index={i} type={isCrossConference ? backgrounds.CROSSCONFERENCE : backgrounds.GLACES} sheet={sheet} left />
			))}

			{Array.from({ length: 10 }, (_, i) => (
				<Result key={"left" + i} index={i} type={isCrossConference ? backgrounds.CROSSCONFERENCE : backgrounds.IGNIS} sheet={sheet} />
			))}

		</>
	);
}

type ResultProps = {
	index: number;
	type: backgrounds;
	left?: boolean;
	sheet: string[][];
};

const Result: React.FC<ResultProps> = ({ index, type, left, sheet }) => {
	let back = "";

	switch (type) {
		case backgrounds.CROSSCONFERENCE:
			back = "/rscast/schedule/crossConf.png";
			break;
		case backgrounds.GLACES:
			back = "/rscast/schedule/glacies.png";
			break;
		case backgrounds.IGNIS:
			back = "/rscast/schedule/ignis.png";
			break;
	}

	const row: string = (!left ? 10 + (2 + index) : (2 + index)).toString();

	return (
		<div
			className={styles.result}
			style={
				{
					"--dynamic-top": `${100 + index * 82}px`,
					"--dynamic-left": `${!!left ? "50" : "1095"}px`,
				} as React.CSSProperties
			}
		>
			<Image src={back} alt="Result background" width={781} height={174} />
			<Image
				src="/rscast/schedule/maskLeft.png"
				alt="background colour"
				width={70}
				height={65}
				className={styles.logoBackgroundLeft}
			/>
			<div className={styles.logoLeft}>
				<Image
					src={getCell(sheet, "R" + row)}
					alt="Team Logo"
					width={120}
					height={120}
					style={{
						objectFit: "cover",
						objectPosition: "center",
						transform: "scale(1.4)",
					}}
				/>
			</div>
			<Image
				src="/rscast/schedule/maskRight.png"
				alt="background colour"
				width={70}
				height={65}
				className={styles.logoBackgroundRight}
			/>
			<div className={styles.logoRight}>
				<Image
					src={getCell(sheet, "S" + row)}
					alt="Team Logo"
					width={120}
					height={120}
					style={{
						objectFit: "cover",
						objectPosition: "center",
						transform: "scale(1.4)",
					}}
				/>
			</div>
			<span className={styles.leftTeamName}>{getCell(sheet, "O" + row).toUpperCase()}</span>
			<span className={styles.rightTeamName}>{getCell(sheet, "Q" + row).toUpperCase()}</span>
			<span className={styles.score}>{getCell(sheet, "P" + row)}</span>
		</div>
	);
};

