import {
  Grid,
  Container,
  Row,
  Col,
  Spacer,
  Text,
  Button
} from '@nextui-org/react'
import { Camera } from 'react-iconly'
import mockImages from '../mockImages'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='App de galería con Nextjs y NextUI' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Row>
          <Col>
            <Button
              flat
              color='success'
              auto
              iconRight={<Camera fill='white' />}
            >
              Nueva imagen
            </Button>
          </Col>
        </Row>
      </Container>
      <Spacer y={1} />
      <Grid.Container gap={0.5}>
        {mockImages.map((image) => {
          return (
            <>
              <Grid key={image._id}>
                <img src={image.url} alt={image.title} />
                <Text color='white' h2>
                  <p className='title'>{image.title}</p>
                </Text>
                <Spacer y={0.1} />
                <Text color='white'>
                  <p>{image.description}</p>
                </Text>
                <Spacer y={0.3} />
                <Button flat color='secondary' auto>
                  Ver imagen
                </Button>
                <Spacer y={0.3} />
                <Button flat color='error' auto>
                  Eliminar
                </Button>
                <Spacer y={0.5} />
              </Grid>
            </>
          )
        })}
      </Grid.Container>

      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </>
  )
}
