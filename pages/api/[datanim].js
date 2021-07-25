import { dataKelulusan } from "../../components/DataSeleksi"

export default function handler(req, res) {
    const { datanim } = req.query
    res.status(200).json(dataKelulusan[datanim])
}