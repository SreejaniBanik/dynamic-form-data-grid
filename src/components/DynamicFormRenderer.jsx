import React, { useState } from 'react';

export default function DynamicFormRenderer({ schema }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!schema || schema.length === 0) return <p>No form schema defined</p>;

  return (
    <div style={{border: '1px solid #aaa', padding: 10, marginBottom: 20}}>
      <h3>Dynamic Form Renderer</h3>
      <form>
        {schema.map(field => (
          <div key={field.name} style={{ marginBottom: 10 }}>
            <label>
              {field.label}:&nbsp;
              {field.type === 'dropdown' ? (
                <select name={field.name} onChange={handleChange}>
                  <option value="">Select</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  onChange={handleChange}
                />
              )}
            </label>
          </div>
        ))}
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
