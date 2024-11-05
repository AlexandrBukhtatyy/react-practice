import {
  CigaretteOff,
  CircleParking,
  Dumbbell,
  HandPlatter,
  Link2,
  MapPin,
  Phone,
  TrainFrontTunnel,
  UtensilsCrossed,
  WashingMachine,
} from 'lucide-react';
import Button from '@/components/common/button';

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
const HotelsFormRoom = (props: Props) => {
  const {
    title = 'Стандартный двухместный номер',
    location = {
      city: 'г.Москва - в центре',
      subway: '300 м до станции метро Белорусская',
      adress: 'Россия. Москва. 3-я улица Ямского Поля. 26А',
    },
    phoneNumber = '+7 495 660-49-00',
    site = 'www.radissonblu.com',
  } = props;
  return (
    <div className="room flex justify-between mx-auto my-4 p-4 h-auto">
      <div className="flex ">
        <div className="room-images">
          <img
            src="src/mocks/radisson-room-main.jpeg"
            alt="radisson"
            className="w-72 h-auto"
          />
        </div>
        <div className="room-info flex flex-col justify-between ml-4 gap-4">
          <div>
            <div className="flex gap-4 content-center">
              <p className="text-lg">{title}</p>
            </div>
            <div className="room-advantages flex flex-col gap-1 my-2">
              <div className="flex">
                <div className="border rounded-full py-1.5 px-0.5 h-auto w-fit">
                  <UtensilsCrossed className="h-4 text-gray-600" />
                </div>
                <span>Завтрак включен</span>
              </div>

              <div className="border rounded-full py-1.5 px-0.5 h-auto w-fit">
                <CircleParking className="h-4 text-gray-600" />
              </div>
              <div className="border rounded-full py-1.5 px-0.5 h-auto w-fit">
                <CigaretteOff className="h-4 text-gray-600" />
              </div>
              <div className="border rounded-full py-1.5 px-0.5 h-auto w-fit">
                <Dumbbell className="h-4 text-gray-600" />
              </div>
              <div className="border rounded-full py-1.5 px-0.5 h-auto w-fit">
                <WashingMachine className="h-4 text-gray-600" />
              </div>
              <div className="border rounded-full py-1.5 px-0.5 h-auto w-fit">
                <HandPlatter className="h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button title="Забронировать" className="bg-sky-500" />
    </div>
  );
};

export default HotelsFormRoom;
