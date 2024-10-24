import { DatePickerWithRange } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import Filter from '../common/filter';

const HotelsFilter = () => {
  return (
    <Filter>
      <Input placeholder="Введите название отеля" type="text" />
      <DatePickerWithRange />
      <div className="flex mx-auto">
        <div>одноместные</div>
        <div>двухместные</div>
        <div>трехместные</div>
      </div>
    </Filter>
  );
};

export default HotelsFilter;
