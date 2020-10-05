import React, { useState } from 'react';
import { MuuriComponent, useGrid } from 'muuri-react';
// @ts-ignore
import {boardOptions, columnOptions, getRandomWord, useSend} from './utils';
import './muuri.css';

export const Muuri = () => {

  const [items, setItems] = useState({
    todo: ['4', '6', '5', '10'],
    working: ['1', '3', '8'],
    done: ['2', '7', '9'],
  });

  const onSend = useSend(setItems);

  const Item = React.memo(({id}) => {
    // State is manteined when an item change parent.
    const [tag] = useState(getRandomWord());
    // Get the MuuriComponent parent id.
    // @ts-ignore
    const gridId = useGrid().id.toLowerCase();

    return (
      <div className="board-item">
        <div className="board-item-content">
          <span>Item </span>
          {`${id} - ${tag}`}
          <div className={`tab-item ${gridId}-tab-item`} />
        </div>
      </div>
    );
  });

  const children = {
    todo: items.todo.map((id) => <Item id={id} key={id} />),
    done: items.done.map((id) => <Item id={id} key={id} />),
    working: items.working.map((id) => <Item id={id} key={id} />),
  };

  // @ts-ignore
  const Column = ({children, actionClass, title}) => (
    <div className={'board-column ' + actionClass}>
      <div className="board-column-header">{title}</div>
      {children}
    </div>
  );

  return (
    <MuuriComponent {...boardOptions}>
      <Column actionClass="todo" title="To do">
        <MuuriComponent id={'TODO'} onSend={onSend} {...columnOptions}>
          {children.todo}
        </MuuriComponent>
      </Column>
      <Column actionClass="working" title="Working">
        <MuuriComponent id={'WORKING'} onSend={onSend} {...columnOptions}>
          {children.working}
        </MuuriComponent>
      </Column>
      <Column actionClass="done" title="Done">
        <MuuriComponent id={'DONE'} onSend={onSend} {...columnOptions}>
          {children.done}
        </MuuriComponent>
      </Column>
    </MuuriComponent>
  );
};