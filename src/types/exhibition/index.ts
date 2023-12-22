export interface Exhibition {
  id: number;
  title: string;
  place: string;
  imageUrl: string;
  price: number;
  date: ExhibitionDate;
}

interface ExhibitionDate {
  started: string;
  ended: string;
}
