import { Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Restaurant from './Pages/Restaurant'

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
    </RouterRoutes>
  )
}
