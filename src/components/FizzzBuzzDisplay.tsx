const FizzBuzzDisplay = (props: {value:number}) =>{

    const getValueAsText = () =>{
        if (props.value % 15 === 0) return 'FizzBuzz';
        if (props.value % 5 === 0) return 'Buzz';
        if (props.value % 3 === 0) return 'Fizz';
        return props.value;
    }
    return (
        <span>{getValueAsText()}</span> )
    
    


}

export default FizzBuzzDisplay