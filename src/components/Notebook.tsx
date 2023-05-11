import HandWrittenSheet from "./HandWrittenSheet"
import MDSheet from "./MDSheet"
import { useState } from "react"

const defaultMarkdownText =
	`# Hola Mundo
Yo me llamo Carlos Arena
Y ustedes?
## Lo que me gusta:
* Comer
* Jugar
* Dormir

Puedes ver el repositorio de este proyecto dsds [aquísitos](https://github.com/C-ArenA/fcc-markdown-previewer) yeah

### These are some of my best code lines:

\`\`\`javascript
let a = "Hola Mundo";
console.log(a)
\`\`\`

I also write Python like this \`a = hola mundo\`. I know, I'm a master of all 😎 jajaj.

## I'm also a very creative person, and I like to create my own quotes:

> The flowers are ours
> I hate these hours


I was inspired by my favorite singer, the one and only: **Johan Sebastian Mastropiero**

![Mastropiero](./mastro.jpg)
`;

const Notebook = () => {
	const [mdCode, setMdCode] = useState(defaultMarkdownText);

	return (
		<div className="Notebook">
			<MDSheet code={mdCode} setCode={setMdCode}/>
			<HandWrittenSheet mdCode={mdCode}/>
		</div>
	)
}

export default Notebook