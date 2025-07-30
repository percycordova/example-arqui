import "./styles/App.css"
import { AppRouter } from "./routes/RootRouter"
import { ReactQueryProvider } from "./providers/ReactQueryProvider"

function App() {
  return (
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>

  )
}

export default App
