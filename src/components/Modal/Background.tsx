export const Background: React.FC<{
  onClose: () => void
}> = ({ onClose }) => (
  <div className="fixed inset-0 bg-gray-800/80" onClick={onClose} />
)
