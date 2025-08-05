import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import AppLayout from '@/layouts/AppLayout'

const HomePage = lazy(() => import('@/pages/home/HomePage'))
const NotFoundPage = lazy(() => import('@pages/notFound/NotFoundPage'))
const CustomerRecordPage = lazy(() => import('@/modules/portfolio-bce/general-parameters/general-file/pages/CustomerRecordPage'))


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer" element={<CustomerRecordPage />} />
          

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
