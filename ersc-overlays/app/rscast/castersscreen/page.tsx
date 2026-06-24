"use client";

import * as styles from "./page.css";
import Image from "next/image";
import { SHEETS_CONFIG } from "@/lib/sheets";
import { getCell } from "@/lib/callHelpers";
import { useClock } from "@/hooks/useClock";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";

export default function CasterOverlay() {
	const sheet = useGoogleSheet(SHEETS_CONFIG);

	const time = useClock();

	if (!sheet) {
		return;
	}

	return (
		<>
			{/*<img src="/ModularPieces/backtop.png" />*/}

			<CastersBanner name={getCell(sheet, "A2")} className={styles.caster1} />
			<CastersBanner name={getCell(sheet, "A3")} className={styles.caster2} />
			<CastersBanner name={getCell(sheet, "A4")} className={styles.caster3} />

			<span>{getCell(sheet, "F6")}</span>
			<span>{getCell(sheet, "F6")}</span>

			{/*<img src={getCell(sheet, "G2")} />*/}

			{/*<img src={getCell(sheet, "G3")} />*/}

			<span>{getCell(sheet, "A2")}</span>

			<span>{getCell(sheet, "B2")}</span>

			<span>{time}</span>
		</>
	);
}

const CastersBanner = ({name, className}: {name: string, className: string}) => (
	<div className={className}>
		<span className={styles.casterName}>{name}</span>
		<Image src="/rscast/castersscreen/casters-banner.png" alt="Casters banner" width={301} height={56} />
	</div>
)
