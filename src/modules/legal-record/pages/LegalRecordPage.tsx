"use client"

import { ClienteForm } from "../components/ClienteForm"
import { LegalTable } from "../components/LegalTable"

const LegalRecordPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mantenedor Legal</h1>
      <LegalTable />

      <ClienteForm />
    </div>
  )
}

export default LegalRecordPage
