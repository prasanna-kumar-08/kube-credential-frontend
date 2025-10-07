import React, { useState } from 'react';

const IssuancePage: React.FC = () => {
  const [credentialJson, setCredentialJson] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIssue = async () => {
    setError(null);
    setResponse(null);
    try {
      const parsed = JSON.parse(credentialJson);
      const res = await fetch('http://localhost:3000/issue', { // Change URL to your BE Issuance service
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed)
      });
      const data = await res.json();
      if (!res.ok) setError(data.message || 'Error issuing credential');
      else setResponse(JSON.stringify(data, null, 2));
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Issue Credential</h1>
      <textarea
        rows={10}
        cols={50}
        placeholder='Enter credential JSON here'
        value={credentialJson}
        onChange={(e) => setCredentialJson(e.target.value)}
      />
      <br />
      <button onClick={handleIssue} style={{ marginTop: '1rem' }}>Issue</button>

      {error && <pre style={{ color: 'red', marginTop: '1rem' }}>{error}</pre>}
      {response && <pre style={{ color: 'green', marginTop: '1rem' }}>{response}</pre>}
    </div>
  );
};

export default IssuancePage;
