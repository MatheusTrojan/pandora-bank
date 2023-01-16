import React from 'react'
import styled from 'styled-components'
import { Box, Button } from '../UI'
import { extratoLista } from "../../info"
import Itens from '../Itens'

const Title = styled.h2`
    margin-bottom: 1rem;
`

export default function Extrato() {
  return (
    <Box>
        <Title>Extrato</Title>
        {extratoLista.updates.map(({ id, type, from, value, date }) => {
            return (               
                <Itens 
                    key={id} 
                    type={type} 
                    from={from} 
                    value={value} 
                    date={date}
                />
            )
        })}
        <Button>Ver Mais</Button>
    </Box>
  )
}
