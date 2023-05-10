function generateEditorCounter(lines:number): string {
	let count = "";
	for (let i = 1; i <= lines; i++) {
		count += i.toString() + "\n";
	}
	return count;
}

export {generateEditorCounter}