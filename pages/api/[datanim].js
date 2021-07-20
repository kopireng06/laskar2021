export default function handler(req, res) {
    const dataKelulusan = {
        "1":"lulus",
        "2":"tidak-lulus"
    }
    const { datanim } = req.query
    const coba = {
        "value":dataKelulusan[datanim]
    }

    res.status(200).json(coba)
  }