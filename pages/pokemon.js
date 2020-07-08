import Head from 'next/head'
import axios from 'axios';
import  {useState, useEffect} from 'react';

export default function Pokemon({pokemon}) {
    const [state, setState] = useState({
        name: pokemon.name
    })

    //useEffect(() => {
    //    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    //    .then((res) => {
    //        console.log(res)
    //        setState({
    //            name: res.data.name
    //        })
    //    })
    //}, [])

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Pokemon</h1>
      <h2> {state.name} </h2>
    </div>
  )
}

// export async function getStaticProps() {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
//     const pokemon = await res.json();
//     axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
//        .then((res) => {
//            console.log(res)
//            setState({
//                name: res.data.name
//            })
//        })
    
//     return {
//         props: {
//             pokemon,
//         },
//     };
// }

export const function getServerSideProps() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const pokemon = await res.json();

    return { props: {pokemon} }
}
