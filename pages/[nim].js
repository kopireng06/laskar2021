import Laskar2021 from '../components/Laskar2021'
import CardHasilSeleksi from '../components/CardHasilSeleksi'
import { listNIM,dataKelulusan } from '../components/DataSeleksi';

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
    const paths = listNIM.nim.map((data) => ({
        params: { nim: data },
    }))
  
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const post = {
        "value":dataKelulusan[params.nim]
    }
    return { props: { post } }
  }
 
export default HasilSeleksi