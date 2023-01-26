import { useState } from 'react'
import { Button } from '../Button'
import { SelectList } from '../SelectList'
import { TextField } from '../TextField'
import './Form.css'

export const Form = (props) => {
    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const submit = (e) => {
        e.preventDefault();
        props.registeredEmployee({
            name,
            office,
            image,
            team
        })
    }
    return (
        <section className='form'>
            <form onSubmit={submit} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    mandatory={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    value={name}
                    whenChanging={value => setName(value)}
                />
                <TextField
                    mandatory={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    value={office}
                    whenChanging={value => setOffice(value)}
                />
                <TextField
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    value={image}
                    whenChanging={value => setImage(value)}
                />
                <SelectList
                    mandatory={true}
                    label='Time'
                    itens={teams}
                    value={team}
                    whenChanging={value=> setTeam(value)}
                     />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}