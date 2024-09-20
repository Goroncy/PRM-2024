import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HighLisghtSection() {
    return <Box>
        <Container>
            <Stack direction={'row'}>
                <img src="assets/house-of-dragons-poster.jpg"></img>
                <Stack sx={{
                    justifyContent: 'center',
                    paddingLeft: '3rem'
                }}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        A Casa do Dragao
                    </Typography>
                    <Typography variant='subtitle2'>
                        <span style={{
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'red',
                            padding: '0.2rem',
                            marginRight: '1rem'
                        }}>16</span>
                        Aventura, Fantasia, Ação</Typography>
                    <Typography variant='subtitle1' paddingTop={'8rem'} sx={{ fontWeight: 600 }}>
                        Sinopse
                    </Typography>
                    <Typography variant='body2'>
                        Baseada no livro Fogo & Sangue de George R. R. Martin, House of the Dragon é um spin-off de Game of Thrones que narra a história de conquista de terras em Westeros, mais conhecida como a Dança dos Dragões. Situada mais de 200 anos antes dos eventos da série original, em A Casa do Dragão acompanhamos a guerra civil que acontece enquanto os meio-irmãos Aegon II (Tom Glynn-Carney) e Rhaenyra (Emma D' Arcy) almejam o trono após a morte do pai Viserys I (Paddy Considine). Rhaenyra é a filha mais velha, contudo, Aegon é o filho homem de um segundo casamento, o que acaba gerando uma crescente tensão entre dois clãs Targaryen sobre quem tem o verdadeiro direito ao trono. Como descrito em Game of Thrones, no tempo em que a família Targaryen dominava os 7 reinos, a casa era conhecida por seus imponentes dragões, que assim como a família, acabaram praticamente extintos após o conflito interno.
                    </Typography>
                    <Stack direction={'row'} gap={1} paddingTop={'2rem'}>
                        <Button variant={'outlined'}>Assistir</Button>
                        <Button variant={'outlined'}>Detalhes</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    </Box >
}

export default HighLisghtSection;