import React, {useEffect, useState} from 'react'
import {getAttractions} from '../../services/attractions'

const Home = () => {
    const [attractions, setAttractions] = useState()

    useEffect(() => {
        getAttractions()
        .then((response) => {
            setAttractions(response.data)
        });
    }, [])
    return <div> {JSON.stringify(attractions)}</div>
}

export default Home