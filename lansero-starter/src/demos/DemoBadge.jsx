import { Link } from 'react-router-dom'
import './DemoBadge.css'

export default function DemoBadge() {
  return (
    <Link to="/exempel" className="demo-badge">
      <span className="demo-badge__dot" aria-hidden="true" />
      Demo av Lansero · påhittat företag
    </Link>
  )
}
