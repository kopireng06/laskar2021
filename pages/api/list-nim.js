import { listNIM } from "../../components/DataSeleksi"

export default function handler(req, res) {
  res.status(200).json(listNIM);
}
