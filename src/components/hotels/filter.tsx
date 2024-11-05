import { DatePickerWithRange } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import Filter from '../common/filter';

const HotelsFilter = () => {
  return (
    <Filter>
      <Input placeholder="Введите название отеля" type="text" />
      <DatePickerWithRange />
    </Filter>
  );
};

export default HotelsFilter;
