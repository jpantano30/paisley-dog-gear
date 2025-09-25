// components/Banner.jsx
export default function Banner() {
  return (
    <div className="site-banner" role="region" aria-label="New offering">
      <span className="site-banner-pill">New</span>
      Day Training — structured “day care while training”.
      {/* <a href="/training#rates" className="site-banner-link">See rates</a> */}
      <a href="/training" className="site-banner-link">Book Day Training</a>
    </div>
  );
}
