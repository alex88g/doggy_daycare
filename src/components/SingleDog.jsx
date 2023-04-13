import React, {useState, useEffect} from "react"
import { Link, useParams } from "react-router-dom"
import './SingleDog.css'



export default function SingleDog() {
  const [dog, setDog] = useState([])
  const { index }  = useParams()
  
  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch("https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126")
        const data = await res.json()
        setDog(data.record)
        console.log(data.record)
      } catch (error) {
        console.error(error)
      }
      
    }
    //console.log(name)
    fetchSingleDogData()
  }, [])

  if(dog.length >0) {

    return (
      
      <section>
        <div>
        <article>
        <img src={dog[index].img} />
        <h1 >{dog[index].name}</h1>
        <ul >
        <li >{dog[index].age} Years Old {dog[index].sex} {dog[index].breed}</li>
        <li >Chipnumber: {dog[index].chipNumber}</li>
        <h1 >Owner</h1>
        <li > {dog[index].owner.name} - {dog[index].owner.lastName}</li>
        <li >Telefon Nummer: {dog[index].owner.phoneNumber}</li>
        </ul>
        <h5>
        <Link
                  to="/Home" className="inline-block ">
                  &larr; Back
                </Link>
        </h5>
        </article>
        </div>
        </section>
        
     
  
  
    ) 
  }


  return (
    <div>
      <h2>Loading...</h2>
      
    </div>

  ) 
}