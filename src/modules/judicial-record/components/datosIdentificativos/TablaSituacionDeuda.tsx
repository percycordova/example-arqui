'use client';

type Row = {
  concepto: string;
  saldoInicial?: number;
  incremento?: number;
  reduccion?: number;
  saldoFecha?: number;
  variacion?: number;
};

const nf = new Intl.NumberFormat('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const dummy: Row[] = [
  { concepto: 'Capital', saldoInicial: 0, incremento: 0, reduccion: 0, saldoFecha: 0, variacion: 0 },
  { concepto: 'Interés', saldoInicial: 0, incremento: 0, reduccion: 0, saldoFecha: 0, variacion: 0 },
  { concepto: 'Gastos', saldoInicial: 0, incremento: 0, reduccion: 0, saldoFecha: 0, variacion: 0 },
];

export const TablaSituacionDeuda = () => {
  return (
    <section className="space-y-3">
      <h3 className="text-red-700 font-bold tracking-wide">II. SITUACIÓN DE LA DEUDA</h3>

      <div className="overflow-x-auto rounded border">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200/70">
            <tr className="[&>th]:border [&>th]:px-2 [&>th]:py-1 text-sm">
              <th className="text-left">Concepto</th>
              <th className="text-right">Saldo Inicial</th>
              <th className="text-right">Incremento</th>
              <th className="text-right">Reducción</th>
              <th className="text-right">Saldo a la Fecha</th>
              <th className="text-right">Variación</th>
            </tr>
          </thead>
          <tbody>
            {dummy.map((r, i) => (
              <tr
                key={r.concepto + i}
                className={i % 2 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="border px-2 py-1 text-sm">{r.concepto}</td>
                <CellNum v={r.saldoInicial} />
                <CellNum v={r.incremento} />
                <CellNum v={r.reduccion} />
                <CellNum v={r.saldoFecha} />
                <CellNum v={r.variacion} />
              </tr>
            ))}
            {/* Filas extra vacías para simular el look con líneas */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <tr key={`empty-${idx}`} className={idx % 2 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border px-2 py-3 text-sm">&nbsp;</td>
                <td className="border px-2 py-3" />
                <td className="border px-2 py-3" />
                <td className="border px-2 py-3" />
                <td className="border px-2 py-3" />
                <td className="border px-2 py-3" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

function CellNum({ v }: { v?: number }) {
  return (
    <td className="border px-2 py-1 text-right tabular-nums text-sm">
      {typeof v === 'number' ? nf.format(v) : ''}
    </td>
  );
}
