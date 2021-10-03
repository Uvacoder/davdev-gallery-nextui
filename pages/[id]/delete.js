import { Text, Button, Container, Spacer } from "@nextui-org/react";
import axios from "axios";
import router from "next/router";

export default function Delete({ id, title }) {
  const handleDelete = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    router.replace("/");
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <>
      <Text
        h2
        color="error"
        align="center"
      >{`¿Seguro que quiere borrar la imagen "${title}"?`}</Text>
      <Spacer y={0.5} />
      <Container align="center">
        <Button.Group color="error" flat>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button onClick={handleDelete}>Eliminar</Button>
        </Button.Group>
      </Container>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;

  const { data: image } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/${id}`
  );

  return {
    props: {
      id: image._id,
      title: image.title,
    },
  };
};
