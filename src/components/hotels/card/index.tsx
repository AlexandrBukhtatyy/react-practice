import Content from './content';

type Props = {
  title?: string;
  images?: string[];
  location?: {
    city: string;
    subway: string;
    adress: string;
  };
  advantages?: string[];
  phoneNumber?: string;
  site?: string;
  feedbacksCount?: number;
  rating?: number;
  withBookingButton?: boolean;
};

//вынести в моки
const HotelsCard = (props: Props) => {
  return <Content {...props} />;
};

export default HotelsCard;
