
const results = [
  { fraction: 0.2, deltaV: 4.024 },
  { fraction: 0.3, deltaV: 3.010 },
  { fraction: 0.4, deltaV: 2.291 },
  { fraction: 0.5, deltaV: 1.733 },
  { fraction: 0.6, deltaV: 1.277 },
  { fraction: 0.7, deltaV: 0.892 },
  { fraction: 0.8, deltaV: 0.558 },
  { fraction: 0.9, deltaV: 0.263 },
];

export default function PropulsionResults() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="border-b border-white/10 bg-white/[0.03] p-5">
        <p className="text-xs tracking-[0.2em] text-blue-300">
          REFERENCE DATASET
        </p>
        <h3 className="mt-2 text-lg font-medium text-white">
          Ideal velocity change by mass ratio
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Baseline assumptions: initial mass 1,000 kg and effective exhaust
          velocity 2,500 m/s.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-xs text-slate-400">
            <tr>
              <th className="px-5 py-4 font-medium">Mass remaining</th>
              <th className="px-5 py-4 font-medium">Final mass (kg)</th>
              <th className="px-5 py-4 font-medium">Mass ratio</th>
              <th className="px-5 py-4 font-medium">Ideal Δv (km/s)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr
                key={result.fraction}
                className="border-t border-white/[0.07] text-slate-300"
              >
                <td className="px-5 py-4">
                  {(result.fraction * 100).toFixed(0)}%
                </td>
                <td className="px-5 py-4">
                  {(1000 * result.fraction).toLocaleString("en-US")}
                </td>
                <td className="px-5 py-4">
                  {(1 / result.fraction).toFixed(2)}
                </td>
                <td className="px-5 py-4 font-medium text-blue-200">
                  {result.deltaV.toFixed(3)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="border-t border-white/10 p-5 text-xs leading-6 text-slate-500">
        Calculations use Δv = vₑ ln(m₀/mf). Values are rounded to three
        decimal places. These ideal estimates exclude gravity, aerodynamic
        drag, and propulsion-system losses.
      </p>
    </div>
  );
}
