import React, { useState } from 'react';

import DynamicFormRenderer from './components/DynamicFormRenderer';
import DataGrid from './components/DataGrid';
import DynamicFormBuilder from './components/DynamicFormBuilder';

export default function App() {
  const [formSchema, setFormSchema] = useState([]);

  const loadSchemaFromBackend = () => {
    const sampleSchema = [
      { label: 'First Name', type: 'text', name: 'first_name', options: [] },
      { label: 'Age', type: 'number', name: 'age', options: [] },
      { label: 'Birthday', type: 'date', name: 'birthday', options: [] },
      { label: 'Favorite Color', type: 'dropdown', name: 'favorite_color', options: ['Red', 'Green', 'Blue'] },
    ];
    setFormSchema(sampleSchema);
  };

  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>Dynamic Form & Data Grid Demo</h1>
      <button onClick={loadSchemaFromBackend} style={{ marginBottom: 10 }}>
        Load Form Schema from Backend (Firebase JSON)
      </button>

      <DynamicFormBuilder onSchemaChange={setFormSchema} />
      <DynamicFormRenderer schema={formSchema} />

      <DataGrid />
    </div>
  );
}
