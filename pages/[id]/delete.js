import { Text, Button, Container, Spacer } from "@nextui-org/react";
import router from "next/router";

export default function Delete({ id }) {
  const handleDelete = () => {
    router.push("/");
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
      >{`¿Seguro que quiere borrar la imagen ${id}?`}</Text>
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

export const getServerSideProps = (ctx) => {
  const { query } = ctx;
  const { id } = query;

  return {
    props: {
      id: id,
    },
  };
};
