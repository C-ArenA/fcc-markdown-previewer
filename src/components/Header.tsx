import { AiFillGithub } from 'react-icons/ai'
const Header = () => {
	return (
		<header className='Header'>
			<h1>Markdown Previewer</h1>
			<a href="https://github.com/C-ArenA/fcc-markdown-previewer" target='_blank' className='contact'>
				<p>By Carlos Arena</p>
				<AiFillGithub />
			</a>
		</header>
	)
}

export default Header