import Link from "next/link";
import router from "next/router";
import { ChevronLeftCircle } from "react-iconly";
import {
  Text,
  Link as UILink,
  Spacer,
  Container,
  Col,
  Row,
  Button,
  Input,
} from "@nextui-org/react";
import useField from "../hooks/useField";
import axios from "axios";

export default function New() {
  const titleField = useField({
    type: "text",
    placeholder: "Título",
    require: "true",
  });

  const descriptionField = useField({
    type: "text",
    placeholder: "Título",
    require: "true",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("title", titleField.value);
      fd.append("description", descriptionField.value);
      fd.append("uploadImage", e.target[0].files[0]);
      await axios.post(process.env.NEXT_PUBLIC_API_URL_LOCAL, fd);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Text h2 color="white">
          <p>Ingresa los datos de la nueva imagen.</p>
        </Text>
        <Spacer y={0.5} />
        <Link href="/">
          <UILink color="success">
            <article>
              <ChevronLeftCircle set="bold" />
              <p>Ir a inicio</p>
            </article>
          </UILink>
        </Link>
        <Spacer />
        <Container>
          <Col>
            <form onSubmit={handleSubmit}>
              <Row>
                <label>
                  <Text color="white">Seleccionar imagen</Text>
                  <input type="file" />
                </label>
              </Row>
              <Spacer y={1.4} />
              <Row>
                <Input
                  labelPlaceholder="Título"
                  status="primary"
                  size="medium"
                  width="100%"
                  {...titleField}
                />
              </Row>
              <Spacer y={2} />
              <Row>
                <Input
                  labelPlaceholder="Descripción"
                  status="primary"
                  width="100%"
                  {...descriptionField}
                />
              </Row>
              <Spacer y={0.8} />
              <Row>
                <Button flat color="success" size="large" type="submit">
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

        input {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          color: white;
        }

        input[type="file"]::-webkit-file-upload-button {
          border: 1px solid grey;
          background: #1b314c;
          font-size: 1rem;
          color: #18469b;
          border: none;
          padding: 8px 20px;
        }
      `}</style>
    </>
  );
}
