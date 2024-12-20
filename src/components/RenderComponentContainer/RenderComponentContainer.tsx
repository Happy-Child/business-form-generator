import { ReactNode } from 'react';

import { useComponentViewById } from '_services/componentsView/hooks';
import { TreeNode } from '_types/components';

import { RenderComponent } from './RenderComponent';

export function RenderComponentContainer<T extends TreeNode>({
  id,
  ...props
}: T): ReactNode {
  const Component = useComponentViewById(id);

  if (!Component) {
    // TODO impl placeholder component
    return <h4>Component not exist</h4>;
  }

  return <RenderComponent id={id} Component={Component} {...props} />;
}
