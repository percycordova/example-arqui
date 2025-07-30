import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from '../../common/layout/AppLayout'
import HomePage from '../pages/HomePage'
import CustomerRecordPage from '@/modules/customer-record/pages/CustomerRecordPage'
import LegalRecordPage from '@/modules/legal-record/pages/LegalRecordPage'
import NotFoundPage from '../pages/NotFoundPage'
//const HomePage = lazy(() => import('@app/pages/HomePage'))
//const CustomerRecordPage = lazy(() => import('@customer/pages/CustomerRecordPage'))
//const LegalRecordPage = lazy(() => import('@legal/pages/LegalRecordPage'))
//const NotFoundPage = lazy(() => import('@app/pages/NotFoundPage'))

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
