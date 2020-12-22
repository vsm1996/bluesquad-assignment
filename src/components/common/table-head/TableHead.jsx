import React from 'react'
import './TableHead.css'

const TableHead = ({ columns }) => {
  return (<thead>
    <tr>
      {columns.map((column, index) => (
        <th
          className="thead"
          key={index}
          scope="col">
          {column}
        </th>
      ))}
    </tr>
  </thead>);
}

export default TableHead;

