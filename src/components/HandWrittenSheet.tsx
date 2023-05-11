import { marked } from "marked"
interface Props{
	mdCode: string
}

const HandWrittenSheet = ({mdCode}: Props) => {
	
	return (
		<div className="HandWrittenSheet">
			<div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(mdCode, {gfm: true, breaks:true})}}>
				
			</div>
		</div>
	)
}

export default HandWrittenSheet		