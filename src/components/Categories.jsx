import React from 'react'


function Categories({items, onClick}) {
  const [activeItem,setActiveItem] = React.useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)  
  }

  return (
            <div className="categories">
              <ul>
                <li className={activeItem === null ? 'active':''} onClick={()=>onSelectItem(null)}>Все</li>
                {items && items.map((item, key) => (
                    <li 
                    className={activeItem === key ? 'active':''}
                    onClick={()=>onSelectItem(key)}
                     key={`${item}_${key}`}>{item}</li>
                ))}
              </ul>
            </div>
    )
}

export default Categories
