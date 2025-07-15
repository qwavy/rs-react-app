import React from 'react';
import { CardList } from '../../components/card';
import type { Planet } from '../../shared/types';

interface Props {
  planets: Planet[];
  isLoading: boolean;
}

export class Content extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div>
        <CardList
          planets={this.props.planets}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}
