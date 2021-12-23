import ReactDOM from 'react-dom';
import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, Selection, IColumn } from '@fluentui/react/lib/DetailsList';
import  {  initializeIcons  }  from  '@fluentui/react/lib/Icons' ;
initializeIcons();

interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;
}

interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
}

class DetailsListBasicExample extends React.Component<{}, IDetailsListBasicExampleState> {

  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    // Populate with items for demos.
    this._allItems = [];
    for (let i = 0; i < 3; i++) {
      this._allItems.push({
        key: i,
        name: 'Item ' + i,
        value: i,
      });
    }

    this._columns = [
      { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    this.state = {
      items: this._allItems,
    };
  }

  public render(): JSX.Element {
    const { items } = this.state;
    return (
      <DetailsList
        items={items}
        columns={this._columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.justified}
        selectionPreservedOnEmptyClick={true}

        ariaLabel="Aria label for grid"
        ariaLabelForGrid="Aria label for grid"
        ariaLabelForListHeader="Aria label for list header"
        ariaLabelForSelectionColumn="Aria label for selection column"
        ariaLabelForSelectAllCheckbox="Aria label for select all checkbox"

        checkButtonAriaLabel="Check button aria label"
        checkButtonGroupAriaLabel="Check button group aria label"
      />
    );
  }
}


ReactDOM.render(<DetailsListBasicExample />, document.getElementById('root'));
