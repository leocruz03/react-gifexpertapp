import React, { useState } from 'react'

import AddCatgory from './components/AddCatgory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    /* const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; */

    const [ categories, setCategories ] = useState([]);

    return (
        <>
            <div>
                <h2>GifExpertApp</h2>
                <AddCatgory setCategories={ setCategories } />
                <hr />

                

                <ul>
                    {
                        categories.map(category => {
                            return (
                                <GifGrid 
                                    key={ category }    
                                    category={ category }/>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default GifExpertApp