import Slider from '../common/filter/filter-bubbles/slider';
import StarsRating from '../common/filter/filter-bubbles/stars-rating';
import ToggleGroup from '../common/filter/filter-bubbles/toggle-group';
import SecondFilter from '../common/filter/second-filter';

const mealTypes = ['ALL', 'BB', 'HB', 'RO'];

const HotelsSecondFilter = () => {
  return (
    <SecondFilter>
      <StarsRating title="Рейтинг отеля" />
      <ToggleGroup title="Питание" titles={mealTypes} />
      <Slider title="Цена" range={[0, 1000]} />
    </SecondFilter>
  );
};

export default HotelsSecondFilter;
