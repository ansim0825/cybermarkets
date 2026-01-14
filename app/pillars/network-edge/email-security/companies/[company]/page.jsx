export default function CompanyPage({ params }) {
    return (
      <div style={{ padding: '50px', color: 'white', background: '#111' }}>
        <h1>Company: {params?.company}</h1>
        <p>If you see this, routing works!</p>
      </div>
    );
  }