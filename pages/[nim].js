import Laskar2021 from '../components/Laskar2021'
import CardHasilSeleksi from '../components/CardHasilSeleksi'

const HasilSeleksi = ({post}) => {
    return (
        <div className="lg:container mx-auto">
            <div className="lg:container px-5 lg:px-10 flex flex-col lg:flex-row items-center mx-auto mt-28">
                <Laskar2021/>
                <CardHasilSeleksi post={post}/>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const listNIM = {nim:["081811633001","081811633002"]};
    const paths = listNIM.nim.map((data) => ({
        params: { nim: data },
    }))
  
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const dataKelulusan = {
        "081811633001":["Naufal Ghani Achmani","LULUS","3.8","https://drive.google.com/file/d/14HxWWhrULmV34crSQ1bn0ikHX3HLPuJs/view?usp=sharing"],
        "081811633002":["Achmani Ghani Naufal","TIDAK LULUS"]
    }
    const post = {
        "value":dataKelulusan[params.nim]
    }
    return { props: { post } }
  }
 
export default HasilSeleksi