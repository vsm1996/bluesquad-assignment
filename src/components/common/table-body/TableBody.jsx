import React from 'react'
import ChartStats from '../chart-stats/ChartStats';
import moment from 'moment'

import './TableBody.css'

const TableBody = ({ data, getMissionData }) => {

  //dynamically render icons
  const renderMissionType = (type) => {
    switch (type) {
      case 'education': return (<i className='far fa-lightbulb' />)
      case 'text_sharing': return (<i className='far fa-comment-dots' />)
      case 'email_sharing': return (<i className="far fa-envelope" />)
      default: return type;
    }
  }

  return (
    <tbody className="tbody">
      {data.map((item, index) =>
      (
        <tr key={item._id} className="tbody-row">
          <td
            className="tbody-type"
            onClick={() => getMissionData(item.mission_type)}
          >
            {renderMissionType(item.mission_type)}
          </td>
          <td
            className="tbody-type"
            onClick={() => getMissionData(item.mission_type)}
          >
            {item.title}
          </td>

          <ChartStats id={item._id} />

          <td>{moment(item.start_date).format('MMM D, YYYY')}</td>
          <td>{moment(item.end_date).format('MMM D, YYYY')}</td>

        </tr>
      )
      )}
    </tbody>
  );
}

export default TableBody;