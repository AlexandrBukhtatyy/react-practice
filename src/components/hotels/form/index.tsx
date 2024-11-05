import CardContent from '../card/content';
import Room from './room';

const HotelsCardForm = (props: Props) => {
  return (
    <div className="container mx-auto my-8">
      <CardContent withBookingButton={false} />
      <div className="hotels-form-rooms">
        <Room />
      </div>
    </div>
  );
};

export default HotelsCardForm;
