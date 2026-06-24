import { useEffect, useState } from "react";

interface Props {
	spreadsheetId?: string;
	worksheet?: string;
	apiKey?: string;
	refreshMs?: number;
}

export function useGoogleSheet({ spreadsheetId, worksheet, apiKey, refreshMs = 3000 }: Props) {
	const [data, setData] = useState<string[][]>([]);

	useEffect(() => {

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

		const interval = setInterval(load, refreshMs);

		return () => clearInterval(interval);
	}, [spreadsheetId, worksheet, apiKey, refreshMs]);

	if (!spreadsheetId || !worksheet || !apiKey) {
		console.error("Missing Google Sheet credentials");
		return;
	}

	return data;
}
