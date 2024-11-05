import List from '../common/list';
import Card from './card';
import Filter from './filter';
import Form from './form';

const getHotelEnds = (count: number) => {
  const end =
    count % 10 === 1 ? 'ь' : count % 10 >= 2 && count % 10 <= 4 ? 'я' : 'ей';
  return `отел${end}`;
};

const SORTING_TITLES = ['По рейтингу', 'По цене', 'По звездности'];

type Props = {
  count: number;
};
const Hotels = (props: Props) => {
  const { count = 383 } = props;
  return (
    <>
      <Filter />
      <List
        count={count}
        countName={getHotelEnds(count)}
        titles={SORTING_TITLES}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </>
  );
};

export default Hotels;
