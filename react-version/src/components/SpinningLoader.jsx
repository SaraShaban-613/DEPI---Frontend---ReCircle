function SpinningLoader() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div style={{
                width: '48px',
                height: '48px',
                border: '4px solid #ccc',
                borderTop: '4px solid #0a421fff',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }} />
            <p style={{ marginTop: '1rem', color: '#4b5563', fontWeight: '500' }}>Loading dashboard...</p>

            <style>{`
                @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
                }
            `}
            </style>
        </div>
    );
}

export default SpinningLoader;