import { useState } from 'react'
import PageAutorize from './components/page_autorize'
import PageMap from './components/page_map'
import PageProfile from "./components/page_profile"
import Btn from './components/btn/btn'
import './components/toolbar/toolbar.css'
function App() {
  const pageList = [<PageAutorize />, <PageMap />, <PageProfile />]
  let [page, setPage] = useState(0)
  let list = [
    {
      id: 0,
      text: 'выход'
    },
    {
      id: 1,
      text: 'карта'
    },
    {
      id: 2,
      text: 'профиль'
    }
  ]
  const toolbar = document.getElementById('toolbar')
  function callMenu(i) {
    if (i == 1) {
      toolbar.style.display = 'block'
    }
    else if(i==2){
      toolbar.style.display = 'none'
    }
  }
  function chagePage(p) {
    setPage(p)
    toolbar.style.display = 'none'
  }

  return (
    <div className="App">
      <Btn text='меню' id='menu' func={() => callMenu(1)} />
      <div id='toolbar' className="toolbar_main">
        {list.map((obj, i) =>
          <div className="note" onClick={() => chagePage(obj.id)} >{obj.text}</div>
        )}
        <Btn text='закрыть' id='closeBar' func={() => callMenu(2)} color='red' />
      </div>
      {pageList[page]}
    </div>
  );
}


export default App;
