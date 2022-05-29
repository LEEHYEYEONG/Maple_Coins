
function BasketItem({choice, title, coins}) {
  if (choice) {
    return (
      <div>
        <span>{title}</span>
        <span>{coins}</span>
      </div>
    )
  }
  else {
    return null;
  } 
}

export default BasketItem;