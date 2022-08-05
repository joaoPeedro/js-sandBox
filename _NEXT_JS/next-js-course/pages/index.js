import React from 'react';
import Link from 'next/link'

const news = () => {
    return (
        <>
            <h1>Home Page</h1>
            <ul>
                <li><Link href="news/article-one">News article one</Link></li>
            </ul>
        </>
    )
}

export default news
