import React from 'react'


// class Categories extends React.Component {
  
//   state ={
//     activeItem:3,
//   };

// onSelectItem = (index) => {
//   this.setState({
//     activeItem: index,
//   });
// };

//     render(){
//       const { items, onClick} = this.props;
//       return(
//       <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((item, index) => (
//             <li 
//             className={this.state.activeItem === index ? 'active':''}
//             onClick={()=>this.onSelectItem(index)}
//             key={`${item}_${index}`}>{item}</li>
//         ))}
//       </ul>
//     </div>
//     )
      
//     }

// }



function Categories({items, onClick}) {
  const [activeItem,setActiveItem] = React.useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)  
  }

  return (
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                {items.map((item, key) => (
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
