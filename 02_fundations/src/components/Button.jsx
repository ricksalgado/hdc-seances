const Button = () => {
    const handleClick = () => {
        console.log("aqui clicou");
    };

    return <button onClick={handleClick}>Click here</button>   
};

export default Button;
