"use client";

import Marquee from "react-fast-marquee";

import * as styles from "./page.css";
import Image from "next/image";
import { SHEETS_CONFIG } from "@/lib/sheets";
import { getCell } from "@/lib/callHelpers";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";

const FRAME_WIDTH = 568;
const FRAME_HEIGHT = 810;

export default function CasterOverlay() {
	const sheet = useGoogleSheet(SHEETS_CONFIG);

	if (!sheet) {
		return;
	}

	return (
		<>

			<CastersBanner name={getCell(sheet, "A2")} className={styles.caster1} />
			<CastersBanner name={getCell(sheet, "A3")} className={styles.caster2} />
			<CastersBanner name={getCell(sheet, "A4")} className={styles.caster3} />

			<Caster1Frame />
			<Caster2Frame />
			<Caster3Frame />

			<TitleBar title={getCell(sheet, "G2")} tickerText={getCell(sheet, "G3")} />

		</>
	);
}

const TitleBar = ({ title, tickerText }: { title: string, tickerText: string }) => {
	return (
		<div className={styles.titleBarContainer}>
			<Image src="/rscast/castersscreen/titlebar-bottom.png" alt="Title bar bottom" className={styles.titleBarBottom} width={1926} height={327} />
			<Image src="/rscast/castersscreen/titlebar-top.png" alt="Title bar top" className={styles.titleBarTop} width={1926} height={327} />
			<span className={styles.titleBarTitle}>{title.toUpperCase()}</span>
			<div className={styles.scrollingTextWrapper}>
				<Marquee className={styles.scrollingText} direction="left">
					{tickerText.toUpperCase()}
				</Marquee>
			</div>
		</div>
	)
}

const CastersBanner = ({name, className}: {name: string, className: string}) => (
	<div className={className}>
		<span className={styles.casterName}>{name.toUpperCase()}</span>
		<Image src="/rscast/castersscreen/casters-banner.png" alt="Casters banner" width={301} height={56} />
	</div>
)

const Caster1Frame = () => (
	<Image src="/rscast/castersscreen/caster1-frame.png" alt="Caster1Frame" className={styles.caster1Frame} width={FRAME_WIDTH} height={FRAME_HEIGHT} />
)

const Caster2Frame = () => (
	<Image src="/rscast/castersscreen/caster2-frame.png" alt="Caster2Frame" className={styles.caster2Frame} width={FRAME_WIDTH} height={FRAME_HEIGHT} />
)

const Caster3Frame = () => (
	<Image src="/rscast/castersscreen/caster3-frame.png" alt="Caster3Frame" className={styles.caster3Frame} width={FRAME_WIDTH} height={FRAME_HEIGHT} />
)
