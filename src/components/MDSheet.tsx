import { IoLogoMarkdown } from "react-icons/io";
import { generateEditorCounter } from "../utils/editor";
const MDSheet = () => {

	return (
		<div className="MDSheet">
			<header className="editor-header">
				<IoLogoMarkdown />
				<h1>Markdown</h1>
			</header>
			<div className="editor-wrapper">
				<textarea name="editor-counter" id="editor-counter" cols={3} rows={6} value={generateEditorCounter(14)} disabled></textarea>
				<textarea name="editor" id="editor" cols={30} rows={6}>

				</textarea>
			</div>
		</div>
	)
}

export default MDSheet