import FilterHint from '@/components/ui/filter-hint';
import { Slider } from '@/components/ui/slider';
import { Tag } from '@/components/ui/tag';
import { useState } from 'react';

type Props = {
  range: number[];
  title: string;
};

//доделать
const FilterSlider = (props: Props) => {
  const { range, title } = props;
  const [, setSelectedRange] = useState<number[]>(range);
  const [expanded, setExpanded] = useState(false);

  const handleRangeChange = (values: number[]) => {
    setSelectedRange(values);
    console.log('Selected range:', values);
  };

  return (
    <>
      {expanded ? (
        <Tag style={{ width: '200px' }} setExpanded={setExpanded}>
          <div>$</div>
          <Slider
            defaultValue={range}
            min={range[0]}
            max={range[1]}
            // step={1}
            // onRangeChange={handleRangeChange}
          />
        </Tag>
      ) : (
        <FilterHint title={title} setExpanded={setExpanded} />
      )}
    </>
  );
};

export default FilterSlider;
