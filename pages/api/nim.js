export default function handler(req, res) {
  const listNIM = {data:["1","2"]};
  res.status(200).json(listNIM);
}
