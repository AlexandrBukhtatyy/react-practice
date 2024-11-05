import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
};

const FilterContent = (props: Props) => {
  const { children } = props;
  return (
    <div className="bg-sky-100">
      <div className="container mx-auto flex gap-2 py-3">
        {children}
        <Button>
          <Search />
          Поиск
        </Button>
      </div>
    </div>
  );
};

export default FilterContent;
