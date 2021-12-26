import {useState} from 'react'
import menu from './menu';
import Categories from './Categories';
import MenuList from './MenuList'

const allCategories = ["all", ...new Set(menu.map((e) => e.category))];

function App() {
  const [categories,setCategories] = useState(allCategories)
  const [menuItems,setMenuItems] = useState(menu)

  const filterItem = (category) =>{
    if(category==='all'){
      setMenuItems(menu)
      return;
    }
    const newItems = menu.filter(e=>e.category===category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem}/>
        <MenuList items={menuItems} />
      </section>
    </main>
  );
}

export default App;
