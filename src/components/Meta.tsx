import Head from 'next/head'

const Meta = () => {
    const title = 'FrenBadge'
    const description = 'Fren Badge. The official Badge for Fren Finance. 100 available at 125 MNT.'
    const url = 'https://badge.fren.fi'

    return (
        <Head>
            <title>FrenBadge</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta name="og:description" property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content={url} />
            <link rel="icon" type="image/png" href="https://pbs.twimg.com/media/F2eGZgEXIAEhtBU?format=jpg&name=large" />
            <meta property="og:image" content="https://pbs.twimg.com/media/F2eGZgEXIAEhtBU?format=jpg&name=large" />
            <meta name="twitter:image" content="https://pbs.twimg.com/media/F2eGZgEXIAEhtBU?format=jpg&name=large" />
        </Head>
    )
}

export default Meta
