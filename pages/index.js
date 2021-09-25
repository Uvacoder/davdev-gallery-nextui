import Head from 'next/head'
import router from 'next/router'
import {
  Container,
  Row,
  Col,
  Grid,
  Spacer,
  Text,
  Button
} from '@nextui-org/react'
import { Camera } from 'react-iconly'
import mockImages from '../mockImages'

export default function Home() {
  const handleSendToNew = (e) => {
    router.push('/new')
  }

  return (
    <>
      <Head>
        <meta name='description' content='App de galería con Nextjs y NextUI' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Button
                flat
                color='success'
                auto
                iconRight={<Camera fill='white' />}
                onClick={handleSendToNew}
              >
                Nueva imagen
              </Button>
            </Col>
          </Row>
        </Container>
        <Spacer y={0.5} />
        <Grid.Container gap={0.1}>
          {mockImages.map((image) => {
            return (
              <Grid key={image._id} xs={12} sm={6} md={3}>
                <div align='center'>
                  <img src={image.url} alt={image.title} />
                  <Text color='white' h2 align='center'>
                    {image.title}
                  </Text>
                  <Spacer y={0.1} />
                  <Text color='white' align='center'>
                    {image.description}
                  </Text>
                  <Spacer y={0.3} />
                  <Button flat color='secondary'>
                    Ver imagen
                  </Button>
                  <Spacer y={0.5} />
                  <Button flat color='error' size='medium'>
                    Eliminar
                  </Button>
                  <Spacer y={0.1} />
                </div>
              </Grid>
            )
          })}
        </Grid.Container>
      </div>

      <style jsx>{`
        div {
          padding: 10px;
        }

        img {
          width: 100%;
        }
      `}</style>
    </>
  )
}
