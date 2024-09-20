import { Container, Box, Typography, Stack } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
  { poster: 'acolita-poster.jpg' },
  { poster: 'alerta-de-risco-poster.jpg' },
  { poster: 'amigos-imaginarios-poster.jpg' },
  { poster: 'divertidamente2-poster.jpg' },
  { poster: 'furiosa-poster.jpg' },
  { poster: 'house-of-dragons-poster.jpg' },
  { poster: 'materia-escura-poster.jpg' },
  { poster: 'o-menino-e-a-garca-poster.jpg' },
  { poster: 'the-boys-poster.jpg' },
  { poster: 'um-lugar-silencioso-poster.jpg' },

];

type SectionProps = {
  title?: string;
}
function Section({
  title
}: SectionProps) {
  return (
    <Box>
      <Container>
        <Typography variant="h6" sx={{
          fontWeight: 400,
          paddingTop: '2rem'
        }}>
          {title}
        </Typography>
        <Stack direction="row" gap={0.5} sx={{
          overflowX: "hidden",
          whiteSpace: 'nowrap',
          paddingY: '1rem'
        }}>
          {movies.map(item => (<MovieCard poster={'assets/' + item.poster} />))}
        </Stack>
      </Container>
    </Box>
  )
}

export default Section;