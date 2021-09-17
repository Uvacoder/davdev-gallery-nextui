import { Text, Spacer } from '@nextui-org/react'
import styles, { globals } from './style'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <Spacer y={1} inline={true} />
        <Text color='white' align='center' size='4.5rem' h1>
          Davdev Gallery
        </Text>
        <Spacer y={1} />
        {children}
      </main>
      <style jsx>{styles}</style>
      <style jsx global>
        {globals}
      </style>
    </>
  )
}
