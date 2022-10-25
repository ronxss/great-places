import React, {useEffect, useState} from 'react'
import {getAttractions} from '../../services/attractions'
import TextField from '@mui/material/TextField'
import { Button, Box } from '@mui/material'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Page } from '../../components'
import { useForm, Controller } from 'react-hook-form'

const Home = () => {
    const defaultValues = {
        search: ''
    }
    const [attractions, setAttractions] = useState([])


    const {handleSubmit, control} = useForm({ defaultValues });
    const onSubmit = (data: any) => {getAttractions()
        .then((response) => {
            setAttractions(response.data)
        });
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Nome',
          width: 150,
          editable: false,
        },
        {
          field: 'description',
          headerName: 'Descrição',
          width: 150,
          editable: false,
        },
        {
          field: 'localization',
          headerName: 'Localização',
          width: 110,
          editable: false,
        },
        {
            field: 'state',
            headerName: 'Estado',
            width: 160,
            editable: false
          },
        {
          field: 'city',
          headerName: 'Cidade',
          width: 160,
          editable: false
        },
      ]; 

    return(
        <Page>
        <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifySelf: 'center',
                width: '50%',
                margin: '0 auto',
                marginBottom: '2',
                '& .MuiTextField-root': { m: 1 },
                '& .MuiButton-root': { mb: 2, ml: 2 } }}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
           <Controller
                name= "search"
                control= {control}
                render= {({ field }) => <TextField label="Procurar" variant="outlined" { ... field }/>}
            />
            <Button type="submit" sx={{margin: 2}} variant="contained" id="searchBtn">Buscar</Button>
        </form>
        </Box>
        {
            attractions.length > 0 && (
                <DataGrid autoHeight
                rows={attractions}
                columns={columns}
                pageSize={10}                
                disableSelectionOnClick
                />
            )
        }
        
       </Page> 
    )
}

export default Home