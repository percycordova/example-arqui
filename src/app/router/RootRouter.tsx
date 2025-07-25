import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import AppLayout from '../../common/layout/AppLayout'
const HomePage = lazy(() => import('@app/pages/HomePage'))
const CustomerRecordPage = lazy(() => import('@customer/pages/CustomerRecordPage'))
const LegalRecordPage = lazy(() => import('@legal/pages/LegalRecordPage'))
const NotFoundPage = lazy(() => import('@app/pages/NotFoundPage'))

export const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div className="p-6">Cargando...</div>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/customer" element={<CustomerRecordPage />} />
            <Route path="/legal" element={<LegalRecordPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}
