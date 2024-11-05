import { useState } from 'react';
import { Tag } from '@/components/ui/tag';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import FilterHint from '@/components/ui/filter-hint';

type Props = {
  title: string;
  titles: string[];
  type?: any;
  size?: any;
};

const FilterToggleGroup = (props: Props) => {
  const { title, titles, type = 'multiple', size = 'sm' } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {expanded ? (
        <Tag setExpanded={setExpanded}>
          <ToggleGroup type={type} size={size}>
            {titles.map((title) => (
              <ToggleGroupItem value={title} key={title}>
                {title}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </Tag>
      ) : (
        <FilterHint title={title} setExpanded={setExpanded} />
      )}
    </>
  );
};

export default FilterToggleGroup;
