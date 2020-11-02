import React from 'react'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap'

function SearchWidget() {
    return (
        <Card className='my-4'>
            <Card.Header as='h5'>Search</Card.Header>
            <InputGroup>
                <FormControl 
                    type='text'
                    placeholder='Search for...'    
                />
                <InputGroup.Append>
                    <Button color='secondary'>Go!</Button>
                </InputGroup.Append>
            </InputGroup>
        </Card>
    )
}

export default SearchWidget
