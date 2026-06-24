"use client";

import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useClock } from "@/hooks/useClock";
import { getCell } from "@/lib/callHelpers";
import { SHEETS_CONFIG } from "@/lib/sheets";

export default function CasterOverlay() {
	const sheet = useGoogleSheet(SHEETS_CONFIG);

	const time = useClock();

	if (!sheet) {
		return;
	}

	return (
		<>
			{/*<img src="/ModularPieces/backtop.png" />*/}

			<span>{getCell(sheet, "F6")}</span>

			{/*<img src={getCell(sheet, "G2")} />*/}

			{/*<img src={getCell(sheet, "G3")} />*/}

			<span>{getCell(sheet, "A2")}</span>

			<span>{getCell(sheet, "B2")}</span>

			<span>{time}</span>
		</>
	);
}
