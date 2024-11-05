import { CircleChevronUp, CircleX, ListFilter } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
};

const SecondFilterContent = (props: Props) => {
  const { children, expanded, setExpanded } = props;

  return (
    <div className="container mx-auto flex my-2 justify-between">
      <div className="flex">{children}</div>
      <div>
        <div className="second-filter-buttons">
          <Button variant="ghost">
            <CircleX strokeWidth={1} />
            Сбросить все
          </Button>
          <Button variant="secondary" onClick={() => setExpanded(false)}>
            <CircleChevronUp strokeWidth={1} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondFilterContent;
