import Link from 'next/link'
import { ChevronLeftCircle } from 'react-iconly'
import {
  Text,
  Link as UILink,
  Spacer,
  Container,
  Col,
  Row,
  Button
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
                  <Text color='white'>Seleccionar imagen</Text>
                  <input type='file' />
                </label>
              </Row>
              <Spacer y={0.4} />
              <Row>
                <label>
                  <Text color='white'>Titulo</Text>
                  <Spacer y={0.3} />
                  <input {...titleField} />
                </label>
              </Row>
              <Spacer y={0.4} />
              <Row>
                <label>
                  <Text color='white'>Descripción</Text>
                  <Spacer y={0.3} />
                  <input {...descriptionField} />
                </label>
              </Row>
              <Spacer y={0.8} />
              <Row>
                <Button flat color='success' size='large'>
                  Subir
                </Button>
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

        label,
        button {
          width: 100%;
          max-width: 600px;
        }

        input,
        button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
        }

        input[type='file']::-webkit-file-upload-button {
          border: 1px solid grey;
          background: white;
          border: none;
          padding: 8px 20px;
        }
      `}</style>
    </>
  )
}
