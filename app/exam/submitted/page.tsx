import { Suspense } from 'react'
import ExamSubmittedPage from '@/components/SubmittedPage'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExamSubmittedPage />
    </Suspense>
  )
}
