import React from 'react'
import { Button, Card } from 'react-bootstrap'

function BlogPost() {
    return (
        <Card className='mb-4'>
            <Card.Img top src="http://placehold.it/750x300" alt="Card image cap"/>
            <Card.Body>
                <Card.Title as='h2'>Post Title</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</Card.Text>
                <Button>Read more &rarr;</Button>
            </Card.Body>
            <Card.Footer className='text-muted'>
                Posted on January 1, 2020 by
                <Card.Link href="#">Long Longg</Card.Link>
            </Card.Footer>
        </Card>
    )
}

export default BlogPost
