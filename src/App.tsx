import './App.css'
import { TypingImage } from './assets/images'
import { BannerComponent, MenuComponent, CoreWordPressCard, DifferentComponent, FooterComponent } from './components'

function App() {

  return (
    <div>
      <MenuComponent />
      <BannerComponent />
      <div style={{ maxWidth: 1200 }}>
        <CoreWordPressCard />
      </div>
      <img src={TypingImage} width="100%" className="typing-img" />
      <DifferentComponent />
      <FooterComponent />
    </div>
  )
}

export default App
