
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dab’s Dynasty Selections</title>
      </Head>
      <main style={{padding:'40px', fontFamily:'sans-serif'}}>
        <h1>Dab’s Dynasty Selections</h1>
        <p>Premium cannabis genetics. Manual checkout.</p>
        <a href="/shop">Go to Shop</a>
      </main>
    </>
  )
}
