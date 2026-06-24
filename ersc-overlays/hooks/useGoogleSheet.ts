import { useEffect, useState } from "react";
import { schedulePrefetchTask } from "next/dist/client/components/segment-cache/scheduler";

interface Props {
	spreadsheetId?: string;
	worksheet?: string;
	apiKey?: string;
	refreshMs?: number;
}

export function useGoogleSheet({ spreadsheetId, worksheet, apiKey, refreshMs = 3000 }: Props) {
	const [data, setData] = useState<string[][]>([]);

	if (!spreadsheetId || !worksheet || !apiKey) {
		console.error("Missing Google Sheet credentials");
		return;
	}

	useEffect(() => {
		let interval: NodeJS.Timeout;

		async function load() {
			try {
				const url =
					`https://sheets.googleapis.com/v4/spreadsheets/` +
					`${spreadsheetId}/values/${worksheet}?key=${apiKey}`;

				const response = await fetch(url);
				const json = await response.json();

				setData(json.values ?? []);
			} catch (err) {
				console.error(err);
			}
		}

		load();

		interval = setInterval(load, refreshMs);

		return () => clearInterval(interval);
	}, [spreadsheetId, worksheet, apiKey, refreshMs]);

	return data;
}
