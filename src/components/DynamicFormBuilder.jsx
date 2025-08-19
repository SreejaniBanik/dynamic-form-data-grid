import React, { useState } from 'react';

const fieldTypes = ['text', 'number', 'date', 'dropdown'];

export default function DynamicFormBuilder({ onSchemaChange }) {
  const [fields, setFields] = useState([]);
  const [label, setLabel] = useState('');
  const [type, setType] = useState('text');
  const [options, setOptions] = useState('');

  const addField = () => {
    if (!label.trim()) return alert('Field label is required');
    const newField = {
      label,
      type,
      options: type === 'dropdown' ? options.split(',').map(o => o.trim()) : [],
      name: label.toLowerCase().replace(/\s+/g, '_'),
    };
    const updatedFields = [...fields, newField];
    setFields(updatedFields);
    setLabel('');
    setOptions('');
    onSchemaChange(updatedFields);
  };

  return (
    <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: 20}}>
      <h3>Dynamic Form Builder</h3>
      <div>
        <input
          placeholder="Field Label"
          value={label}
          onChange={e => setLabel(e.target.value)}
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          {fieldTypes.map(ft => (
            <option key={ft} value={ft}>{ft}</option>
          ))}
        </select>
        {type === 'dropdown' && (
          <input
            placeholder="Comma separated options"
            value={options}
            onChange={e => setOptions(e.target.value)}
          />
        )}
        <button onClick={addField}>Add Field</button>
      </div>

      <div>
        <h4>Current Schema</h4>
        <pre>{JSON.stringify(fields, null, 2)}</pre>
      </div>
    </div>
  );
}
