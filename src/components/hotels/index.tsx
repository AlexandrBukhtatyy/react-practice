import SecondFilter from './second-filter';
import Filter from './filter';

type Props = {};
const Hotels = (props: Props) => {
  return (
    <>
      <Filter />
      <SecondFilter />
    </>
  );
};

export default Hotels;
