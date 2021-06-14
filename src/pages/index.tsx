import Head from 'next/head'
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/safeEnvironment';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
    </div>
  )
}
