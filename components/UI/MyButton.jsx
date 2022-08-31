function myButton({children, onClick}) {
    const styles = {
        backgroundColor: '#0D62F0',
        padding: '14px 32px',
        borderRadius: '25px',
        color: 'white',
    }
    return (
        <button onClick={onClick} style={styles}>
            {children}
        </button>
     );
}

export default myButton;