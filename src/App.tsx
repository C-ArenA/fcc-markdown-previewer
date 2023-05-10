import { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'

function App() {

	return (
		<div className='table'>
			{/*Header*/}
			<div className='cloth'><h1>Markdown Previewer</h1></div>
			<header>
				<h1>Markdown Previewer</h1>
				<div className='contact'>
					<p>Carlos Arena</p>
					<AiFillGithub/>
				</div>
			</header>
		</div>

	)
}

export default App
