import React from 'react'
import {Button, TextField, Box} from '@mui/material'
import { Page } from '../../components'
import { useForm, Controller } from 'react-hook-form'
import { postAttractions } from '../../services/attractions'

const Register = () => {
    const defaultValues = {
        name: '',
        description: '',
        localization: '',
        state: '',
        city: ''
    }

    const {handleSubmit, control} = useForm({ defaultValues });
    const onSubmit = (data: any) => {postAttractions(data)
    }

    return(
        <Page>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'center',
                width: '50%',
                margin: '0 auto',
                marginBottom: '2',
                '& .MuiTextField-root': { m: 1 },
                '& .MuiButton-root': { mb: 2, ml: 2 } }}>
            <Controller
                name= "name"
                control= {control}
                render= {({ field }) => <TextField label="Name" variant="outlined" { ... field }/>}
            />
            <Controller
                name= "description"
                control= {control}
                render= {({ field }) => <TextField label="Description" variant="outlined" { ... field }/>}
            />
            <Controller
                name= "localization"
                control= {control}
                render= {({ field }) => <TextField label="Localization" variant="outlined" { ... field }/>}
            />    
            <Controller
                name= "state"
                control= {control}
                render= {({ field }) => <TextField label="State" variant="outlined" { ... field }/>}
            />    
            <Controller
                name= "city"
                control= {control}
                render= {({ field }) => <TextField label="City" variant="outlined" { ... field }/>}
            />             
            <Button type="submit" sx={{margin: 2, justifySelf: 'center'}} variant="contained" id="searchBtn">Salvar</Button>
            </Box>
        </form>
       </Page> 
    )
}

export default Register