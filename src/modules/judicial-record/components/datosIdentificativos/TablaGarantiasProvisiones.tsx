'use client';

export const TablaGarantiasProvisiones = () => {
  return (
    <section className="space-y-3">
      <h3 className="text-red-700 font-bold tracking-wide">
        III. SITUACIÓN DE LAS GARANTÍAS Y PROVISIONES
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Garantías (ocupa 2/3) */}
        <div className="lg:col-span-2 overflow-x-auto rounded border">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-200/70">
              <tr className="[&>th]:border [&>th]:px-2 [&>th]:py-1 text-sm">
                <th className="text-left">Garantías</th>
                <th className="text-right">Valor Gravamen</th>
                <th className="text-right">VRI</th>
                <th className="text-left">Fecha Tasación</th>
                <th className="text-left">Propiedad</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, i) => (
                <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border px-2 py-3 text-sm" />
                  <td className="border px-2 py-3 text-right tabular-nums text-sm" />
                  <td className="border px-2 py-3 text-right tabular-nums text-sm" />
                  <td className="border px-2 py-3 text-sm" />
                  <td className="border px-2 py-3 text-sm" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Provisiones (1/3) */}
        <div className="space-y-3">
          <div className="overflow-x-auto rounded border">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-200/70">
                <tr className="[&>th]:border [&>th]:px-2 [&>th]:py-1 text-sm">
                  <th className="text-left">Provisiones</th>
                  <th className="text-right">Importe</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border px-2 py-3 text-sm" />
                    <td className="border px-2 py-3 text-right tabular-nums text-sm" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h4 className="text-red-700 underline font-medium mb-2">
              Propiedades de las Garantías
            </h4>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Bienes propios de la empresa</li>
              <li>Bienes de terceros</li>
              <li>Bienes que garantizan a otras deudas</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
