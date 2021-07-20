import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HasilSeleksi = ({post}) => {
    const router = useRouter()
    // const { nim } = router.query
    // useEffect(()=>{
    //     panggiApi()
    // })

    // const panggiApi = async () =>{
    //     const response = await fetch('/api/1')
    //     const data = await response.json();
    //     console.log(data);
    //     // const paths = data.data.map((data) => ({
    //     //     params: { nim: data },
    //     // }))
    //     // console.log(paths);
    // }

    return (
        <div>{post.value}</div>
    );
}

export async function getStaticPaths() {
    const response = await fetch('/api/nim')
    const listNIM = await response.json();
    console.log(listNIM);
    const paths = listNIM.data.map((data) => ({
        params: { nim: data },
    }))
  
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`/api/${params.nim}`)
    const post = await res.json()
    return { props: { post } }
  }
 
export default HasilSeleksi