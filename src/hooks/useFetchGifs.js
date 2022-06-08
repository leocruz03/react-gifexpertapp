import { useState, useEffect } from 'react'

import { getGifs } from './../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [ state, setState ] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs( category )
            .then(images => {
                setTimeout(() => {
                    setState({
                        data: images,
                        loading: false,
                    })
                }, 3000)
            }
        )
    }, [category])

    /* setTimeout(() =>{
        setState({
            data: ['t1', 't2', 't3'],
            loading: false,
        })
    }, 3000) */

    return state
}