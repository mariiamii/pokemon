import React, { useEffect, useState } from 'react'
import Card from './Card'
import PokeInfo from './PokeInfo'
import axios from 'axios'

let Main = () => {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setLoading(true)
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setPokeData(data.results);
        // getPokemon(data.results)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  // let pokeFun = async() => {
  //   setLoading(true)
  //   let res = await axios.get(url)
  //   // console.log(res.data)
  //   setNextUrl(res.data.next)
  //   setPrevUrl(res.data.previous)
  //   getPokemon(res.data.results)
  //   setLoading(false)
  //   // console.log(pokeData)
  // }

  // let getPokemon = async(res) => {
  //   res.map(async(item) => {
  //     // console.log(item.url)
  //     const result = await axios.get(item.url)
  //     // console.log(result.data)
  //     setPokeData(state => {
  //       state=[...state, result.data] // adding a new item
  //       return state
  //     })
  //   })
  // }

  // useEffect(() => { //executes whenever the app renders
  //   pokeFun();
  // }, [url])

  return (
    <div className='container'>
        <div className="left-content">
            <Card pokemon={pokeData} loading={loading}/>
            <div className="btn-group">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
        <div className="right-content">
            <PokeInfo/>
        </div>
    </div>
  )
}

export default Main
