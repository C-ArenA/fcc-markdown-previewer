import HandWrittenSheet from "./HandWrittenSheet"
import MDSheet from "./MDSheet"

const Notebook = () => {
  return (
	<div className="Notebook">
		<MDSheet />
		<HandWrittenSheet />
	</div>
  )
}

export default Notebook