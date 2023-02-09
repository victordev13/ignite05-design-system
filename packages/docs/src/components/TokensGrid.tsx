import '../styles/tokens-grid.css'

interface Props {
  tokens: Record<string, string>
  showConvertedRemToPx?: boolean
}

export function TokensGrid({ tokens, showConvertedRemToPx }: Props) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {showConvertedRemToPx && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {showConvertedRemToPx && (
              <td>{Number(value.replace('rem', '')) * 16}px</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
