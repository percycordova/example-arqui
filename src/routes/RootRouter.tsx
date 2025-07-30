import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import AppLayout from '@/layouts/AppLayout'

const HomePage = lazy(() => import('@/pages/home/HomePage'))
const NotFoundPage = lazy(() => import('@pages/notFound/NotFoundPage'))
const CustomerRecordPage = lazy(() => import('@/modules/general-record/pages/CustomerRecordPage'))
const LegalRecordPage = lazy(() => import('@/modules/judicial-record/pages/LegalRecordPage'))


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer" element={<CustomerRecordPage />} />
          <Route path="/legal" element={<LegalRecordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
