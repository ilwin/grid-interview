import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
      {config.map(( {title, ...confs}, ind ) => (
        <th key={ ind } >{ title }</th>
        )
      )}
    </tr>
    </thead>
    <tbody>
      {data.map(dataSet => (
        <tr key={ dataSet.imdbID }>
          {config.map(( {component, field, ...confs} , ind ) => {
              const Component = component ? component : null;
              return  (component 
                ? <td key={ ind }><Component data={dataSet[field]} /></td>
                : <td key={ ind }>{ dataSet[field] }</td>)
            }
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;