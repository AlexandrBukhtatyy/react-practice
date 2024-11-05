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
import Stars from '@/components/ui/stars';

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
const HotelsCardContent = (props: Props) => {
  const {
    title = 'Рэдисон Блу Белорусская',
    images = [],
    location = {
      city: 'г.Москва - в центре',
      subway: '300 м до станции метро Белорусская',
      adress: 'Россия. Москва. 3-я улица Ямского Поля. 26А',
    },
    advantages,
    phoneNumber = '+7 495 660-49-00',
    site = 'www.radissonblu.com',
    feedbacksCount = '363',
    withBookingButton = true,
  } = props;
  return (
    <div className="hotels-card flex justify-between border rounded-md mx-auto my-4 p-4 h-auto">
      <div className="flex ">
        <div className="hotels-card-images">
          <img
            src="src/mocks/radisson.jpg"
            alt="radisson"
            className="w-72 h-auto"
          />
          {/*сделать карусель фото*/}
        </div>
        <div className="hotels-card-info flex flex-col justify-between ml-4 gap-4">
          <div>
            <div className="flex gap-4 content-center">
              <h2 className="font-semibold text-lg">{title}</h2>
              <Stars /> {/*доделать для статичного представления*/}
            </div>
            <div className="flex gap-4 content-center text-xs text-slate-400">
              <span>{location?.city}</span>
              <div className="flex items-center">
                <TrainFrontTunnel className="h-3" />
                <span>{location?.subway}</span>
              </div>
            </div>
            <div className="hotels-card-advantages flex gap-1 my-2">
              <div className="border rounded-full py-1.5 px-0.5 h-auto w-fit">
                <UtensilsCrossed className="h-4 text-gray-600" />
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
          <div className="flex flex-col text-xs gap-2">
            <div className="flex items-center">
              <MapPin className="h-3" />
              <span>{location?.adress}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-3" />
              <span>{phoneNumber}</span>
            </div>
            <div className="flex items-center">
              <Link2 className="h-3" />
              <span>{site}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hotels-card-buttons flex flex-col justify-between">
        <div className="hotels-card-reviewers flex flex-col items-center p-3 bg-slate-100 text-sm">
          <div>
            <img
              src="src/mocks/tripadvisor.svg"
              alt="tripadvisor"
              className="w-24 h-auto"
            />
          </div>
          <div>Читать отзывы ({feedbacksCount})</div>
        </div>
        {withBookingButton && (
          <Button title="Забронировать" className="bg-sky-500" />
        )}
      </div>
    </div>
  );
};

export default HotelsCardContent;
