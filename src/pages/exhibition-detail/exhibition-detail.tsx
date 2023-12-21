import { useParams } from 'react-router-dom';

export default function ExhibitionDetail() {
  const { id } = useParams();

  return <div>ExhibitionDetail:{id}</div>;
}
