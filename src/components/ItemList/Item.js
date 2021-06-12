const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <ul className= 'item'> 

            <li>{ `${id}`}</li>
            <li>{ `${title}`}</li>
            <li>{ `${description}`}</li>
            <li>{ `${price}`}</li>
            <li>{ `${pictureUrl}`}</li>
      
        </ul>
    )
} 

export default Item;