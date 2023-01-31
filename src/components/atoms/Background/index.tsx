import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

export const Background: React.FC<IBackgroundProps> = (
  props: IBackgroundProps
) => <div className={props.color}>{props.children}</div>;

export default Background;
