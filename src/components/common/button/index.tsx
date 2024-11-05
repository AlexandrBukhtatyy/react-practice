import { Button as UiButton } from '@/components/ui/button';

type Props = {
  title?: string;
};

const Button = (props: Props) => {
  return <UiButton {...props}>{props.title}</UiButton>;
};

export default Button;
