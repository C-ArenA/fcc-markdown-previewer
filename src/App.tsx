import Cloth from './components/Cloth'
import Header from './components/Header'
import Notebook from './components/Notebook'

function App() {

	return (
		<div className='table'>
			{/*Header*/}
			<Cloth vw={0.3} ratio={1.6}/>
			<Header />			
			<Notebook />
		</div>

	)
}

export default App
