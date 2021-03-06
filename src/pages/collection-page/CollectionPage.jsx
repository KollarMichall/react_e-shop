import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectCollection } from '../../redux/shop/shop.selector'
import { CollectionPageContainer, ItemsContainer, TitleContainer } from './CollectionPageStyles'

const CollectionPage = () => {
    const { collectionId } = useParams()
    const collection = useSelector(selectCollection(collectionId))
    const { title, items} = collection

    return (
        <CollectionPageContainer>
            <TitleContainer >{title}</TitleContainer>
            <ItemsContainer >
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
    )
}



export default CollectionPage
