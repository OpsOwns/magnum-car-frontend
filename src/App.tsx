import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import { ProtectedRoute } from './routes/protectedRoutes'
import { routes } from './routes/routes'

const App = () => {
  return <Routes>
    {routes.map(route => (
      <Route key={route.path} path={route.path} element={
        <ProtectedRoute authoized={route.authorized}>
          <route.page />
        </ProtectedRoute>
      }></Route>
    ))}
  </Routes >
}

export default App
