import React from 'react'
import { Box, Button } from '../UI'
import { extratoLista } from "../../info"

export default function Extrato() {
  return (
    <Box>
        {extratoLista.updates.map(({ id, type, from, value, date }) => {
            return (
                <div key={id}>
                    <div>{type}</div>
                    <div>{from}</div>
                </div>
            )
        })}
        <Button>Ver Mais</Button>
    </Box>
  )
}
