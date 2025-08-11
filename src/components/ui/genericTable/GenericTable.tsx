import { ReactNode, useRef, useEffect, useState } from 'react';

interface GenericTableProps<T> {
  data: T[];
  renderHeader: () => ReactNode;
  renderRow: (row: T, index: number) => ReactNode;
  emptyMessage?: string;

  /** ancho mínimo para forzar scroll horizontal cuando no quepa */
  minWidth?: number | string; // ej. 1200 o "1200px"
  /** alto máximo del cuerpo para scroll vertical interno (opcional) */
  maxBodyHeight?: number | string; // ej. 420 o "60vh"
  /** fija el header cuando hay scroll vertical */
  stickyHeader?: boolean;
}

export const GenericTable = <T,>({
  data,
  renderHeader,
  renderRow,
  emptyMessage = 'No hay datos disponibles',
  minWidth = 1024,
  maxBodyHeight,
  stickyHeader = true,
}: GenericTableProps<T>) => {
  const hasData = data.length > 0;

  // sombra del header al scrollear verticalmente
  const bodyRef = useRef<HTMLDivElement>(null);
  const [elevated, setElevated] = useState(false);
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const onScroll = () => setElevated(el.scrollTop > 0);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
      {/* Wrapper con scroll horizontal + scrollbar agradable */}
      <div className="overflow-x-auto [scrollbar-width:thin]">
        {/* min-w para forzar scroll cuando no alcance */}
        <div style={{ minWidth: typeof minWidth === 'number' ? `${minWidth}px` : minWidth }}>
          {/* Header */}
          <div
            className={[
              'bg-gray-100 border-b border-gray-200',
              stickyHeader && maxBodyHeight ? 'sticky top-0 z-10' : '',
              elevated ? 'shadow-md' : '',
            ].join(' ')}
          >
            {renderHeader()}
          </div>

          {/* Body con división de filas y scroll vertical opcional */}
          <div
            ref={bodyRef}
            className="divide-y divide-gray-200"
            style={
              maxBodyHeight
                ? {
                    maxHeight:
                      typeof maxBodyHeight === 'number' ? `${maxBodyHeight}px` : (maxBodyHeight as string),
                    overflowY: 'auto',
                  }
                : undefined
            }
          >
            {hasData ? (
              <>{data.map((item, index) => renderRow(item, index))}</>
            ) : (
              <div className="py-12 text-center text-gray-500">{emptyMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
