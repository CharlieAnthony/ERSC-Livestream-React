"use client";

import * as styles from "./page.css";
import { SHEETS_CONFIG } from "@/lib/sheets";
import { getCell } from "@/lib/callHelpers";
import Image from "next/image";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useState, useEffect } from "react";
import React from "react";

export default function CasterOverlay() {
	const sheet = useGoogleSheet(SHEETS_CONFIG);

	const [tier, setTier] = useState<string>("");

	useEffect(() => {
		if (sheet) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setTier(getCell(sheet, "AO2"));
		}
	}, [sheet]);

	if (!sheet) {
		return;
	}

	let back = "";

	switch (tier) {
		case "Academy":
			back = "/rscast/playersoftheweek/academy.png";
			break;
		case "Prospect":
			back = "/rscast/playersoftheweek/prospect.png";
			break;
		case "Challenger":
			back = "/rscast/playersoftheweek/challenger.png";
			break;
		case "Rival":
			back = "/rscast/playersoftheweek/rival.png";
			break;
		case "Elite":
			back = "/rscast/playersoftheweek/elite.png";
			break;
		case "Master":
			back = "/rscast/playersoftheweek/master.png";
			break;
	}


	return (
		<>
			<Image src={back} alt="Back" className={styles.back} width={1920} height={1080} />
			<Image src="/rscast/Sponsors.png" alt="RSCast Logo" className={styles.sponsors} width={558} height={61} />
			<span className={styles.week}>{getCell(sheet, "AN2").toUpperCase()}</span>

			<Award
				index={0}
				firstName={getCell(sheet, "AI2")}
				firstStat={getCell(sheet, "AI5")}
				secondName={getCell(sheet, "AI3")}
				secondStat={getCell(sheet, "AI6")}
				thirdName={getCell(sheet, "AI4")}
				thirdStat={getCell(sheet, "AI7")}
				logoSrc={getCell(sheet, "AI8")}
			/>

			<Award
				index={1}
				firstName={getCell(sheet, "AJ2")}
				firstStat={getCell(sheet, "AJ5")}
				secondName={getCell(sheet, "AJ3")}
				secondStat={getCell(sheet, "AJ6")}
				thirdName={getCell(sheet, "AJ4")}
				thirdStat={getCell(sheet, "AJ7")}
				logoSrc={getCell(sheet, "AJ8")}
			/>

			<Award
				index={2}
				firstName={getCell(sheet, "AK2")}
				firstStat={getCell(sheet, "AK5")}
				secondName={getCell(sheet, "AK3")}
				secondStat={getCell(sheet, "AK6")}
				thirdName={getCell(sheet, "AK4")}
				thirdStat={getCell(sheet, "AK7")}
				logoSrc={getCell(sheet, "AK8")}
			/>

			<Award
				index={3}
				firstName={getCell(sheet, "AL2")}
				firstStat={getCell(sheet, "AL5")}
				secondName={getCell(sheet, "AL3")}
				secondStat={getCell(sheet, "AL6")}
				thirdName={getCell(sheet, "AL4")}
				thirdStat={getCell(sheet, "AL7")}
				logoSrc={getCell(sheet, "AL8")}
			/>

			<Award
				index={4}
				firstName={getCell(sheet, "AM2")}
				firstStat={getCell(sheet, "AM5")}
				secondName={getCell(sheet, "AM3")}
				secondStat={getCell(sheet, "AM6")}
				thirdName={getCell(sheet, "AM4")}
				thirdStat={getCell(sheet, "AM7")}
				logoSrc={getCell(sheet, "AM8")}
			/>
		</>
	);
}

type AwardProps = {
	index: number;
	firstName: string;
	firstStat: string;
	secondName: string;
	secondStat: string;
	thirdName: string;
	thirdStat: string;
	logoSrc: string;
};

const Award = ({ index, firstName, firstStat, secondName, secondStat, thirdName, thirdStat, logoSrc }: AwardProps) => {

	return (
		<div
			className={styles.awardContainer}
			style={
				{
					"--dynamic-left": `${25 + index * 379}px`,
				} as React.CSSProperties
			}
		>
			<span className={styles.firstName}>{firstName.toUpperCase()}</span>
			<span className={styles.firstStat}>{firstStat}</span>
			<Image src={logoSrc} alt="Logo" className={styles.logo} width={150} height={150} />
			<span className={styles.secondName}>{secondName.toUpperCase()}</span>
			<span className={styles.secondStat}>{secondStat}</span>
			<span className={styles.thirdName}>{thirdName}</span>
			<span className={styles.thirdStat}>{thirdStat}</span>
		</div>
	);
}




