import { Container, Row, Col, Spacer, Text, Button } from '@nextui-org/react'
import mockImages from '../mockImages'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='App de galería con Nextjs y NextUI' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <Container>
          <Row wrap='wrap'>
            {mockImages.map((image) => {
              return (
                <>
                  <Col key={image._id} span={4}>
                    <img src={image.url} alt={image.title} />
                    <Text color='white' h2>
                      <p className='title'>{image.title}</p>
                    </Text>
                    <Spacer y={0.1} />
                    <Text color='white'>
                      <p>{image.description}</p>
                    </Text>
                    <Spacer y={0.3} />
                    <Button flat color='primary' auto>
                      Ver imagen
                    </Button>
                    <Button flat color='error' auto>
                      Eliminar
                    </Button>
                    <Spacer y={2} />
                  </Col>
                </>
              )
            })}
          </Row>
        </Container>
      </section>
      <style jsx>{`
        section {
          border: 1px solid white;
        }

        img {
          width: 95%;
        }
      `}</style>
    </>
  )
}
