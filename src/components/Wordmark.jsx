// The griselhub wordmark: lowercase, Bricolage Grotesque ExtraBold, with the
// dot of the "i" replaced by an amber accent (a dotless ı + a CSS dot), so it
// stays live text — crisp at any size and readable by screen readers.
function Wordmark({ className = '' }) {
  return (
    <span className={`wordmark ${className}`} aria-label="griselhub">
      <span aria-hidden="true">
        gr<span className="wordmark__i">ı</span>selhub
      </span>
    </span>
  )
}

export default Wordmark
