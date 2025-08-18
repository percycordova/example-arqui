import { useState } from 'react';

export const ResumeConcursal = () => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 font-medium">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="form-checkbox"
          />
          Acepto los términos
        </label>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
    </div>
  );
};
