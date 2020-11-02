import React from 'react'
import BlogPost from './BlogPost'
import {  Pagination } from 'react-bootstrap'

function BlogList() {
    return (
        <>
            <h1>Blogs</h1>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>

            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </>
    )
}

export default BlogList
