import React, { useEffect, useState } from 'react'
import MenuItem from '../menu-item/MenuItem'
import './directory.styles.scss'

const data =  [ {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'

},
{
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'

},
{
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'

},
{
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large'

},
{
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large'

},]

const Directory = () => {
    const [sections, setSections] = useState([])

    useEffect(() => {
        setSections(data)
    }, [])


    return (
        <div className='directory-menu'>
            {sections.map(({ id, title, imageUrl, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
        </div>
    )
}

export default Directory
