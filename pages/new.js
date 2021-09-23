import Link from 'next/link'
import { ChevronLeftCircle } from 'react-iconly'
import { Text, Link as UILink, Spacer } from '@nextui-org/react'
import useField from '../hooks/useField'

export default function New() {
  const titleField = useField({
    type: 'text',
    placeholder: 'Título',
    require: 'true'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(titleField.value)
  }

  return (
    <>
      <div>
        <Text h2 color='white'>
          <p>Ingresa los datos de la nueva imagen.</p>
        </Text>
        <Spacer y={0.5} />
        <Link href='/'>
          <UILink color='success'>
            <article>
              <ChevronLeftCircle set='bold' />
              <p>Ir a inicio</p>
            </article>
          </UILink>
        </Link>
        <Spacer />
        <form onSubmit={handleSubmit}>
          <label>
            <input {...titleField} />
          </label>
          <button type='submit'>Enviar</button>
        </form>
      </div>
      <style jsx>{`
        div {
          padding: 10px;
        }

        article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 92px;
        }
      `}</style>
    </>
  )
}
