import Container from 'react-bootstrap/Container'

export default function Welcome({theme}) { 
return ( 
	<> 
	<Container fluid className={theme}> 
		<Container className='py-5 text-center'> 
			<h1>Welcome to Epibooks.com !</h1> 
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum animi, perferendis enim iusto iste? Et modi eos eum necessitatibus hic temporibus, a adipisci accusantium, illum, omnis corporis nobis dignissimos!</p>
		</Container> 
	</Container> 
	</> 
); 
}
