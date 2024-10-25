import { ListFilter } from 'lucide-react';
import { Button } from './button';

type Props = {
  title: string;
  setExpanded: (expanded: boolean) => void;
};

const FilterHint = (props: Props) => {
  const { title, setExpanded } = props;
  return (
    <Button variant="ghost" onClick={() => setExpanded(true)}>
      <ListFilter strokeWidth={1} />
      {title}
    </Button>
  );
};

export default FilterHint;
