import Link from 'next/link'
import { ChevronLeftCircle } from 'react-iconly'
import {
  Text,
  Link as UILink,
  Spacer,
  Container,
  Col,
  Row
} from '@nextui-org/react'
import useField from '../hooks/useField'

export default function New() {
  const titleField = useField({
    type: 'text',
    placeholder: 'Título',
    require: 'true'
  })

  const descriptionField = useField({
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
        <Container fluid>
          <Col>
            <form onSubmit={handleSubmit}>
              <Row>
                <label>
                  <Text color='white'>Titulo</Text>
                  <input {...titleField} />
                </label>
              </Row>
              <Row>
                <label>
                  <Text color='white'>Descripción</Text>
                  <input {...descriptionField} />
                </label>
              </Row>
              <Row>
                <label>
                  <Text color='white'>Seleccionar imagen</Text>
                  <input type='file' />
                </label>
              </Row>
              <Row>
                <button type='submit'>Enviar</button>
              </Row>
            </form>
          </Col>
        </Container>
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

        label {
          display: block;
          width: 100%;
        }

        input,
        button {
          width: 100%;
        }
      `}</style>
    </>
  )
}
