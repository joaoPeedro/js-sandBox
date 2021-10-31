// [] -> dynamic page in next.js

import {useRouter} from "next/router"

const detailPage = () => {

    // to access to a router properties
    const router = useRouter(); 

   const newsId = router.query.newsId;

    return (
        <div>
            {newsId}
        </div>
    )
}

export default detailPage
