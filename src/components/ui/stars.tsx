import { useState } from 'react';
import { Star } from 'lucide-react';

type Props = {
  onChange?: (stars: number) => void;
};

const Stars = ({ onChange = () => {} }: Props) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (star: number) => {
    setSelectedStars(star);
    onChange(star);
  };

  const renderStars = () => {
    const stars = [1, 2, 3, 4, 5];
    return stars.map((star) => (
      <span
        key={star}
        onClick={() => handleStarClick(star)}
        style={{ cursor: 'pointer', marginRight: '5px' }}
      >
        <Star
          size={24}
          strokeWidth={1}
          fill={star <= selectedStars ? 'gold' : 'lightgray'}
          color="gray"
        />
      </span>
    ));
  };

  return (
    <div className="flex">
      {/* <h3>Filter by Star Rating:</h3> */}
      {renderStars()}
    </div>
  );
};

export default Stars;
