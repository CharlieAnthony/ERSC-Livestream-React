export function getCell(values: string[][], reference: string): string {
	const match = reference.match(/^([A-Z]+)(\d+)$/);

	if (!match) return "";

	const [, colLetters, rowText] = match;

	const row = Number(rowText) - 1;

	let col = 0;

	for (const char of colLetters) {
		col = col * 26 + (char.charCodeAt(0) - 64);
	}

	col--;

	return values[row]?.[col] ?? "";
}
