import { useState } from 'react';
import Stars from '@/components/ui/stars';
import { Tag } from '@/components/ui/tag';
import FilterHint from '@/components/ui/filter-hint';

type Props = {
  title: string;
};
const FilterStarsRating = ({ title }: Props) => {
  const [, setSelectedStars] = useState<number>(0);
  const [expanded, setExpanded] = useState(false);

  const handleStarRatingChange = (stars: number) => {
    setSelectedStars(stars);
    console.log('Selected stars:', stars);
  };

  return (
    <>
      {expanded ? (
        <Tag setExpanded={setExpanded}>
          <Stars onChange={handleStarRatingChange} />
        </Tag>
      ) : (
        <FilterHint title={title} setExpanded={setExpanded} />
      )}
    </>
  );
};

export default FilterStarsRating;
