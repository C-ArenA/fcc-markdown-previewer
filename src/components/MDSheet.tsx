import { IoLogoMarkdown } from "react-icons/io";
import { generateEditorCounter } from "../utils/editor";
import { useEffect, useState, useRef } from "react";

interface Props {
	code: string,
	setCode: React.Dispatch<React.SetStateAction<string>>
}

const MDSheet = ({ code, setCode}: Props) => {

	const [scrollTopDistance, setScrollTopDistance] = useState(0);
	const codeCounter = useRef<HTMLTextAreaElement>(null);

	// const handleCursorChange = (text = "Hola a todos\nsoy yo", cursorPosition = 5): void => {
	// 	// Searching line breaks and saving its positions in an ordered array
	// 	const breakIndexes = [];
	// 	for (let i = 0; i < text.length; i++) {
	// 		const char = text[i];
	// 		if (char == "\n") {
	// 			breakIndexes.push(i)
	// 		}
	// 	}
	// 	// Comparing line breaks positions with the cursorPosition
	// 	let myLine = 0; // 0 equals no line
	// 	for (let index = 0; index < breakIndexes.length && myLine == 0; index++) {
	// 		// Si el cursor sobrepasa al último salto de línea se asume linea final:
	// 		if (cursorPosition > breakIndexes[breakIndexes.length - 1]) {
	// 			myLine = breakIndexes.length + 1;
	// 		}
	// 		// Si el cursorPosition es menor a la posición de este salto de línea 
	// 		// (Habiendo sido mayor al anterior) su fila es la de este salto de línea:
	// 		if (cursorPosition <= breakIndexes[index]) {
	// 			myLine = index + 1;
	// 		}
	// 	}
	// 	setLine(myLine);
	// }

	useEffect(() => {
		if (codeCounter.current != null) {
			codeCounter.current.scrollTop = scrollTopDistance;
		}
	}, [scrollTopDistance])
	

	return (
		<div className="MDSheet">
			<header className="editor-header">
				<IoLogoMarkdown />
				<h1>Markdown</h1>
			</header>
			<div className="editor-wrapper">
				<textarea ref={codeCounter} name="editor-counter" id="editor-counter" cols={3} rows={6} value={generateEditorCounter(code.split("\n").length)} disabled></textarea>
				<textarea name="editor" id="editor" cols={30} rows={6}
					value={code} onChange={(e) => {
						setCode(e.target.value);
						// handleCursorChange(e.target.value, e.target.selectionStart)

					}}
					
					onScroll={e => {
						setScrollTopDistance(e.currentTarget.scrollTop);
					}}
				>

				</textarea>
			</div>
		</div>
	)
}

export default MDSheet